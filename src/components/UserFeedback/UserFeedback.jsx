import Star from "./Star.jsx";

function UserFeedback() {
  return (
    <div className="flex justify-center py-13 px-8">
      <div className=" rounded-xl bg-[#BFAFF2] md:w-full w-[80%] max-w-7xl px-8 py-20 lg:p-40 lg:py-21 flex flex-col gap-12 max-sm:items-center">
        <p className="text-2xl font-semibold">
          “Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”
        </p>
        <div className="flex">
          <img
            className="h-20 pr-5"
            src="src/assets/avatar.png"
            alt="Johnny Owens, testimonial author"
          />
          <div className="flex flex-col">
            <h2 className="text-[#2B2B2B]">Johnny Owens</h2>
            <div className="flex pt-1.5 gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeedback;
