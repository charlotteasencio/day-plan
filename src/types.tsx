import { ReactElement } from "react";

export interface NavBarProps {
  showSidebar: boolean;
  setShowSidebar: Function;
}

export interface SideBarProps extends NavBarProps {
  size: string;
  widgets?: Array<Widget>;
}

export enum WidgetEnum {
  WEATHER,
  TODO,
  JOURNAL,
}

export interface Widget {
  type: WidgetEnum;
  label: string;
  icon: ReactElement;
  id: number;
}

export const ItemTypes = {
  CARD: "card",
};
