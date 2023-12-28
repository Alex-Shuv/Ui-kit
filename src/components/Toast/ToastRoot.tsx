import * as Toast from "@radix-ui/react-toast";
import { FC } from "react";

type ToastRootProps = {
  children: JSX.Element;
  type?: "foreground" | "background";
  defaultOpen?: boolean;
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPause?: () => void;
  onResume?: () => void;
  onSwipeStart?: () => void;
  onSwipeMove?: () => void;
  onSwipeEnd?: (event: Toast.SwipeEvent) => void;
};

export const ToastRoot: FC<ToastRootProps> = ({
  children,
  type,
  defaultOpen,
  isOpen,
  onOpenChange,
  onEscapeKeyDown,
  onPause,
  onResume,
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
}) => (
  <Toast.Root
    onEscapeKeyDown={onEscapeKeyDown}
    onOpenChange={onOpenChange}
    onPause={onPause}
    open={isOpen}
    type={type}
    defaultOpen={defaultOpen}
    onResume={onResume}
    onSwipeStart={onSwipeStart}
    onSwipeMove={onSwipeMove}
    onSwipeEnd={onSwipeEnd}
  >
    {children}
  </Toast.Root>
);
