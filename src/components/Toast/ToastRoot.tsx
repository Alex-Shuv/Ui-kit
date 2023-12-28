import * as Toast from '@radix-ui/react-toast';
import { FC, ReactNode } from 'react';

type ToastRootProps = {
	type?: 'foreground' | 'background';
	defaultOpen?: boolean;
	open?: boolean;
	children?: ReactNode | string;
	titleText: string;
	descriptionTitle: ReactNode;
	altText: string;
	close?: string;
	onOpenChange?: (open: boolean) => void;
	onEscapeKeyDown?: (event: KeyboardEvent) => void;
	onPause?: () => void;
	onResume?: () => void;
	onSwipeStart?: () => void;
	onSwipeMove?: () => void;
	onSwipeEnd?: (event: Toast.SwipeEvent) => void;
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
	open,
	titleText,
	descriptionTitle,
	altText,
	close,
	onOpenChange,
	onEscapeKeyDown,
	onPause,
	onResume,
	onSwipeStart,
	onSwipeMove,
	onSwipeEnd,
	classNameToast,
	classNameTitle,
	classNameDescription,
	classNameAction,
	classNameViewPort,
}) => (
	<>
		<Toast.Root
			onEscapeKeyDown={onEscapeKeyDown}
			onOpenChange={onOpenChange}
			onPause={onPause}
			open={open}
			type={type}
			defaultOpen={defaultOpen}
			onResume={onResume}
			onSwipeStart={onSwipeStart}
			onSwipeMove={onSwipeMove}
			onSwipeEnd={onSwipeEnd}
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
