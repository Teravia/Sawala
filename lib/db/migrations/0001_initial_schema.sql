-- 1. EXTENSIONS
create extension if not exists pgcrypto;
create extension if not exists citext;

-- 2. ENUM TYPES
create type account_status as enum (
  'active',
  'limited',
  'restricted',
  'suspended',
  'locked',
  'banned'
);

create type community_role as enum (
  'member',
  'moderator',
  'owner'
);

create type content_status as enum (
  'draft',
  'published',
  'locked',
  'restricted',
  'removed',
  'archived'
);

create type contribution_event_type as enum (
  'valid_reply',
  'quality_thread',
  'best_answer',
  'featured_thread',
  'removed_content',
  'serious_abuse'
);

create type grp_event_type as enum (
  'award',
  'reversal',
  'penalty'
);

-- 3. CORE TABLES
create table users (
  id uuid primary key default gen_random_uuid(),
  username citext not null unique,
  email citext not null unique,
  account_status account_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table profiles (
  user_id uuid primary key references users(id) on delete cascade,
  display_name varchar(100) not null,
  bio varchar(500),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table communities (
  id uuid primary key default gen_random_uuid(),
  slug citext not null unique,
  name varchar(100) not null,
  description varchar(500),
  status varchar(20) not null default 'active',
  created_by uuid not null references users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table community_members (
  community_id uuid not null references communities(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role community_role not null default 'member',
  joined_at timestamptz not null default now(),
  primary key (community_id, user_id)
);

create table threads (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id),
  author_id uuid not null references users(id),
  title varchar(180) not null,
  body text not null,
  status content_status not null default 'published',
  is_featured boolean not null default false,
  view_count bigint not null default 0,
  reply_count bigint not null default 0,
  quality_score numeric(10,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table replies (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references threads(id) on delete cascade,
  parent_reply_id uuid references replies(id) on delete cascade,
  author_id uuid not null references users(id),
  body text not null,
  status content_status not null default 'published',
  is_best_answer boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table tags (
  id uuid primary key default gen_random_uuid(),
  slug citext not null unique,
  name varchar(80) not null unique
);

create table thread_tags (
  thread_id uuid not null references threads(id) on delete cascade,
  tag_id uuid not null references tags(id) on delete cascade,
  primary key (thread_id, tag_id)
);

create table contribution_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  event_type contribution_event_type not null,
  source_thread_id uuid references threads(id),
  source_reply_id uuid references replies(id),
  points integer not null,
  reason text,
  created_at timestamptz not null default now()
);

create table grp_ledger (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid not null references users(id),
  recipient_user_id uuid not null references users(id),
  event_type grp_event_type not null,
  points integer not null,
  source_thread_id uuid references threads(id),
  source_reply_id uuid references replies(id),
  reversal_of uuid references grp_ledger(id),
  reason text,
  created_at timestamptz not null default now(),
  check (actor_user_id <> recipient_user_id),
  check (points > 0)
);

create table best_answers (
  thread_id uuid primary key references threads(id) on delete cascade,
  reply_id uuid not null unique references replies(id),
  selected_by uuid not null references users(id),
  selected_at timestamptz not null default now()
);

create table thread_rewards (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references threads(id) on delete cascade,
  recipient_user_id uuid not null references users(id),
  reward_points integer not null,
  quality_score numeric(10,2) not null,
  reward_version integer not null default 1,
  created_at timestamptz not null default now(),
  unique(thread_id, reward_version)
);

create table reports (
  id uuid primary key default gen_random_uuid(),
  reporter_user_id uuid not null references users(id),
  thread_id uuid references threads(id) on delete cascade,
  reply_id uuid references replies(id) on delete cascade,
  reason_code varchar(60) not null,
  description text,
  status varchar(30) not null default 'open',
  created_at timestamptz not null default now(),
  check (
    (thread_id is not null and reply_id is null)
    or
    (thread_id is null and reply_id is not null)
  )
);

create table moderation_actions (
  id uuid primary key default gen_random_uuid(),
  moderator_user_id uuid not null references users(id),
  target_user_id uuid references users(id),
  thread_id uuid references threads(id),
  reply_id uuid references replies(id),
  action varchar(50) not null,
  reason_code varchar(60) not null,
  notes text,
  created_at timestamptz not null default now()
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  type varchar(50) not null,
  title varchar(180) not null,
  body text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

-- 4. PERFORMANCE INDEXES
create index idx_threads_community_created on threads (community_id, created_at desc);
create index idx_threads_author_created on threads (author_id, created_at desc);
create index idx_replies_thread_created on replies (thread_id, created_at);
create index idx_replies_author_created on replies (author_id, created_at desc);
create index idx_contribution_user_created on contribution_events (user_id, created_at desc);
create index idx_grp_recipient_created on grp_ledger (recipient_user_id, created_at desc);
create index idx_grp_actor_created on grp_ledger (actor_user_id, created_at desc);
create index idx_reports_status_created on reports (status, created_at);
create index idx_notifications_user_read_created on notifications (user_id, read_at, created_at desc);
```[cite: 4]

---

**2. Catatan Imutabilitas Reputasi**

Sesuai aturan bisnis, skor kontribusi dan saldo GRP tidak disimpan sebagai angka tunggal yang diubah-ubah di tabel `users`[cite: 4]. Kalkulasi selalu diambil atau direkonsiliasi dari akumulasi *ledger*[cite: 4]:

* **Total Skor Kontribusi:**
  ```sql
  select user_id, coalesce(sum(points), 0) as contribution_score
  from contribution_events
  group by user_id;
  ```[cite: 4]
* **Saldo GRP:**
  ```sql
  select recipient_user_id,
    coalesce(sum(
      case
        when event_type = 'award' then points
        when event_type in ('reversal', 'penalty') then -points
        else 0
      end
    ), 0) as grp_balance
  from grp_ledger
  group by recipient_user_id;
  ```[cite: 4]

---

Silakan *commit* file SQL di atas ke repositori pada path `lib/db/migrations/0001_initial_schema.sql`[cite: 4, 9]. 

Jika sudah, langkah berikutnya dalam siklus kita adalah menyusun **API Contract** (Restful Endpoint Specs untuk Auth, Thread, Reply, GRP, dan Moderasi)[cite: 1]. Apakah bisa kita lanjut ke **API Contract**?
