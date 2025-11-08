
import '../styles/shared.css';
import './Header.css';

interface HeaderProps {
  title: string;
  tagline: string;
  isCollapsed: boolean;
}

function Header({ title, tagline, isCollapsed }: HeaderProps) {
  return (
    <header className={`header ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`header-content ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>{title}</h1>
        <p className="tagline">{tagline}</p>
      </div>
    </header>
  );
}

export default Header;