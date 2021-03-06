import React from "react";
import { SvgXml } from "react-native-svg";

export default function Svg() {
  const CoachSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.3">
  <path d="M3 4V18C3 19.1046 3.89543 20 5 20H17H19C20.1046 20 21 19.1046 21 18V8H17" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 4H17V18C17 19.1046 17.8954 20 19 20V20" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 8L7 8" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 12L9 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  `;
  const CoachSvg = () => <SvgXml xml={CoachSvgXml} width="18" height="18" />;
  return <CoachSvg />;
}
