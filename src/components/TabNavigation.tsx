import { tabConfigs } from "../data/tabConfig";
import '../styles/shared.css';
import './TabNavigation.css';

interface TabNavigationProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

function TabNavigation({ activeTab, onTabClick, isDarkMode, onToggleDarkMode }: TabNavigationProps) {
  return (
    <nav className="tabs tab-nav">
      <div className="tab-list">
        {tabConfigs.map(tab => (
          <button
            key={tab.id}
            className={`tab tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <button onClick={onToggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default TabNavigation;