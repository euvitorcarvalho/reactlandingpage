function Product() {
  return (
    <div className="flex items-center justify-center w-full px-5 py-15">
      <div
        className="
            w-full max-w-130 h-80
            
            md:w-[80%] md:max-w-none md:h-[600px]
            
            rounded-lg bg-[#FDF5DF] bg-[url('/src/assets/product.png')] bg-no-repeat bg-center bg-cover transition-all duration-300"
      ></div>
    </div>
  );
}

export default Product;
