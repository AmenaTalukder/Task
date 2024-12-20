import "./globals.css";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <div className="body-div">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </main>
  );
}
