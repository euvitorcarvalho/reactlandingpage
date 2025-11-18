import Button from "./Button";

function MainSection() {
  return (
    <div className="text-white flex flex-col gap-10 items-center bg-[url('/src/assets/background.png')] bg-no-repeat bg-cover bg-bottom lg:min-h-[867px] min-h-[800px] w-full pt-16 px-5 lg:pt-20">
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
