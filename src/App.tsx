import "./App.css";
import { Tab } from "./components/Tabs/TabItem";
import { TabsComponent } from "./components/Tabs/Tabs";
import { ToastProvider } from "./components/Toast/ToastProvider";
import { ToastRoot } from "./components/Toast/ToastRoot";

export const App = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <>
      {/* <TabsComponent
        classNameRoot="Tabs"
        classNameList="TabList"
        defaultValue="tab1"
      >
        <div>
          <Tab
            classNameContent="TabContent"
            classNameTitle="TabTitle"
            title="Account"
            value="tab1"
          >
            <input className="TabInput" type="text" placeholder="UserName" />
            <input className="TabInput" type="email" placeholder="Email" />
          </Tab>
        </div>
        <div>
          <Tab
            classNameContent="TabContent"
            classNameTitle="TabTitle"
            title="Password"
            value="tab2"
          >
            <input
              className="TabInput"
              type="password"
              placeholder="Password"
            />
            <input
              className="TabInput"
              type="password"
              placeholder="Repeat New Password"
            />
          </Tab>
        </div>
      </TabsComponent> */}
      <ToastRoot isOpen={open}>
        <ToastProvider titleText="Scheduled: Catch up">
          <div>
            <time
              className="ToastDescription"
              dateTime={eventDateRef.current.toISOString()}
            >
              {prettyDate(eventDateRef.current)}
            </time>
          </div>
          <div>
            <button className="Button small green">Undo</button>
          </div>
        </ToastProvider>
      </ToastRoot>
    </>
  );
};
