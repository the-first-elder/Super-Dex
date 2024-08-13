const Header = () => {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-white text-lg font-medium">
            Project
          </div>

          {/* Centered navigation links */}
          <div className="flex-1 text-center">
            <div className="flex justify-center items-center space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Buy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Swap
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </a>
            </div>
          </div>

          <div>
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
              <w3m-button />
            {/* </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
