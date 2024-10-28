// import "./App.css";
// import Portfolio from "./components/Portfolio";

// function App() {
//   return (
//     <div className="portfolio-app">
//       <Portfolio />
//     </div>
//   );
// }

// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Nav />
        <Outlet />
      </MantineProvider>
    </>
  );
}

export default App;
