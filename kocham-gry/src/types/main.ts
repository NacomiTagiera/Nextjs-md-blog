import { ReactNode } from "react";

export interface CarouselItem {
  alt: string;
  caption: string;
  src: string;
}

export interface CommonProps {
  children: ReactNode;
}

export interface IPicture {
  alt: string;
  classes: string;
  source: string;
}

export interface ISidebar extends CommonProps {
  isSticky?: boolean;
}

export interface ISidebarLink extends CommonProps {
  sectionId: string;
}

export interface LinkToSection {
  id: string;
  text: string;
}

export interface SFCharacter {
  image: string;
  name: string;
}
