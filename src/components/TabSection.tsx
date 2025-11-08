import '../styles/shared.css';
import './TabSection.css';

interface TabSectionProps {
  title: string;
  children: React.ReactNode;
}

function TabSection({ title, children }: TabSectionProps) {
  return (
    <section className="tab-content">
      <h2 className="tab-section-title title">{title}</h2>
      {children}
    </section>
  );
}

export default TabSection;