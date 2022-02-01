import Heading from "./Components/Heading";
import Footer from "./Templates/Footer";
import MainContent from "./Templates/MainContent";

function App() {
  return (
    <div className="App h-screen flex flex-col justify-between bg-themeColorOne">
      <div className="px-6 pt-8">
        <Heading />
      </div>
      <div>
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
