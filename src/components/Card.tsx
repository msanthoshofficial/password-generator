import { useState, useCallback, useEffect, useRef } from "react";

function Card() {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState("8");
	const [numbers, setNumbers] = useState(false);
	const [symbols, setSymbols] = useState(false);

	const passswordRef = useRef<HTMLInputElement | null>(null);

	const generatePassword = useCallback(() => {
		let password = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numbers) str += "0123456789";
		if (symbols) str += "!@#$%^&*()_+-=[]{}";
		for (let i = 0; i < Number(length); i++) {
			password += str[Math.floor(Math.random() * str.length)];
		}
		setPassword(password);
	}, [length, numbers, symbols]);

	const copyPasswordToClipboard = () => {
		window.navigator.clipboard.writeText(password);
		passswordRef.current?.select();
	};

	useEffect(() => {
		generatePassword();
	}, [length, numbers, symbols, generatePassword]);

	return (
		<div
			className="card bg-primary text-primary-content "
			style={{ minWidth: "30rem" }}
		>
			<div className="card-body">
				<div className="flex gap-2 justify-center items-center">
					<div className="form-control w-full">
						<input
							type="text"
							placeholder="passsword"
							readOnly
							disabled
							value={password}
							className="input input-bordered w-full max-w-xs"
							ref={passswordRef}
						/>
					</div>
					<button
						className="btn btn-neutral"
						onClick={copyPasswordToClipboard}
					>
						copy
					</button>
				</div>
				<div className="flex gap-2 justify-center my-8 items-center">
					<label htmlFor="range">length</label>
					<input
						id="range"
						type="range"
						min="8"
						max="30"
						value={length}
						onChange={(e) => setLength(e.target.value)}
						className="range range-xs"
					/>
					<label htmlFor="range">{length}</label>
					<input
						id="numbers"
						type="checkbox"
						checked={numbers}
						className="checkbox"
						onChange={() => {
							setNumbers((val) => !val);
						}}
					/>
					<label htmlFor="numbers">numbers</label>
					<input
						id="symbols"
						type="checkbox"
						checked={symbols}
						className="checkbox"
						onChange={() => {
							setSymbols((val) => !val);
						}}
					/>
					<label htmlFor="symbols">symbols</label>
				</div>
			</div>
		</div>
	);
}

export default Card;
