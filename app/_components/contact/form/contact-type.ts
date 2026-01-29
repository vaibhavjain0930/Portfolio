export interface FieldData {
  type: "text" | "email" | "textarea";
  name: string;
  label: string;
  required: boolean;
  rows?: number;
}

export interface SocialData {
  name: string;
  value: string;
}

export const socialData: SocialData[] = [
  {
    name: "Email:",
    value: "vaibhavjain0930@gmail.com",
  },
  {
    name: "Phone:",
    value: "+91-7015769599",
  },
  {
    name: "Address:",
    value: "Panipat, Haryana, India",
  },
];

export const fields: FieldData[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    required: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "Message",
    required: true,
    rows: 20,
  },
];
