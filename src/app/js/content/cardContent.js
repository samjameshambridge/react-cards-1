import DefaultTheme from "../theme/defaultTheme";
import BlueTheme from "../theme/blueTheme";
import GreenTheme from "../theme/greenTheme";
import OrangeTheme from "../theme/orangeTheme";

const cardContent = [
  {
    letter: "A",
    title: "AI",
    info: "At it's heart, AI is computer programming which learns and adapts",
    img:
      " https://lh3.googleusercontent.com/fAJLl7HZo7KZsVPjjB_zmd672zZbKsDhS5s_Yu-u6Sv7pTd0vLYHVj7-pFIpkBl-vSC27yV5XkqaAnYFSdLzhepLABCOkek64R9djA=w280-e365-c-rw-lo-l100",
    imgRight: "4px",
    imgTop: "10px",
    defaultTheme: DefaultTheme,
    secondaryTheme: BlueTheme,
  },
  {
    letter: "B",
    title: "Bias",
    info: "Incomplete data can lead to bias in AI",
    img:
      "https://lh3.googleusercontent.com/nURB_raLh4C2wRmpp4ZL5JDQzoesR49MOFd4umepiE6mFIJPvoocwEvs1UJcGHOPQF0ce56h7cYR9OA3dI6X51j9QLt0qJMaHIwf=w140-e365-c",
    imgRight: "-15px",
    imgTop: "15px",
    defaultTheme: DefaultTheme,
    secondaryTheme: GreenTheme,
  },
  {
    letter: "C",
    title: "Climate",
    info: "AI is being used to tackle global climate crises",
    img:
      "https://lh3.googleusercontent.com/vKXcMt6XWFPMX2jpKSn-mfX2MMkmo1Su06MJllBR4KbgGTKohTHbo47d__Q8BkZACJnwET3UZylV8yZwapA6JvWuiL39VrnT7UvjTGU=w140-e365-c",
    imgRight: "-5px",
    imgTop: null,
    defaultTheme: DefaultTheme,
    secondaryTheme: OrangeTheme,
  },
];

export default cardContent;
