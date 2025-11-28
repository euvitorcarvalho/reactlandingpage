function Product() {
  return (
      <div className="flex w-full justify-center py-24 px-8">
        <div
        className="
            h-80
            md:w-full w-[80%] md:min-h-[600px]
            md:max-w-7xl
            rounded-lg bg-[#FDF5DF] bg-[url('/src/assets/product.png')] bg-no-repeat bg-center bg-cover transition-all duration-300"
      ></div>
      </div>
  );
}

export default Product;
