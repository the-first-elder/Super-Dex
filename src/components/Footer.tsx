import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto py-12 px-5">
        <div className="flex flex-wrap justify-between space-y-10 md:space-y-0">
          {/* Project header and description with more space */}
          <div className="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <h2 className="text-xl text-white font-semibold mb-4">Project</h2>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vel!
            </p>
          </div>

          {/* Navigation links with better spacing */}
          <div className="w-1/2 lg:w-1/6 px-4">
            <h3 className="text-white text-sm font-semibold mb-4">Menu</h3>
            <ul className="list-none space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Swap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Guide links with improved item spacing */}
          <div className="w-1/2 lg:w-1/6 px-4">
            <h3 className="text-white text-sm font-semibold mb-4">Guide</h3>
            <ul className="list-none space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Dolor
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription with enhanced layout */}
          <div className="w-full lg:w-1/4 px-4">
            <h3 className="text-white text-sm font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="mt-4">
              <input
                type="email"
                className="p-2 w-full rounded-l bg-gray-700 focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-blue-500 rounded-l hover:bg-blue-700 text-white px-4 rounded-r mt-3 ">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Icons with better spacing */}
          <div className="w-full lg:w-1/6 px-4 mt-6 lg:mt-0">
            <h3 className="text-white text-sm font-semibold mb-4">Follow us</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-white"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
