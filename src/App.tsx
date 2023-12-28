import { TabsComponent } from "./components/Tabs/TabsComponent";
import { TabsList } from "./components/Tabs/TabsList";
import { TabsTrigger } from "./components/Tabs/TabsTrigger";
import { TabsContent } from "./components/Tabs/TabsContent";
import { ToastComponent } from "./components/Toast/ToastComponent";
import { ToastAction } from "./components/Toast/ToastAction";
import { ToastTitle } from "./components/Toast/ToastTitle";
import { ToastDescription } from "./components/Toast/ToastDescription";
import { ToastViewPort } from "./components/Toast/ToastViewPort";
import "./App.css";

export const App = () => {
  return (
    <>
      <TabsComponent defaultValue="tab2">
        <TabsList>
          <TabsTrigger value="tab1">1</TabsTrigger>
          <TabsTrigger value="tab2">2</TabsTrigger>
          <TabsTrigger value="tab3">3</TabsTrigger>
          <TabsTrigger value="tab4">4</TabsTrigger>
          <TabsTrigger value="tab5">5</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p>Hi</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p>Hello</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p>Hello</p>
        </TabsContent>
        <TabsContent value="tab4">
          <p>Hello</p>
        </TabsContent>
        <TabsContent value="tab5">
          <p>Hello</p>
        </TabsContent>
      </TabsComponent>

      <ToastComponent label="Notification">
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription>
          <p>Посмотри новую тему</p>
        </ToastDescription>
        <ToastAction altText="Goto schedule to undo">
          <button className="Button small green">Undo</button>
        </ToastAction>
        <ToastViewPort />
      </ToastComponent>
    </>
  );
};
