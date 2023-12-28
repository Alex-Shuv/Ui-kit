import * as Toast from '@radix-ui/react-toast';
import { FC, ReactNode } from 'react';

type ToastProviderProps = {
	duration?: number;
	label?: string;
	swipeDirection: 'right' | 'left' | 'up' | 'down';
	children: ReactNode;
	swipeThreshold?: number;
};

export const ToastProvider: FC<ToastProviderProps> = ({
	children,
	duration,
	label,
	swipeDirection,
	swipeThreshold,
}) => (
	<Toast.Provider
		duration={duration}
		label={label}
		swipeThreshold={swipeThreshold}
		swipeDirection={swipeDirection}
	>
		{children}
	</Toast.Provider>
);
