const ProductPage = () => {
  const data = [
    {
      id: 1,
      name: "Crystal Agate Phone Grip",
      price: "18.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Crystal Agate Phone Grip",
      price: "18.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Rose Quartz Phone Grip",
      price: "20.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Clear Quartz Phone Grip",
      price: "21.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Smoky Quartz Phone Grip",
      price: "22.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Black Tourmaline Phone Grip",
      price: "23.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Black Tourmaline Phone Grip",
      price: "24.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Black Tourmaline Phone Grip",
      price: "25.99$",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more products to the array as needed
  ];

  return (
    <div className="w-full min-h-screen px-16 py-10 bg-white relative pt-[10vw] ">
      {/* Header */}
      <div className="flex flex-col justify-between mb-10 gap-10">
        <h1 className="text-4xl font-bold text-gray-800 text-center">All product</h1>
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 font-medium">Filter:</span>
            <select className="text-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>All Products</option>
              <option>Newest</option>
              <option>Most Popular</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 font-medium">Sort:</span>
            <select className="text-gray-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Best Selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((product) => (
          <div
            key={product.id}
            className="product-card w-full bg-white rounded-lg shadow-lg p-5 flex flex-col items-center space-y-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold text-[#14255a] text-center">
              {product.name} - {product.price}
            </h3>
            <button className=" border-2 border-blue-300 rounded-2xl text-blue-500 py-2 px-8 shadow-md hover:opacity-90 transition-opacity duration-300">
              BUY NOW
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center pt-[10vw]">
        <button className="border-2 border-blue-300 rounded-2xl text-blue-500 py-2 px-8 shadow-md hover:opacity-90 transition-opacity duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
