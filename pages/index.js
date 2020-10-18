import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
//import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <MidSection />
      <Welcome />
      <Footer />
    </div>
  );
}
