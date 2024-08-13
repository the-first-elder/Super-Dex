const LoginForm = () => {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-white text-lg mb-6">Welcome to Project</h2>
          <form>
            <div className="mb-4">
              <input type="email" placeholder="Email address" className="p-2 rounded w-full"/>
            </div>
            <div className="mb-6">
              <input type="password" placeholder="Password" className="p-2 rounded w-full"/>
            </div>
            <button type="submit" className="bg-blue-500 w-full py-2 rounded text-white">Sign up</button>
          </form>
        </div>
      </div>
    );
  };
  export default LoginForm;
  