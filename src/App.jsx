import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Logos from "./components/Logos.jsx";
import Product from "./components/Product.jsx";
import Feature from "./components/Feature.jsx";
import UserFeedback from "./components/UserFeedback/UserFeedback.jsx";

function App() {
  return (
    <div className='bg-[#2B2B2B] flex flex-col items-center w-full h-full font-["Poppins", sans-serif]'>
      <Navbar />
      <MainSection />
      <Logos />
      <Product />
      <div className="flex max-md:flex-col justify-center items-center px-14 md:px-31 gap-13">
        <Feature
          src="src/assets/features/cards.png"
          alt="cards"
          title="Customizable card"
          description="Custom your own card for your exact incomes and expenses needs."
        />
        <Feature
          src="src/assets/features/coin.png"
          alt="coin"
          title="No payment fee"
          description="Transfer your payment all over the world with no payment fee."
        />
        <Feature
          src="src/assets/features/purse.png"
          alt="purse"
          title="All in one place"
          description="The right place to keep your credit and debit cards, boarding passes & more."
        />
      </div>
      <UserFeedback />
    </div>
  );
}

export default App;
