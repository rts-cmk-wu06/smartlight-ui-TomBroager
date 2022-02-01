import Home from "../Icons/Home";
import Light from "../Icons/Light";
import Settings from "../Icons/Settings";

const Footer = () => {
   return ( 
      <footer className="bg-themeColorTwo h-16 px-20 flex justify-around items-center">
         <Light />
         <Home />
         <Settings />
      </footer>
    );
}
 
export default Footer;