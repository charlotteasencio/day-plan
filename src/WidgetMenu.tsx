import React, { ReactElement } from "react";
import { Box, Menu } from "grommet";
import { Actions, Edit, Task } from "grommet-icons";

export const WidgetMenu = (): ReactElement => (
  <Menu
    a11yTitle="add a widget"
    label="Add Widget"
    items={[
      {
        label: <Box alignSelf="center">Weather</Box>,
        href: "#",
        icon: (
          <Box pad="small">
            <Actions size="medium" />
          </Box>
        ),
      },
      {
        label: <Box alignSelf="center">Journal</Box>,
        href: "#",
        icon: (
          <Box pad="small">
            <Edit size="medium" />
          </Box>
        ),
      },
      {
        label: <Box alignSelf="center">ToDo</Box>,
        href: "#",
        icon: (
          <Box pad="small">
            <Task size="medium" />
          </Box>
        ),
      },
    ]}
  />
);
