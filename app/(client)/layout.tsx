import Footer from "@/components/common/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <p>children</p>
      <Footer />
    </>
  );
}
