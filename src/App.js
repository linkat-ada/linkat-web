import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Notification from "./components/Notifications/Notifications";
import { CssBaseline } from "@mui/material";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import { Route, Routes } from "react-router-dom";


const navbarItems = ["home", "about-us", "contact us", "people"]
const ex = ["signin", "signup"]

const App = () => {
	return (
	<div> 
		<CssBaseline />
		<Navbar head={"linkat"} items={navbarItems}  exHead={ex}/>
		<Routes>
		<Route path={`/${ex[0]}`} element={<Signin />}/>
		<Route path={`/${ex[1]}`} element={<Signup />}/>
		</Routes>
		<Notification />
		<Footer />
	</div>
	);
}

export default App;
