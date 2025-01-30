 

import { useEffect  } from "react";
 import "./style.css";
import { projectsData, skillsArray } from "./data";
import {
  Header,
  AboutME,
  Skills,
  Projects,
  ContactUs,
  Footer
} from "./export.js";
import Aos from "aos";
import "aos/dist/aos.css";

 function App() {
  // bg-[#ECECEC;]

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-sine",
       mirror: true,
      
      
     });
  }, []);

  return (
    <div className="bg-[#ebeced]">
      <Header />
      <AboutME />
      <Skills data={skillsArray} />
      <Projects data={projectsData} />
      <ContactUs />
      <Footer />
    </div>
  );
} 


export default App;
