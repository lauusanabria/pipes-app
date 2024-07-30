export enum Color {
  red,
  black,
  blue,
  green,
}

export enum Size {
  small,
  medium,
  large,
}

export interface Item {
  available: boolean;
  color: Color;
  name: string;
  size: Size;
}
