import * as Toast from "@radix-ui/react-toast";
import { FC, ReactNode, useState } from "react";

type ToastRootProps = {
  type?: "foreground" | "background";
  defaultOpen?: boolean;
  children?: ReactNode | string;
  titleText: string;
  descriptionTitle: ReactNode;
  altText: string;
  close?: string;
  textButton: string;
  classNameToast?: string;
  classNameTitle?: string;
  classNameDescription?: string;
  classNameAction?: string;
  classNameViewPort?: string;
};

export const ToastRoot: FC<ToastRootProps> = ({
  children,
  type,
  defaultOpen,
  titleText,
  descriptionTitle,
  altText,
  close,
  textButton,
  classNameToast,
  classNameTitle,
  classNameDescription,
  classNameAction,
  classNameViewPort,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{textButton}</button>
      <Toast.Root
        onOpenChange={setIsOpen}
        open={isOpen}
        type={type}
        defaultOpen={defaultOpen}
        className={classNameToast}
      >
        <Toast.Title className={classNameTitle}>{titleText}</Toast.Title>
        <Toast.Description className={classNameDescription}>
          {descriptionTitle}
        </Toast.Description>
        <Toast.Action className={classNameAction} altText={altText}>
          {children}
        </Toast.Action>
        {close ? (
          <Toast.Close aria-label={close}>
            <span aria-hidden>×</span>
          </Toast.Close>
        ) : null}
      </Toast.Root>
      <Toast.Viewport className={classNameViewPort} />
    </>
  );
};
