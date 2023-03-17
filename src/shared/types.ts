export enum SelectedPage {
  Home = "home",
  AboutMe = "aboutme",
  Projects = "projects",
  Contact = "contact"
  }

export interface ImageType {
  date?: string;
  location: string;
  image: string;
}

export interface ProjectType {
  name: string;
  tech: string;
  link: string;
  image: string;
}