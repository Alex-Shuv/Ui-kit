import "./App.css";
import { Tab } from "./components/Tabs/TabItem";
import { TabsComponent } from "./components/Tabs/Tabs";

export const App = () => {
  return (
    <>
      <TabsComponent
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
      </TabsComponent>
    </>
  );
};
