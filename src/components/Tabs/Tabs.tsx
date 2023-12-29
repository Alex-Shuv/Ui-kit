import { FC, ReactNode } from "react";
import * as TabsX from "@radix-ui/react-tabs";
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

export const Tabs: FC<TabsProps> = ({
  children,
  defaultValue,
  orientation,
  dir,
  classNameRoot,
  classNameList,
  loop,
}) => (
  <TabsX.Root
    orientation={orientation}
    defaultValue={defaultValue}
    dir={dir}
    className={classNameRoot}
  >
    <TabsX.List loop={loop} className={classNameList}>
      {children}
    </TabsX.List>
  </TabsX.Root>
);
