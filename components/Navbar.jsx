import React from "react";
import Link from "next/link";
import FilterPane from "./FilterPane";
function Navbar() {
	return (
		<>
			<div>
				<Link href="/nearest_rides">
					Nearest Rides{/* <a>Previous Rides</a> */}
				</Link>
				<Link href="/upcoming_rides">
					Upcoming Rides{/* <a>Previous Rides</a> */}
				</Link>
				<Link href="/previous_rides">
					Previous Rides{/* <a>Previous Rides</a> */}
				</Link>
			</div>
			<button>
				<FilterPane />
			</button>
		</>
	);
}

export default Navbar;
