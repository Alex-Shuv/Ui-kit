import * as Tabs from "@radix-ui/react-tabs";
import { FC, ReactNode } from "react";

type TabsListProps = {
  children: ReactNode;
  loop?: boolean;
};

export const TabsList: FC<TabsListProps> = ({ children, loop }) => (
  <Tabs.TabsList loop={loop}>{children}</Tabs.TabsList>
);
