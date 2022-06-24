import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Notification from "./components/Notifications/Notifications";
import { CssBaseline } from "@mui/material";
import Signin from "./pages/Signin/Signin";


const navbarItems = ["home", "about-us", "contact us", "people"]

const App = () => {
	return (
	<div> 
		<CssBaseline />
		<Navbar head={"linkat"} items={navbarItems} />
		<Notification />
		<Signin setAuth={false}/>
		<Footer />
	</div>
	);
}

export default App;
