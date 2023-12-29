import { Tab } from "./components/Tabs/TabItem";
import { Tabs } from "./components/Tabs/Tabs";
import { ToastRoot } from "./components/Toast/ToastRoot";
import "./components/Toast/styles.css";
import "./App.css";

export const App = () => {
  return (
    <>
      <Tabs classNameRoot="Tabs" classNameList="TabList" defaultValue="tab1">
        <Tab
          classNameContent="TabContent"
          classNameTitle="TabTitle"
          title="Account"
          value="tab1"
        >
          <input className="TabInput" type="text" placeholder="UserName" />
          <input className="TabInput" type="email" placeholder="Email" />
          <ToastRoot
            titleText="New Notification"
            altText="Goto schedule to undo"
            descriptionTitle="Create New User"
            classNameToast="Toast ToastBottomLeft"
            classNameTitle="ToastTitle"
            classNameDescription="ToastDescription"
            classNameAction="ToastButton"
            classNameViewPort="ToastViewport ToastViewportBottomLeft"
            textButton="Submit"
          >
            Ok
          </ToastRoot>
        </Tab>
        <Tab
          classNameContent="TabContent"
          classNameTitle="TabTitle"
          title="Password"
          value="tab2"
        >
          <input className="TabInput" type="password" placeholder="Password" />
          <input
            className="TabInput"
            type="password"
            placeholder="Repeat New Password"
          />
        </Tab>
      </Tabs>
    </>
  );
};
