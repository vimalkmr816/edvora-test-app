import React from "react";
import Navbar from "./Navbar";
function Header() {
	return (
		<>
			<div className=" top-header d-flex align-items-center justify-content-between text-light py-3">
				<div className="logo fs-2 fw-bold">Edvora</div>
				<div className="account">
					<div className="user-name fw-bold">Dhruv Singh</div>
					<div className="profile-picture"></div>
				</div>
			</div>
			<Navbar></Navbar>
		</>
	);
}

export default Header;
