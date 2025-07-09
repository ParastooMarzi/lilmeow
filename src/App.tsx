import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Reviews from "./components/Reviews";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Navbar />
			<Header />
			<Features />
			<Overview />
			<Reviews />			
			<Faq />
			<Footer />
		</div>
	);
};

export default App;
