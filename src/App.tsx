import { useEffect, useState } from "react"
import { Navbar, ScrollButton } from "./components"
import { Home, AboutMe, Projects, ContactMe } from "./pages"

function App() {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setInterval(() => {setLoading(false)}, 1000)
	}, [loading]);

	return (
		<>
			{loading ? (
				<div className="flex items-center justify-center">
					<div><h1 className="text-[100px]">LOADING...</h1></div>
				</div>
			) : (
				<div>
					<Navbar />
					<Home />
					<AboutMe />
					<Projects />
					<ContactMe />
					<ScrollButton />
				</div>
			)}
		</>
	)
}

export default App
