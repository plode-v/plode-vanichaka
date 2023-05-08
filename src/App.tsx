import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { Navbar, ScrollButton, Loading } from "./components"
import { Home, AboutMe, Projects, ContactMe } from "./pages"

function App() {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setInterval(() => {setLoading(false)}, 1000)
	}, [loading]);

	return (
		<>
			<Router>
				{loading ? (
					<Loading />
				) : (
					<div>
						<Routes>
							<Route path="/" element={<Navbar />} />
						</Routes>
						<Home />
						<AboutMe />
						<Projects />
						<ContactMe />
						<ScrollButton />
					</div>
				)}
			</Router>
		</>
	)
}

export default App
