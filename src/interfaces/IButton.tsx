export interface IButton {
  children: React.ReactNode | string;
  onClick?: () => void;
  width?: string;
  fontSize?: string;
}
