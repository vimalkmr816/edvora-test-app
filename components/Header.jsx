import React from "react";
import Navbar from "./Navbar";
function Header() {
	return (
		<>
			<div className="top-header d-flex align-items-center justify-content-between">
				<div className="logo">Edvora</div>
				<div className="account">
					<div className="user-name">Dhruv Singh</div>
					<div className="profile-picture"></div>
				</div>
			</div>
			<Navbar></Navbar>
		</>
	);
}

export default Header;
