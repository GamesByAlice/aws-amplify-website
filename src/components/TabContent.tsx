import TabSection from "./TabSection";
import Learn from "./Learn";
import { tabConfigs } from "../data/tabConfig";
import "./TabContent.css";

interface TabContentProps {
  activeTab: string;
}

function TabContent({ activeTab }: TabContentProps) {
  const activeTabConfig = tabConfigs.find(tab => tab.id === activeTab);

  if (!activeTabConfig) {
    return <main className="content">Tab not found</main>;
  }

  if (activeTab === "learn-tab") {
    return (
      <main className="tab-content-learn content-container">
        <div className="learn-container">
          <h1 className="learn-header title">{activeTabConfig.title}</h1>
          <Learn />
        </div>
      </main>
    );
  }

  return (
    <main className="content tab-content">
      <TabSection title={activeTabConfig.title}>
        <p>{activeTabConfig.content}</p>
      </TabSection>
    </main>
  );
}

export default TabContent;