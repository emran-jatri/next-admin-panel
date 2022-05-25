import Header from "../headers/Header.js";
import Sidebar from "../sidebars/Sidebar.js";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full md:w-[calc(100%-300px)] h-screen overflow-y-auto bg-blue-50">
        <Header />
        <div className="m-5 bg-gray-100 min-h-[calc(100vh-112px)] overflow-auto rounded-md shadow-md">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
