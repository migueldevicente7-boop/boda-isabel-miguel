export const metadata = {
  title: 'Isabel y Miguel',
  description: 'Nuestra boda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
