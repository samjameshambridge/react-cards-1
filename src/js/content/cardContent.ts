import DefaultTheme from "../theme/defaultTheme";
import BlueTheme from "../theme/blueTheme";
import GreenTheme from "../theme/greenTheme";
import OrangeTheme from "../theme/orangeTheme";
import { CardInfo } from "../types/interfaces";

const cardContent: Array<CardInfo> = [
  {
    letter: "A",
    title: "Alpha",
    info:
      "Cake candy tootsie roll jujubes halvah brownie chocolate bar. Tootsie roll.",
    img:
      " https://lh3.googleusercontent.com/fAJLl7HZo7KZsVPjjB_zmd672zZbKsDhS5s_Yu-u6Sv7pTd0vLYHVj7-pFIpkBl-vSC27yV5XkqaAnYFSdLzhepLABCOkek64R9djA=w280-e365-c-rw-lo-l100",
    imgRight: "4px",
    imgTop: "10px",
    defaultTheme: DefaultTheme,
    secondaryTheme: BlueTheme,
  },
  {
    letter: "B",
    title: "Bar",
    info: "Macaroon gummi bears oat cake cotton candy chupa.",
    img:
      "https://lh3.googleusercontent.com/nURB_raLh4C2wRmpp4ZL5JDQzoesR49MOFd4umepiE6mFIJPvoocwEvs1UJcGHOPQF0ce56h7cYR9OA3dI6X51j9QLt0qJMaHIwf=w140-e365-c",
    imgRight: "-15px",
    imgTop: "15px",
    defaultTheme: DefaultTheme,
    secondaryTheme: GreenTheme,
  },
  {
    letter: "C",
    title: "Candy",
    info:
      "Caramels carrot cake cupcake jelly beans danish donut sugar plum jelly beans sweet roll",
    img:
      "https://lh3.googleusercontent.com/vKXcMt6XWFPMX2jpKSn-mfX2MMkmo1Su06MJllBR4KbgGTKohTHbo47d__Q8BkZACJnwET3UZylV8yZwapA6JvWuiL39VrnT7UvjTGU=w140-e365-c",
    imgRight: "-5px",
    imgTop: null,
    defaultTheme: DefaultTheme,
    secondaryTheme: OrangeTheme,
  },
];

export default cardContent;
