import { FC } from "react";

type ToastViewPortProps = {
  hotKey?: ["F8"] | string[];
  label?: "Notifications" | string;
};

export const ToastViewPort: FC<ToastViewPortProps> = ({ hotKey, label }) => (
  <ToastViewPort hotKey={hotKey} label={label} />
);
