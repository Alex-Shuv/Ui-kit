import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode } from "react";

type ToastProviderProps = {
  duration?: number;
  label?: string;
  swipeDirection: "right" | "left" | "up" | "down";
  swipeThreshold?: number;
  children: ReactNode | string;
  titleText: string;
  descriptionTitle: ReactNode;
  altText: string;
  close?: ReactNode;
  hotKey?: string[];
};

export const ToastProvider: FC<ToastProviderProps> = ({
  children,
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  titleText,
  descriptionTitle,
  altText,
  close,
  hotKey,
}) => (
  <Toast.Provider
    duration={duration}
    label={label}
    swipeThreshold={swipeThreshold}
    swipeDirection={swipeDirection}
  >
    <Toast.Root>
      <Toast.Title>{titleText}</Toast.Title>
      <Toast.Description>{descriptionTitle}</Toast.Description>
      <Toast.Action altText={altText}>{children}</Toast.Action>
      <Toast.Close>{close}</Toast.Close>
    </Toast.Root>
    <Toast.Viewport hotkey={hotKey} />
  </Toast.Provider>
);
