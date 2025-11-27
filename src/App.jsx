import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Logos from "./components/Logos.jsx";
import Product from "./components/Product.jsx";
import Feature from "./components/Feature.jsx";

function App() {
  return (
    <div className='bg-[#2B2B2B] flex flex-col items-center w-full h-full font-["Poppins", sans-serif]'>
      <Navbar />
      <MainSection />
      <Logos />
      <Product />
      <div className="flex justify-center items-center gap-14">
        <Feature
          src="src/assets/features/cards.png"
          alt="cards"
          title="Feature 1"
          description="Description of Feature 1"
        />
        <Feature
          src="src/assets/features/coin.png"
          alt="coin"
          title="Feature 2"
          description="Description of Feature 2"
        />
        <Feature
          src="src/assets/features/purse.png"
          alt="purse"
          title="Feature 3"
          description="Description of Feature 3"
        />
      </div>
    </div>
  );
}

export default App;
