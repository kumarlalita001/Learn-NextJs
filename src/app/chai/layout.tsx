export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>NavBar Part 2</h2>
      {children}
      <h2>Footer Part 2</h2>
    </>
  );
}
