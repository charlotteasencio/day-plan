import React, { ReactElement } from "react";
import { Box, Button, Collapsible, Layer, Text } from "grommet";
import { FormClose, Drag as DragIcon } from "grommet-icons";
import { SideBarProps } from "./types";

interface SidebarCardProps {
  label: string;
  icon: ReactElement;
}

const boxStyle = {
  borderBottom: "1px solid lightgrey",
};

const SidebarCard = ({ label, icon }: SidebarCardProps): ReactElement => {
  return (
    <Box
      style={boxStyle}
      pad="small"
      width="100%"
      direction="row"
      justify="between"
      align="center"
    >
      {icon}
      <Text>{label}</Text>
      <DragIcon size="small" />
    </Box>
  );
};

export const AppSidebar = ({
  showSidebar,
  size,
  setShowSidebar,
  widgets,
}: SideBarProps): ReactElement => {
  return (
    <>
      {!showSidebar || size !== "small" ? (
        <Collapsible direction="horizontal" open={showSidebar}>
          <Box
            width="small"
            background="light-2"
            elevation="small"
            align="center"
            justify="start"
            flex
          >
            {
              //@ts-ignore
              widgets.map((widget) => {
                return <SidebarCard icon={widget.icon} label={widget.label} />;
              })
            }
          </Box>
        </Collapsible>
      ) : (
        <Layer>
          <Box
            background="light-2"
            tag="header"
            justify="end"
            align="center"
            direction="row"
          >
            <Button
              icon={<FormClose />}
              onClick={() => setShowSidebar(false)}
            />
          </Box>
          <Box fill background="light-2" align="center" justify="center"></Box>
        </Layer>
      )}
    </>
  );
};
