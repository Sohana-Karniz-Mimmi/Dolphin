export interface CardItem {
  price: string;
  title: string;
  features: string[];
  button: string;
  data: string;
}

export interface CardProps {
  data: CardItem;
  icon?: React.ReactNode;
  className?: string;
  iconColor?: string;
}
