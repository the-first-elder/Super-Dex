// import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Header />
      <main className="flex-grow overflow-hidden">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
