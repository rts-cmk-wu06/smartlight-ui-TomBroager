import Heading from "../Components/Heading";
import ProfileImage from "../Components/ProfileImage";

const Header = () => {
   return ( 
      <header className="flex justify-between items-center">
      <Heading />
      <ProfileImage />
      </header>
    );
}
 
export default Header;