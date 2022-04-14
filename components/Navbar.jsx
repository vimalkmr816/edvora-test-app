import React from "react";
import Link from "next/link";
import FilterPane from "./FilterPane";
function Navbar() {
	return (
		<nav className="navbar">
			<div className="nav-list d-flex gap-5 w-50 align-items-center mt-3">
				<span>
					<Link href="/nearest_rides" style={{ textDecoration: "none" }}>
						<span className="nav-items">Nearest Rides</span>
					</Link>
				</span>
				<span>
					<Link href="/upcoming_rides">
						<span className="nav-items">Upcoming Rides (4)</span>
					</Link>
				</span>
				<span>
					<Link href="/previous_rides">
						<span className="nav-items">Previous Rides (2)</span>
					</Link>
				</span>
			</div>
			<FilterPane />
		</nav>
	);
}

export default Navbar;
