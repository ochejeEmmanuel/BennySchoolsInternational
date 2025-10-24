import { ChakraProvider, Box, Flex, Image } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import Header from "./Components/Header";
import Home from "./Components/Home";
// import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import About from "./Components/about/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import { useState, useEffect } from "react";
import Home from "./Components/Home";

function AppContent() {
  const location = useLocation();

  // Normalize path (remove trailing slash, lowercase)
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, "");

  // Pages without header/footer
  const hideHeaderFooter =
    currentPath === "/login" || currentPath === "/forgotpassword";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image src="src/assets/45.svg" alt="Loading..." boxSize="50px" />
      </Flex>
    );
  }

  return (
    <>
      {/* {!hideHeaderFooter && <Header />} */}

      <Box as="main" mt={!hideHeaderFooter ? 4 : 0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/practicals" element={<Practicals />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Box>

      {/* {!hideHeaderFooter && <Footer />} */}
    </>
  );
}

function App() {
  // Providers (ChakraProvider, BrowserRouter) are applied in `src/main.tsx`.
  return <AppContent />;
}

export default App;
