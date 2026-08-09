import { query } from '@/lib/db/client';

export class ReputationService {
  /**
   * Menghitung total poin kontribusi valid milik user.
   */
  static async getValidContributionCount(userId: string): Promise<number> {
    const res = await query(
      `SELECT COALESCE(SUM(points), 0) as total 
       FROM contribution_events 
       WHERE user_id = $1`,
      [userId]
    );
    return parseInt(res.rows[0]?.total || '0', 10);
  }

  /**
   * Mengecek kelayakan pemberian GRP berdasarkan aturan bisnis BR-040.
   */
  static async canAwardGrp(userId: string): Promise<boolean> {
    const contributionCount = await this.getValidContributionCount(userId);
    const GRP_THRESHOLD = 1000; // Aturan bisnis minimal 1.000 kontribusi valid
    
    return contributionCount >= GRP_THRESHOLD;
  }
}
```[cite: 2, 7]

---

### 3. API Endpoint Award GRP (`src/app/api/v1/grp/award/route.ts`)
API Route di Next.js App Router yang memproses permintaan pemberian GRP dengan validasi kualifikasi langsung dari `ReputationService`[cite: 1, 9].

```typescript
import { NextResponse } from 'next/server';
import { ReputationService } from '@/modules/reputation/reputation.service';
import { query } from '@/lib/db/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { actorUserId, recipientUserId, sourceReplyId, points, reason } = body;

    // 1. Validasi Input Dasar
    if (!actorUserId || !recipientUserId || points <= 0) {
      return NextResponse.json(
        { success: false, error: 'Data tidak lengkap atau poin tidak valid.' },
        { status: 400 }
      );
    }

    // 2. Cegah Self-Awarding
    if (actorUserId === recipientUserId) {
      return NextResponse.json(
        { success: false, error: 'Tidak dapat memberikan GRP kepada diri sendiri.' },
        { status: 400 }
      );
    }

    // 3. Verifikasi Syarat 1.000 Kontribusi Valid (BR-040)
    const isEligible = await ReputationService.canAwardGrp(actorUserId);
    if (!isEligible) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Anda memerlukan minimal 1.000 kontribusi valid untuk memberikan GRP.' 
        },
        { status: 403 }
      );
    }

    // 4. Catat Transaksi ke GRP Ledger (Imutabel)
    const result = await query(
      `INSERT INTO grp_ledger (actor_user_id, recipient_user_id, event_type, points, source_reply_id, reason)
       VALUES ($1, $2, 'award', $3, $4, $5)
       RETURNING id, created_at`,
      [actorUserId, recipientUserId, points, sourceReplyId || null, reason || null]
    );

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Terjadi kesalahan server.' },
      { status: 500 }
    );
  }
}
```[cite: 2, 4, 6]

---

### Langkah Praktis Selanjutnya
1. Simpan kodingan di atas ke dalam repositori kamu sesuai path-nya masing-masing (`src/lib/db/client.ts`, `src/modules/reputation/reputation.service.ts`, dan `src/app/api/v1/grp/award/route.ts`)[cite: 1, 9].
2. Buat file `.env.local` di folder utama proyek kamu dan tambahkan URL koneksi PostgreSQL milikmu:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/sawala_db?sslmode=disable"
