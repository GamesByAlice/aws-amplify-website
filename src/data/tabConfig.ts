export interface TabConfig {
  id: string;
  label: string;
  title: string;
  content: string;
}

export const tabConfigs: TabConfig[] = [
  {
    id: "about-me-tab",
    label: "About Me",
    title: "About Me",
    content: "Placeholder about me information."
  },
  {
    id: "projects-tab",
    label: "Projects",
    title: "Portfolio",
    content: "Placeholder list of professional and personal projects."
  },
  {
    id: "learn-tab",
    label: "Learn",
    title: "Tutorials",
    content: "Placeholder list of articles."
  },
  {
    id: "contact-tab",
    label: "Contact",
    title: "Contact",
    content: "Placeholder contact information."
  }
];