import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [showPurple, setShowPurple] = useState(false);

	const cycleColors = () => {
		if (selectedColor === "red") setSelectedColor("yellow");
		else if (selectedColor === "yellow") setSelectedColor("green");
		else if (selectedColor === "green") {
			if (showPurple) setSelectedColor("purple");
			else setSelectedColor("red");} 
		else if (selectedColor === "purple") setSelectedColor("red");
	};

	return (
		<div className="text-center mt-5">
			<div id="trafficTop"></div>
			<div id="container">
				<div
					onClick={() => setSelectedColor("red")}
					className={`light red ${selectedColor === "red" ? "selected" : ""}`}
				></div>

				<div
					onClick={() => setSelectedColor("yellow")}
					className={`light yellow ${selectedColor === "yellow" ? "selected" : ""}`}
				></div>

				<div
					onClick={() => setSelectedColor("green")}
					className={`light green ${selectedColor === "green" ? "selected" : ""}`}
				></div>

				{showPurple && (
					<div
						onClick={() => setSelectedColor("purple")}
						className={`light purple ${selectedColor === "purple" ? "selected" : ""}`}
					></div>
				)}
			</div>

			<div className="d-flex flex-column align-items-center gap-2 mt-5">
				<button className="btn btn-primary" onClick={cycleColors}>
					Alternar Color
				</button>
				
				<button className="btn btn-info" onClick={() => setShowPurple(!showPurple)}>
					{showPurple ? "Esconder Púrpura" : "Añadir Púrpura"}
				</button>
			</div>
		</div>
	);
};

export default Home;