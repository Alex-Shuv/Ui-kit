import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode } from "react";

type ToastComponentProps = {
  children: ReactNode;
  swipeDirection?: "up" | "left" | "down" | "right";
  label: "Notification" | string;
  duration?: 5000 | number;
};

export const ToastComponent: FC<ToastComponentProps> = ({
  children,
  swipeDirection,
  label,
  duration,
}) => (
  <Toast.Provider
    label={label}
    duration={duration}
    swipeDirection={swipeDirection}
  >
    {children}
  </Toast.Provider>
);
