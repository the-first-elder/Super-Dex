import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/homepage/HomePage';
import bgStripe from "./../public/bg-stripe.png";

const App: React.FC = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex relative flex-col justify-center px-20 py-14 w-full min-h- max-md:px-5 max-md:max-w-full">
        {/* <img src={bgStripe} alt="" className="object-cover absolute inset-0 size-full" /> */}
        <Header />
        <main className="flex relative flex-col justify-center w-full max-md:max-w-full">
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;