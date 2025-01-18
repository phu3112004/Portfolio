import Header from "./header";
import Footer from "./footer";

interface IProps {
  children: React.ReactNode;
}
function DefaultLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
