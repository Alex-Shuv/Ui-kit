import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode } from "react";

type ToastCloseProps = {
  children: ReactNode;
};

export const ToastClose: FC<ToastCloseProps> = ({ children }) => (
  <Toast.Close>{children}</Toast.Close>
);
