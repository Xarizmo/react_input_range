import React from "react";
import "./styles.css";

export default function App() {
	const [punch, setPanch] = React.useState(40);

	return (
		<div className="App">
			<span style={{ fontSize: 90 }} role="img" aria-label="panda">
				💪🦎
			</span>
			<span style={{ fontSize: punch }} role="img" aria-label="fist">
				👊
			</span>
			<br />
			<span>Тяните ползунок:</span>
			<br />
			<input
				type="range"
				className="custom-range"
				min={40}
				max={200}
				step={0.1}
				value={punch}
				onChange={e => setPanch(e.target.valueAsNumber)}
			/>
			<br />
			<button className="btn btn-primary" onClick={() => alert(punch)}>
				Show punch power
			</button>
		</div>
	);
}
