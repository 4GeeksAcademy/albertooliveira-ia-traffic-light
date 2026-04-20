import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");

	const cycleColors = () => {
		if (selectedColor === "red") setSelectedColor("yellow");
		else if (selectedColor === "yellow") setSelectedColor("orange");
		else if (selectedColor === "orange") setSelectedColor("green");
		else if (selectedColor === "green") setSelectedColor("purple");
		else setSelectedColor("red");
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
					onClick={() => setSelectedColor("orange")}
					className={`light orange ${selectedColor === "orange" ? "selected" : ""}`}
				></div>

				<div
					onClick={() => setSelectedColor("green")}
					className={`light green ${selectedColor === "green" ? "selected" : ""}`}
				></div>

				<div
					onClick={() => setSelectedColor("purple")}
					className={`light purple ${selectedColor === "purple" ? "selected" : ""}`}
				></div>
			</div>

			<button className="btn btn-primary mt-5" onClick={cycleColors}>
				Alternar Color
			</button>
		</div>
	);
};

export default Home;