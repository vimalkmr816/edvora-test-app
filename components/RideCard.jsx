function RideCard({ page_name }) {
	return (
		<>
			{page_name}
			<div className="ride-card text-light d-flex align-items-center gap-4 px-4 py-3">
				<img
					src="https://i.stack.imgur.com/IouzH.png"
					alt="map_img"
					width={250}
					height={150}
				/>
				<div className="ride-details d-flex flex-column justify-content-center">
					<span className="my-1">Ride Id : 002 </span>
					<span className="my-1">Origin Station : 20</span>
					<span className="my-1">
						station_spanath : [20, 39, 40, 42, 54, 63, 72, 88, 98]
					</span>
					<span className="my-1">Date : 15th Feb 2022 16:33</span>
					<span className="my-1">Distance : 0</span>
				</div>
			</div>
		</>
	);
}

export default RideCard;
