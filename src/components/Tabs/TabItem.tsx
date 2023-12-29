import { FC, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";

type TabProps = {
  children: string | ReactNode;
  value: string;
  title: string;
  disabled?: boolean;
  classNameTitle?: "small" | "middle" | "large" | string;
  classNameContent?: "small" | "middle" | "large" | string;
  className?: string;
};

export const Tab: FC<TabProps> = ({
  children,
  value,
  title,
  disabled,
  classNameTitle,
  classNameContent,
}) => (
  <div>
    <Tabs.Trigger className={classNameTitle} disabled={disabled} value={value}>
      {title}
    </Tabs.Trigger>
    <Tabs.Content className={classNameContent} value={value}>
      {children}
    </Tabs.Content>
  </div>
);
