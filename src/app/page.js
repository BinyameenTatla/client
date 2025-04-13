import Navbar from "../Components/Navbar";

import Hero from "../Components/hero"
import Categories from "../Components/Categories";
import Popular from "../Components/Popular"
import Arrival from "../Components/Newarrival"
import ChooseUs from "../Components/whychoose";
import FAQSection from "../Components/faqs";
import AboutSection from "../Components/about";
import Footer from "../Components/footer";

export default function Home(){



return(

<>

  <Navbar />
  <Hero />
  <Categories />
  <Popular />
  <Arrival />
  <ChooseUs />
  
  <FAQSection />
  <AboutSection />
 
  <Footer />

  </>
)

}