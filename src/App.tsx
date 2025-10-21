import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Employment from "./pages/Employment.tsx";
import Achievements from "./pages/Achievements.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import References from "./pages/References";
import "./styles.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/education", element: <Education /> },
  { path: "/employment", element: <Employment /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/references", element: <References /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
