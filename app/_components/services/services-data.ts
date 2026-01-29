import {
  Code,
  Globe,
  Grip,
  LucideIcon,
  MonitorSmartphone,
  Settings,
} from "lucide-react";

export interface ServicesData {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const servicesData: ServicesData[] = [
  {
    title: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies and frameworks.",
    Icon: Code,
  },

  {
    title: "Backend Development",
    description:
      "Building robust and scalable backend systems to power your web applications.",
    Icon: Settings,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building end-to-end solutions that combine frontend and backend development.",
    Icon: Globe,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces that enhance user experience.",
    Icon: Grip,
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating responsive web experiences that adapt to different screen sizes and devices.",
    Icon: MonitorSmartphone,
  },
];
