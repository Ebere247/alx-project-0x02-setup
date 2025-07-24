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
