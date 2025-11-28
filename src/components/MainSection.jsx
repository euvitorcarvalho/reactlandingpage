import Button from "./Button";
import backgroundImg from "../assets/background.png";

function MainSection() {
  return (
    <div
      className="text-white flex flex-col gap-10 items-center bg-no-repeat bg-cover bg-bottom lg:min-h-[867px] min-h-[800px] w-full max-w-7xl pt-16 lg:pt-20"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="text-6xl text-center font-semibold max-sm:text-4xl">
        Saas Landing Page Template
      </h1>
      <p className="text-center text-gray-400 text-lg max-w-md">
        This is a template Figma file, turned into code using React. Learn more
        at AnimaApp.com
      </p>
      <Button bgClass={"bg-[#F8D57E]"} bgHoverClass={"hover:bg-[#ffce51]"}>Get Started</Button>
      <div></div>
    </div>
  );
}

export default MainSection;
