import { Sidebar, Blob, Navbar } from "./components"
import { Footer, Home, Projects, Contact } from "./pages"
import { motion } from "framer-motion"
import { motionItem, motionContainer } from "./constants"

function App() {

	return (
		<motion.div
			variants={motionContainer}
			initial="hidden"
			animate="show"
		>
			<motion.div variants={motionItem} className="flex justify-center">
				<motion.div variants={motionItem} className="lg:flex w-[80vw] md:w-2/3 3xl:w-1/2">
					<Navbar />
					<Sidebar />
					<motion.div className="flex flex-col w-full items-center">
						<Home variants={motionItem} />
						<Projects variants={motionItem} />
						<Contact variants={motionItem} />
						<Footer variants={motionItem} />
						<Blob />
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default App
