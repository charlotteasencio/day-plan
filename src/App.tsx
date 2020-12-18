import React, { ReactElement, useState } from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { NavBar } from "./NavBar";
import { MainAppPage } from "./MainAppPage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = (): ReactElement => {
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
    <DndProvider backend={HTML5Backend}>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <NavBar
                showSidebar={showSidebar}
                setShowSidebar={handleSetShowSidebar}
              />
              <MainAppPage
                size={size}
                setShowSidebar={handleSetShowSidebar}
                showSidebar={showSidebar}
              />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </DndProvider>
  );
};

export default App;
