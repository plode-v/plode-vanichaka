import { Sidebar, Blob, Navbar } from "./components"
import { Home, Projects } from "./pages"

function App() {
	return (
		<div className="flex justify-center">
			<div className="hidden md:flex w-3/4 xl:w-2/3 lg:w-[90%]">
				<Navbar />
				<Sidebar />
				<div className="flex flex-col w-full">
					<Home />
					<Projects />
					<Blob />
				</div>
			</div>
		</div>
	)
}

export default App
