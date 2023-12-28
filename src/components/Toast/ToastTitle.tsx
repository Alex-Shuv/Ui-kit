import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode } from "react";

type ToastTitleProps = {
  children: ReactNode;
};

export const ToastTitle: FC<ToastTitleProps> = ({ children }) => (
  <Toast.Title>{children}</Toast.Title>
);
