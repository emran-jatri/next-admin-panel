import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = (props) => {
  const router = useRouter();
  return (
    <div className="hidden md:block w-[300px] p-5">
      <img
        src="https://images.generated.photos/vyaPXjHlqtBnCOz2zGuPFcbo4u9oGehWdZi9jBe1uhU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk2NTgxLmpwZw.jpg"
        alt="profile"
        className="rounded-full w-2/5 shadow-md mx-auto"
      />
      <p className="uppercase font-bold text-xl text-center mt-3 text-gray-800">
        Subbir Hossain
      </p>
      <div className="mt-5 space-y-2">
        <Link href="/">
          <a
            className={[
              "block p-4 hover:text-white rounded-xl",
              router.pathname === "/"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-500",
            ].join(" ")}
          >
            Home
          </a>
        </Link>
        <Link href="/services">
          <a
            className={[
              "block p-4 hover:text-white rounded-xl",
              router.pathname === "/services"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-500",
            ].join(" ")}
          >
            Services
          </a>
        </Link>
        <Link href="/about">
          <a
            className={[
              "block p-4 hover:text-white rounded-xl",
              router.pathname === "/about"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-500",
            ].join(" ")}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={[
              "block p-4 hover:text-white rounded-xl",
              router.pathname === "/contact"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-500",
            ].join(" ")}
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
