import { TabsContent } from "@radix-ui/react-tabs";
import "./App.css";
import { TabsButton } from "./components/Tabs/TabsButton";
import { TabsComponent } from "./components/Tabs/TabsComponent";

export const App = () => {
  return (
    <>
      <TabsComponent>
        <TabsButton value="tab1">1</TabsButton>
        <TabsButton value="tab2">2</TabsButton>
        <TabsContent value="tab1">
          <p>Hi</p>{" "}
        </TabsContent>
        <TabsContent value="tab2">
          <p>Hello</p>{" "}
        </TabsContent>
      </TabsComponent>
    </>
  );
};
