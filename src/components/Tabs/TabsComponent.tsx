import * as Tabs from "@radix-ui/react-tabs";
import { FC, ReactNode } from "react";

type TabsComponentProps = {
  children: ReactNode;
};

export const TabsComponent: FC<TabsComponentProps> = ({ children }) => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.TabsList>{children}</Tabs.TabsList>
  </Tabs.Root>
);
