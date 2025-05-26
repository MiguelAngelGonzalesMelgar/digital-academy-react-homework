import "./App.css";
import ColorPicker from "./components/color-picker/ColorPicker";
import WindowMeasurements from "./components/window-measures/WindowMeasurements";

function App() {
	return (
		<>
			<h2>My color picker</h2>
			<ColorPicker />
			<WindowMeasurements />
		</>
	);
}

export default App;
