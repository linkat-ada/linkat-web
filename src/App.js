import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Notification from "./components/Notifications/Notifications";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import { CssBaseline } from "@mui/material";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import People from "./pages/People/People";
import { Route, Routes } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const navbarItems = ["home", "about-us", "contact-us", "people"];
  const ex = ["signin", "signup"];
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navbar
          head={"linkat"}
          items={navbarItems}
          exHead={ex}
          ColorModeContext={ColorModeContext}
        />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/signin`} element={<Signin />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/profile`} element={<Profile />} />
          <Route path={`/about-us`} element={<AboutUs />} />
          <Route path={`/contact-us`} element={<ContactUs />} />
          <Route path={`/people`} element={<People />} />
          <Route path={`/editprofile`} element={<EditProfile />} />
        </Routes>
        <Notification />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
