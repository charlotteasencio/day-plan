import React from "react";
import { Box, Button, Heading } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { WidgetMenu } from "./WidgetMenu";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export const NavBar = ({ showSidebar, setShowSidebar }) => (
  <AppBar>
    <Button
      icon={<MenuIcon />}
      onClick={() => {
        setShowSidebar(!showSidebar);
      }}
    />
    <Heading level="3" margin="none" alignSelf="center">
      Day Plan
    </Heading>
    <WidgetMenu />
  </AppBar>
);
