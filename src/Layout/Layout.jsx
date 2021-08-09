import "./layout.css";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Routes from "components/Routes/Routes";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container my-3 main">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
