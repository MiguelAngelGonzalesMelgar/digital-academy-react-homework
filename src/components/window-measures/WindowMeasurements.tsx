import { useState, useEffect } from "react";

const WindowMeasurements = () => {
	// State to store window dimensions
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	// Function to update window size
	const updateWindowSize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	// Effect to get initial size and set up resize listener
	useEffect(() => {
		updateWindowSize();

		window.addEventListener("resize", updateWindowSize);

		// Cleanup function
		return () => {
			window.removeEventListener("resize", updateWindowSize);
		};
	}, []);

	return (
		<section className="measurements">
			<h2>Window Size Tracker</h2>
			<div className="sizing">
				<h2>Current Window Size</h2>
				<h4>
					Width: <strong>{windowSize.width}px</strong>
				</h4>
				<h4>
					Height: <strong>{windowSize.height}px</strong>
				</h4>
			</div>

			<p>Try resizing your browser window to see the values update!</p>
		</section>
	);
};

export default WindowMeasurements;
