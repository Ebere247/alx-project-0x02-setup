// interfaces/index.ts

export interface AppInfo {
  name: string;
  version: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isopen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}
