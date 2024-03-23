"use client";
export default function Home() {
	const handleOnClick = async () => {
		await fetch("/api/hello")
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<button
				className="bg-blue-500 px-2 px-3 rounded-md font-medium"
				onClick={handleOnClick}
			>
				Get data
			</button>
		</main>
	);
}
