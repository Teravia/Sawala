import "./globals.css";

export const metadata = {
  title: "SAWALA",
  description: "Community built on contribution.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
