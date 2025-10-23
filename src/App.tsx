import { ChakraProvider, Box, Flex, Image } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import About from "./Components/about/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import { useState, useEffect } from "react";

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
      {!hideHeaderFooter && <Header />}

      <Box as="main" mt={!hideHeaderFooter ? 4 : 0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Box>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppContent />
      </Router>
    </ChakraProvider>
  );
}

export default App;
