import Header from "../headers/Header";
import Sidebar from "../sidebars/Sidebar";


const DefaultLayout = () => {
	return ( 
		<div className="flex">
			<Sidebar/>
			<div className="w-[calc(100%-300px)] h-screen overflow-y-auto bg-blue-50/50">
				<Header/>
			</div>
		</div>
	 );
}
 
export default DefaultLayout;