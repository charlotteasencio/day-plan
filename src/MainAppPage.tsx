import React, { ReactElement } from "react";
import { Box } from "grommet";
import { AppSidebar } from "./Sidebar";
import { SideBarProps, WidgetEnum } from "./types";
import { MainPageContainer } from "./MainPageContainer";

import {
  Actions as ActionsIcon,
  Task as TodoIcon,
  Edit as JournalIcon,
} from "grommet-icons";

export const MainAppPage = ({
  setShowSidebar,
  showSidebar,
  size,
}: SideBarProps): ReactElement => {
  const widgets = [
    {
      type: WidgetEnum.WEATHER,
      label: "Weather",
      icon: <ActionsIcon size="medium" />,
      id: 1,
      top: 20,
      left: 20,
    },
    {
      type: WidgetEnum.TODO,
      label: "Todo",
      icon: <TodoIcon size="medium" />,
      id: 2,
      top: 30,
      left: 30,
    },
    {
      type: WidgetEnum.JOURNAL,
      label: "Journal",
      icon: <JournalIcon size="medium" />,
      id: 3,
      top: 50,
      left: 50,
    },
  ];

  return (
    <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
      <AppSidebar
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        size={size}
        widgets={widgets}
      />
      <Box flex align="center" justify="center">
        <MainPageContainer />
      </Box>
    </Box>
  );
};
