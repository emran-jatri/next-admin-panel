const Sidebar = (props) => {
  return (
    <div className="hidden md:block w-[300px] p-5">
      <img
        src="https://images.generated.photos/vyaPXjHlqtBnCOz2zGuPFcbo4u9oGehWdZi9jBe1uhU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk2NTgxLmpwZw.jpg"
        alt="profile"
        className="rounded-full w-2/5 shadow-md mx-auto"
			/>
			<p className="uppercase font-bold text-xl text-center mt-3 text-gray-800">Subbir Hossain</p>
			<div className="mt-5">
				<a href="#" className="block p-4 bg-blue-500 text-white rounded-xl">Home</a>
				<a href="#" className="block p-4 hover:bg-blue-500 hover:text-white rounded-xl">Services</a>
				<a href="#" className="block p-4 hover:bg-blue-500 hover:text-white rounded-xl">About</a>
				<a href="#" className="block p-4 hover:bg-blue-500 hover:text-white rounded-xl">Contact</a>
			</div>
    </div>
  );
};

export default Sidebar;
