import * as Tabs from "@radix-ui/react-tabs";
import { FC, ReactNode } from "react";

type TabsTriggerProps = {
  children: ReactNode;
  value: string;
  disabled?: boolean;
};

export const TabsTrigger: FC<TabsTriggerProps> = ({
  children,
  value,
  disabled,
}) => (
  <Tabs.Trigger disabled={disabled} className="TabsTrigger" value={value}>
    {children}
  </Tabs.Trigger>
);
