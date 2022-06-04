export interface IButton {
  children: React.ReactNode | string;
  onClick?: (event: any) => void;
  width?: string;
  fontSize?: string;
  id?: string;
}
