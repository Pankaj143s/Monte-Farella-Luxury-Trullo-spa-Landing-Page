import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import Suites from "./pages/Suites";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/booking", element: <Booking /> },
  { path: "/rooms", element: <Rooms /> },
  { path: "/suites", element: <Suites /> },
  { path: "/page1", element: <PageOne /> },
  { path: "/page2", element: <PageTwo /> },
];

export default routes;
