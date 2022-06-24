import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Notification from "./components/Notifications/Notifications"

const navbarItems = ["home", "about-us", "contact us", "people"]

const App = () => {
	return (
	<div> 
		<Navbar head={"linkat"} items={navbarItems} />
		<Notification />
		<Footer />
	</div>
	);
}

export default App;
