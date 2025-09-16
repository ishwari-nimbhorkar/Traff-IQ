import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/services";
import AddServices from "@/components/AddServices"
import Profiles from "@/components/Profiles"
import Book from "@/components/Book"
import Aboutus from "@/components/Aboutus"
import Aipower from "@/components/Aipower"
import Features from "@/components/Features"
import CustomCursor from "@/components/CustomCursor";


export default function Home() {
  return (
    <>
      <Navbar />
      <main id="hero" className="text-black">
        <Hero />
        <LogoMarquee />


        <Services />
         <AddServices />
        <Features />
        <Aipower />
       
        <Profiles />
        <Book />
        <Aboutus />
      </main>
       <Footer />
    </>
  );
}
