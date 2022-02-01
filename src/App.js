import Footer from "./Templates/Footer";
import MainContent from "./Templates/MainContent";
import Header from "./Templates/Header";

function App() {
  return (
    <div className="App h-screen flex flex-col justify-between bg-themeColorOne">
      <div className="px-6 pt-8">
        <Header />
      </div>
      <div>
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
