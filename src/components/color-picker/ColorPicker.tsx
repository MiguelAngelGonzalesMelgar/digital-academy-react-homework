import ColorSwatches from "./ColorSwatches";

const ColorPicker = () => {
	return (
		<main>
			<h3>Wellcome! please select a background color:</h3>
			<p>Or if you prefer, add a new one in a hex format.</p>

			<input
				type="text"
				placeholder="Hex color: e.g. #ff000"
			/>
			<button>Add new color</button>
			<ColorSwatches />
		</main>
	);
};

export default ColorPicker;
