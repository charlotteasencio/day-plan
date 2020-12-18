import React from "react";
import { Card, CardHeader, CardBody, Button, CardFooter } from "grommet";
import { Favorite as HeartIcon, ShareOption as ShareIcon } from "grommet-icons";

export const WeatherWidget = () => {
  return (
    <Card height="small" width="small" background="light-1">
      <CardHeader pad="medium">Header</CardHeader>
      <CardBody pad="medium">Body</CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<HeartIcon color="red" />} hoverIndicator />
        <Button icon={<ShareIcon color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};
