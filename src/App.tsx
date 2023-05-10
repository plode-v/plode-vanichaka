import { useEffect, useState } from "react"


import { Navbar, Loading } from "./components"
import { Home, AboutMe, Projects, ContactMe } from "./pages"

function App() {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setInterval(() => {setLoading(false)}, 1000)
	}, [loading]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<Navbar />
					<Home />
					<AboutMe />
					<Projects />
					<ContactMe />
				</div>
			)}
		</>
	)
}

export default App
