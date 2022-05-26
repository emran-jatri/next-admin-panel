import BlankLayout from "../../components/layouts/BlankLayout.js";
import BraveBrowserIcon from "../../components/svgs/BraveBrowserIcon.js";

const Login = () => {
  return (
    <div className="bg-blue-50 h-screen overflow-hidden flex justify-center items-center">
      <div className="w-full md:max-w-[500px]">
        <p className="text-center text-2xl text-blue-900 font-extrabold uppercase mb-4 flex justify-center items-center">
          <BraveBrowserIcon width="40" height="40" /> EIS Admin
        </p>
        <div className="bg-white p-10 rounded-2xl shadow">
          <p className="text-center text-xl font-bold text-gray-700 mb-8">
            Sign in your account
          </p>
          <form action="/">
            <div className="flex flex-col">
              <label className="mb-2 text-sm" htmlFor="email">
                Email or username
              </label>
              <input
                className="border border-gray-300 outline-blue-400 p-2 rounded-md focus:-translate-y-1 transition-all duration-300 ease-in-out"
                id="email"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2 text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-300 outline-blue-400 p-2 rounded-md focus:-translate-y-1 transition-all duration-300 ease-in-out"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 w-full rounded-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4">
            Forget password?
          </p>
          <p className="text-center text-sm text-gray-700">
            Don't have an account? Create an account
          </p>
        </div>
      </div>
    </div>
  );
};

Login.layout = (page) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Login;
