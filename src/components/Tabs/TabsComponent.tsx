import * as Tabs from "@radix-ui/react-tabs";
import { FC, ReactNode } from "react";

type TabsComponentProps = {
  children: ReactNode;
  defaultValue: string;
  orientation?: "vertical" | "horizontal";
  dir?: "ltr" | "rtl";
};

export const TabsComponent: FC<TabsComponentProps> = ({
  children,
  defaultValue,
  orientation,
  dir,
}) => (
  <Tabs.Root
    orientation={orientation}
    className="TabsRoot"
    defaultValue={defaultValue}
    dir={dir}
  >
    {children}
  </Tabs.Root>
);
