import * as Tabs from "@radix-ui/react-tabs";
import { FC, ReactNode } from "react";

type TabsButtonProps = {
  children: ReactNode;
  value: string;
};

export const TabsButton: FC<TabsButtonProps> = ({ children, value }) => (
  <Tabs.Trigger className="TabsTrigger" value={value}>
    {children}
  </Tabs.Trigger>
);
