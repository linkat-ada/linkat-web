import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const navbarItems = ["home", "about-us", "contact us", "people"]

const App = () => {
	return (
	<div> 
		<Navbar head={"linkat"} items={navbarItems} />
		<Footer />
	</div>
	);
}

export default App;
