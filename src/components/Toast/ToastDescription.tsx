import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode } from "react";

type ToastDescriptionProps = {
  children: ReactNode;
};

export const ToastDescription: FC<ToastDescriptionProps> = ({ children }) => (
  <Toast.Description>{children}</Toast.Description>
);
