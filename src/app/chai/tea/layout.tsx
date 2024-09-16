export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>NavBar Part 3</h2>
      {children}
      <h2>Footer Part 3</h2>
    </>
  );
}
