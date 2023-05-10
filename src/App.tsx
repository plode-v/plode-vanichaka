import { Sidebar, Blob } from "./components"
import { Home } from "./pages"

function App() {
	return (
		<div className="flex items-center justify-center">
			<div className="hidden md:flex w-3/4 xl:w-1/2 lg:w-[90%]">
				<Sidebar />
				<Home />
				<Blob />
			</div>
		</div>
	)
}

export default App
