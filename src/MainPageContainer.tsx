import React, { ReactElement } from "react";
import moment from "moment";
import { Box, Clock, Header, Main } from "grommet";
import { WeatherWidget } from "./Widgets/WeatherWidget";
import { DragBox } from "./DragBox";
import { DropGrid } from "./DropGrid";

export const MainPageContainer = (): ReactElement => {
  return (
    <Main pad="large" width="100%">
      <Box direction="row" width="100%" justify="between">
        <Header width="auto">{moment().format("MMMM Do YYYY")}</Header>
        <Clock width="auto" type="digital" precision={"minutes"} />
      </Box>
      <DragBox />
      <WeatherWidget />
      <DropGrid />
    </Main>
  );
};
