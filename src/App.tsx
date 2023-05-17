import { Sidebar, Blob, Navbar, AnimatedPage } from "./components"
import { Footer, Home, Projects } from "./pages"
import Contact from "./pages/Contact"

function App() {
	return (
		<AnimatedPage>
			<div className="flex justify-center">
				<div className="lg:flex w-[80vw] md:w-2/3 3xl:w-1/2">
					<Navbar />
					<Sidebar />
					<div className="flex flex-col w-full items-center">
						<Home />
						<Projects />
						<Contact />
						<Footer />
						<Blob />
					</div>
				</div>
			</div>
		</AnimatedPage>
	)
}

export default App
