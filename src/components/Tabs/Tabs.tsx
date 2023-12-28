import { FC, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
  orientation?: "vertical" | "horizontal";
  dir?: "ltr" | "rtl";
  classNameRoot?: string;
  classNameList?: string;
  loop?: boolean;
};

export const TabsComponent: FC<TabsProps> = ({
  children,
  defaultValue,
  orientation,
  dir,
  classNameRoot,
  classNameList,
  loop,
}) => (
  <Tabs.Root
    orientation={orientation}
    defaultValue={defaultValue}
    dir={dir}
    className={classNameRoot}
  >
    <Tabs.List loop={loop} className={classNameList}>
      {children}
    </Tabs.List>
  </Tabs.Root>
);
