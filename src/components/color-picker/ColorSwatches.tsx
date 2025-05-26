interface ColorSwatchesProps {
	colors: string[];
	backgroundColor: string;
	onColorChange: (color: string) => void;
}

const ColorSwatches = ({
	colors,
	backgroundColor,
	onColorChange,
}: ColorSwatchesProps) => {
	return (
		<section>
			<h3>Available colors:</h3>
			<div className="colors-container">
				{colors.map((color) => (
					<div
						className="colors"
						key={color}
						onClick={() => onColorChange(color)}
						style={{ backgroundColor: color }}
					>
						{color}
					</div>
				))}
			</div>
			<p>Current color background is: {backgroundColor}</p>
		</section>
	);
};

export default ColorSwatches;
