const Navbar = () => {
  return (
    <nav className="bg-purple-400 p-4 rounded-2xl mx-4 mt-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg ml-4">MindVault</div>

      <div className="flex space-x-2 mr-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
