import Header from "./components/Header";
import Hero from "./components/Hero";
import List from "./components/List";
import News from "./components/News";

function App() {
	return (
		<div className="text-base text-neutral-600 bg-[#fefdf9] min-h-screen p-4">
			<div className="max-w-6xl mx-auto">
				<Header />
				<div className="flex flex-col sm:flex-row gap-7">
					<Hero />
					<News />
				</div>
				<List />
			</div>
		</div>
	);
}

export default App;
