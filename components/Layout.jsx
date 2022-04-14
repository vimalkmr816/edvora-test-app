import React from "react";
import Header from "./Header";
function Layout({ children }) {
	return (
		<div className="layout-container">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
