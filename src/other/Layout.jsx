import React from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

const Layout = ({ children, active }) => {

	return (
		<div
			
			className="main-container flex-col w-full h-screen overflow-hidden"
		>
			<TopBar />
			<div
				className={`main-side w-full tab:flex-row flex flex-col-reverse ${
					isDark && "dark-theme text-white"
				}`}
			>
				<Nav active={active} />
				<div className="main w-full h-[86vh] tab:h-screen">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
