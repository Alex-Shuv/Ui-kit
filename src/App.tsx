import { useEffect, useRef, useState } from 'react';
import { Tab } from './components/Tabs/TabItem';
import { TabsComponent } from './components/Tabs/Tabs';
import { ToastProvider } from './components/Toast/ToastProvider';
import { ToastRoot } from './components/Toast/ToastRoot';
import './App.css';
import './components/Toast/styles.css';

export const App = () => {
	const [open, setOpen] = useState(false);
	const eventDateRef = useRef(new Date());
	const timerRef = useRef(0);

	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);
	return (
		<>
			<TabsComponent
				classNameRoot='Tabs'
				classNameList='TabList'
				defaultValue='tab1'
			>
				<div>
					<Tab
						classNameContent='TabContent'
						classNameTitle='TabTitle'
						title='Account'
						value='tab1'
					>
						<input className='TabInput' type='text' placeholder='UserName' />
						<input className='TabInput' type='email' placeholder='Email' />
					</Tab>
				</div>
				<div>
					<Tab
						classNameContent='TabContent'
						classNameTitle='TabTitle'
						title='Password'
						value='tab2'
					>
						<input
							className='TabInput'
							type='password'
							placeholder='Password'
						/>
						<input
							className='TabInput'
							type='password'
							placeholder='Repeat New Password'
						/>
					</Tab>
				</div>
			</TabsComponent>
			<ToastProvider swipeDirection='right'>
				<button
					className='btn'
					onClick={() => {
						setOpen(false);
						window.clearTimeout(timerRef.current);
						timerRef.current = window.setTimeout(() => {
							eventDateRef.current = oneWeekAway();
							setOpen(true);
						}, 100);
					}}
				>
					Add to calendar
				</button>
				<ToastRoot
					open={open}
					onOpenChange={setOpen}
					titleText='Scheduled: Catch up'
					altText='Goto schedule to undo'
					descriptionTitle={`${prettyDate(eventDateRef.current)}`}
					classNameToast='Toast'
					classNameTitle='ToastTitle'
					classNameDescription='ToastDescription'
					classNameAction='ToastButton'
					classNameViewPort='ToastViewport'
				>
					Undo
				</ToastRoot>
			</ToastProvider>
		</>
	);
};

function oneWeekAway(date) {
	const now = new Date();
	const inOneWeek = now.setDate(now.getDate() + 7);
	return new Date(inOneWeek);
}

function prettyDate(date) {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full',
		timeStyle: 'short',
	}).format(date);
}
