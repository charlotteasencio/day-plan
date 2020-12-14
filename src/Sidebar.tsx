import React, { ReactElement } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";

interface SideBarProps {
  showSidebar: boolean;
  size: string;
  setShowSidebar: Function;
}

export const Sidebar = ({
  showSidebar,
  size,
  setShowSidebar,
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
            justify="center"
            flex
          >
            sidebar
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
          <Box fill background="light-2" align="center" justify="center">
            sidebar
          </Box>
        </Layer>
      )}
    </>
  );
};
