import * as Tabs from "@radix-ui/react-tabs";
import { FC, ReactNode } from "react";

type TabsContentProps = {
  children: ReactNode;
  value: string;
};

export const TabsContent: FC<TabsContentProps> = ({ children, value }) => {
  return (
    <>
      <Tabs.Content className="TabsContent" value={value}>
        {children}
      </Tabs.Content>
    </>
  );
};
