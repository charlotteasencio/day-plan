import React, { useState } from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { NavBar } from "./NavBar";
import { Sidebar } from "./Sidebar";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSetShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <NavBar
              showSidebar={showSidebar}
              setShowSidebar={handleSetShowSidebar}
            />
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Sidebar
                setShowSidebar={handleSetShowSidebar}
                showSidebar={showSidebar}
                size={size}
              />
              <Box flex align="center" justify="center">
                app body
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
