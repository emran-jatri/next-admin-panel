import { useState } from "react";
import Sidemenu from "../sidemenus/Sidemenu.js";
import Link from "next/link";
import BraveBrowserIcon from "../svgs/BraveBrowserIcon.js";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <>
      <div className={"bg-blue-500 flex justify-between items-center"}>
        <div className={"p-4 text-white font-bold text-2xl ml-0 md:ml-20"}>
          <BraveBrowserIcon color="white" />
        </div>
        <div
          className={
            "p-4 hidden lg:flex justify-between items-center text-white space-x-4 mr-0 md:mr-20"
          }
        >
          <Link href="/login">
            <a
              className={
                "px-3 py-2 hover:underline transition-all duration-500 ease-in-out hover:-translate-y-1"
              }
            >
              Login
            </a>
          </Link>
          <Link href="/signup">
            <a
              className={
                "px-3 py-2 hover:underline transition-all duration-500 ease-in-out hover:-translate-y-1"
              }
            >
              Signup
            </a>
          </Link>
          <div
            className={
              "flex items-center text-black text-sm bg-blue-300 px-2 py-1 rounded-full space-x-2"
            }
          >
            <p>Emran Ibn Shayed</p>
            <img
              src="https://images.generated.photos/vyaPXjHlqtBnCOz2zGuPFcbo4u9oGehWdZi9jBe1uhU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk2NTgxLmpwZw.jpg"
              alt="profile"
              className="inline rounded-full w-10 h-10 shadow-md"
            />
          </div>
        </div>
        <div
          className={"p-4 block lg:hidden cursor-pointer"}
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
