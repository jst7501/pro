import React from "react";
import { SvgXml } from "react-native-svg";

export default function Svg() {
  const ScheSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.3">
  <path d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 8H20" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 3V5" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 3V5" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  `;
  const ScheSvg = () => <SvgXml xml={ScheSvgXml} width="30" height="30" />;
  return <ScheSvg />;
}
