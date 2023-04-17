import Footer from "./Footer";
import Header from "./Header";
import http from "@/services/httpService";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Header http={http} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
