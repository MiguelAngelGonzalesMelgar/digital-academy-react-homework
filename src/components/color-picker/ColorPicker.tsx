import { useState } from "react";
import ColorSwatches from "./ColorSwatches";

const ColorPicker = () => {
	// State for the input value
	const [inputValue, setInputValue] = useState<string>("");

	// state for adding colors
	const [colors, setColors] = useState<string[]>([
		"#ff5733",
		"#FFC300",
		"#581845",
	]);

	// handlers
	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleAddColor = () => {
		if (!colors.includes(inputValue)) {
			setColors([...colors, inputValue]);
			setInputValue("");
		} else {
			alert("This color is already in the list.");
		}
	};
	return (
		<main>
			<h3>Wellcome! please select a background color:</h3>
			<p>Or if you prefer, add a new one in a hex format.</p>

			<input
				type="text"
				placeholder="Hex color: e.g. #ff000"
				value={inputValue}
				onChange={handleInputValue}
			/>
			<button onClick={handleAddColor}>Add new color</button>
			<ColorSwatches />
		</main>
	);
};

export default ColorPicker;
