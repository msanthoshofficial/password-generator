import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<>
			<div className="font-mono grid justify-center p-4 m-4">
				<h1 className="text-2xl font-semibold tracking-wide text-center my-5">
					Password Generator
				</h1>
				<Card />
			</div>
		</>
	);
}

export default App;
