export interface CardInfo {
  letter: string;
  title: string;
  info: string;
  img: string;
  imgRight: string;
  imgTop: string;
  defaultTheme: DefaultTheme;
  secondaryTheme: SecondaryTheme;
}

export interface DefaultTheme {
  bgColor: string;
  borderColor: string;
  shadowColor: string;
  txtColor: string;
  txtColorHover: string;
}

export interface SecondaryTheme {
  primaryColor: string;
  secondaryColor: string;
}
