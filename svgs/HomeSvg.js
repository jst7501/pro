import React from "react";
import { SvgXml } from "react-native-svg";

export default function Svg() {
  const HomeSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.3">
  <path d="M19.5 10C19.5 9.72386 19.2761 9.5 19 9.5C18.7239 9.5 18.5 9.72386 18.5 10H19.5ZM5.5 10C5.5 9.72386 5.27614 9.5 5 9.5C4.72386 9.5 4.5 9.72386 4.5 10H5.5ZM20.6464 12.3536C20.8417 12.5488 21.1583 12.5488 21.3536 12.3536C21.5488 12.1583 21.5488 11.8417 21.3536 11.6464L20.6464 12.3536ZM12 3L12.3536 2.64645C12.1583 2.45118 11.8417 2.45118 11.6464 2.64645L12 3ZM2.64645 11.6464C2.45118 11.8417 2.45118 12.1583 2.64645 12.3536C2.84171 12.5488 3.15829 12.5488 3.35355 12.3536L2.64645 11.6464ZM7 21.5H17V20.5H7V21.5ZM19.5 19V10H18.5V19H19.5ZM5.5 19V10H4.5V19H5.5ZM21.3536 11.6464L12.3536 2.64645L11.6464 3.35355L20.6464 12.3536L21.3536 11.6464ZM11.6464 2.64645L2.64645 11.6464L3.35355 12.3536L12.3536 3.35355L11.6464 2.64645ZM17 21.5C18.3807 21.5 19.5 20.3807 19.5 19H18.5C18.5 19.8284 17.8284 20.5 17 20.5V21.5ZM7 20.5C6.17157 20.5 5.5 19.8284 5.5 19H4.5C4.5 20.3807 5.61929 21.5 7 21.5V20.5Z" fill="#333333"/>
  </g>
  </svg>
  `;
  const HomeSvg = () => <SvgXml xml={HomeSvgXml} width="30" height="30" />;
  return <HomeSvg />;
}
