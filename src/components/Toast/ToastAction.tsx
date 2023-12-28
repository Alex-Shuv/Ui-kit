import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode } from "react";

type ToastActionProps = {
  altText: string;
  children: ReactNode;
};

export const ToastAction: FC<ToastActionProps> = ({ altText, children }) => (
  <Toast.Action altText={altText}>{children}</Toast.Action>
);
