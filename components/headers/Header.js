import { useState } from "react";
import Sidemenu from "./../sidemenus/SideMenu";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <>
      <div className={"bg-blue-500 p-4 flex justify-between items-center"}>
        <div className={"text-white font-bold text-2xl ml-0 md:ml-20"}>
          Next.js
        </div>
        <div
          className={
            "hidden md:flex justify-between items-center text-white space-x-4 mr-0 md:mr-20"
          }
        >
          {/* <a href="#" className={"px-3 py-2"}>
            Home
          </a>
          <a href="#" className={"px-3 py-2"}>
            Services
          </a> */}
          <a href="#" className={"px-3 py-2"}>
            Login
          </a>
          <a href="#" className={"px-3 py-2"}>
            Signup
          </a>
          <img
            src="https://images.generated.photos/vyaPXjHlqtBnCOz2zGuPFcbo4u9oGehWdZi9jBe1uhU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk2NTgxLmpwZw.jpg"
            alt="profile"
            className="inline rounded-full w-10 h-10 shadow-md"
          />
        </div>
        <div
          className={"block md:hidden cursor-pointer"}
          onClick={() => setSideBar(!sidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="white"
              d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
            />
          </svg>
        </div>
      </div>
      <Sidemenu open={sidebar} close={setSideBar} />
    </>
  );
};

export default Header;
