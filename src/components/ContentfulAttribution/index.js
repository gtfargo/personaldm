import React from "react";
import styled from "styled-components";

const Wordmark = styled.img`
  max-width: 100px;
  width: 100%;
`;

const attributionStyles = {
  light:
    "https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",
  dark:
    "https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg",
  mono:
    "https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
};

export default class ContentfulAttribution extends React.Component<void, void> {
  render() {
    return (
      <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.7 33.08" style={{width: 100}}>
          <title>contentful</title>
          <g id="contentful-attribution">
            <path d="M6.7,26.38h0a5.79,5.79,0,0,1,0-8.19h0A2.26,2.26,0,1,0,3.5,15a10.49,10.49,0,0,0-3,7.3,10.65,10.65,0,0,0,3,7.3,2.26,2.26,0,0,0,3.2-3.2Z" fill="none" stroke={this.props.fillColor} strokeMiterlimit="10"/>
            <path d="M6.7,18.18h0a5.79,5.79,0,0,1,8.19,0h0A2.26,2.26,0,0,0,18.1,15a10.45,10.45,0,0,0-7.3-3,10.65,10.65,0,0,0-7.3,3,2.26,2.26,0,0,0,3.2,3.2Z" fill="none" stroke={this.props.fillColor} strokeMiterlimit="10"/>
            <path d="M14.9,26.38h0a5.79,5.79,0,0,1-8.19,0h0a2.26,2.26,0,1,0-3.2,3.2,10.49,10.49,0,0,0,7.3,3,10.65,10.65,0,0,0,7.3-3,2.26,2.26,0,1,0-3.2-3.2Z" fill="none" stroke={this.props.fillColor} strokeMiterlimit="10"/>
            <circle cx="5.13" cy="16.58" r="2.3" fill="none" stroke={this.props.fillColor} strokeMiterlimit="10"/>
            <circle cx="5.13" cy="27.96" r="2.3" fill="none" stroke={this.props.fillColor} strokeMiterlimit="10"/>
            <path d="M28.3,24.38c.7-.5.7-.2,1.3.3.3.3,1,.8.5,1.2a4.51,4.51,0,0,1-3.3,1.2,4.81,4.81,0,0,1-5-4.6v-.63a5.22,5.22,0,0,1,1.6-3.5,4.68,4.68,0,0,1,3.4-1.1,5.53,5.53,0,0,1,1.8.3,10.59,10.59,0,0,1,1.1.6c.7.5.4.8-.2,1.3a1.31,1.31,0,0,0-.3.4c-.3.3-.4.5-.8.2a2.75,2.75,0,0,0-2.3-.5c-2.6.7-2.4,5.3.7,5.3A2.66,2.66,0,0,0,28.3,24.38ZM100.1,27a.86.86,0,0,1-.8-.8V16a.86.86,0,0,1,.8-.8h.8a.86.86,0,0,1,.8.8v10.2a.86.86,0,0,1-.8.8Zm-4.4-1.2a4,4,0,0,1-3.1,1.3c-2.6,0-3.9-2.2-3.9-4.6v-4.1a.86.86,0,0,1,.8-.8h.8a.86.86,0,0,1,.8.8v4.1a2.06,2.06,0,0,0,1.7,2.38l.1,0h.4a2.35,2.35,0,0,0,2.3-2.4h0v-4.1a.86.86,0,0,1,.8-.8h.8a.86.86,0,0,1,.8.8v7.8a.86.86,0,0,1-.8.8h-.7c-.4,0-.7-.4-.8-.8v-.4Zm-10.2-8.2h1.6a.86.86,0,0,1,.8.8v.47a.79.79,0,0,1-.78.8H85.5v6.4a.86.86,0,0,1-.8.8h-.8a.86.86,0,0,1-.8-.8v-8.9a3.44,3.44,0,0,1,3.1-3.7h1.4a.86.86,0,0,1,.8.8v.5a.79.79,0,0,1-.78.8H86.9c-.9,0-1.3.7-1.3,1.6l-.1.4Zm-5.8,0h1.8a.86.86,0,0,1,.8.8v.47a.86.86,0,0,1-.8.8H79.7v3.9c0,.8.4,1.2,1.1,1.2h.4a.86.86,0,0,1,.8.8v.5a.86.86,0,0,1-.8.8H80.1c-1.9-.1-2.8-1.4-2.8-3.3V16a.86.86,0,0,1,.8-.8h.8a.86.86,0,0,1,.8.8Zm-26,0h1.8a.86.86,0,0,1,.8.8v.47a.86.86,0,0,1-.8.8H53.7v3.9c0,.8.4,1.2,1.1,1.2h.4a.79.79,0,0,1,.8.78v0h0v.5a.86.86,0,0,1-.8.8h-.5c-2.1,0-3.4-.9-3.4-3.3V16a.86.86,0,0,1,.8-.8h.8a.86.86,0,0,1,.8.8Zm-10.5,1.1a4.35,4.35,0,0,1,3-1.3c2.6,0,4,2.1,4,4.6v4.1a.86.86,0,0,1-.8.8h-.8a.86.86,0,0,1-.8-.8V22a2.07,2.07,0,0,0-1.7-2.39h-.5A2.35,2.35,0,0,0,43.3,22h0v4.1a.86.86,0,0,1-.8.8h-.8a.86.86,0,0,1-.8-.8v-7.8a.86.86,0,0,1,.8-.8h.67c.4,0,.7.4.8.8Zm26,0a4.35,4.35,0,0,1,3-1.3c2.6,0,4,2.1,4,4.6v4.1a.86.86,0,0,1-.8.8h-.8a.86.86,0,0,1-.8-.8V22a2.07,2.07,0,0,0-1.7-2.39h-.5A2.35,2.35,0,0,0,69.3,22h0v4.1a.86.86,0,0,1-.8.8h-.8a.86.86,0,0,1-.8-.8v-7.8a.86.86,0,0,1,.8-.8h.67c.4,0,.7.4.8.8v.4Zm-34-1.3a4.8,4.8,0,0,0-4.9,4.7h0v.2a4.69,4.69,0,0,0,4.4,4.9h.5a4.69,4.69,0,0,0,4.9-4.4v-.5a4.69,4.69,0,0,0-4.4-4.9Zm23.7,5.7A2.59,2.59,0,0,0,61.6,25a4,4,0,0,0,1.8-.4c.1,0,.2-.1.3-.1.3-.2.6-.3.8,0l.4.4.4.4c.4.5.1.6-.3.9a6.7,6.7,0,0,1-3.4,1c-3.1,0-5.2-1.9-5.2-5a4.62,4.62,0,0,1,4.33-4.9h.64c3,0,4.7,1.8,4.8,4.8,0,.8.1,1.1-.8,1.1h-6.5Zm-23.6-3.5a2.59,2.59,0,0,1,2.5,2.68v0h0a2.51,2.51,0,1,1-5,.6,1.36,1.36,0,0,1,0-.2v-.4a2.48,2.48,0,0,1,2.2-2.7Zm23.6,1.5h4.8a2.11,2.11,0,0,0-2.3-1.7A2.47,2.47,0,0,0,58.9,21.08Z" fill={this.props.fillColor}/>
            <path d="M24.77.15h1.29a2.7,2.7,0,0,1,.63.07,1.3,1.3,0,0,1,.49.23,1,1,0,0,1,.31.38,1.24,1.24,0,0,1,.11.54,1.12,1.12,0,0,1-.11.54,1,1,0,0,1-.32.38,1.3,1.3,0,0,1-.49.23,2.72,2.72,0,0,1-.63.08h-.81V4.7h-.47Zm.46,2H26a1.36,1.36,0,0,0,.83-.21.72.72,0,0,0,.28-.62A.69.69,0,0,0,26.83.7,1.39,1.39,0,0,0,26,.5h-.78Z" fill="#c1c1c2"/>
            <path d="M34.37,2.43a2.46,2.46,0,0,1-.18,1,2.26,2.26,0,0,1-1.25,1.25,2.54,2.54,0,0,1-1.88,0,2.26,2.26,0,0,1-1.25-1.25,2.46,2.46,0,0,1-.18-1,2.46,2.46,0,0,1,.18-1A2.26,2.26,0,0,1,31.06.18a2.54,2.54,0,0,1,1.88,0,2.26,2.26,0,0,1,1.25,1.25A2.46,2.46,0,0,1,34.37,2.43Zm-.49,0a2.17,2.17,0,0,0-.13-.76A1.77,1.77,0,0,0,33.37,1a1.91,1.91,0,0,0-.59-.43,2,2,0,0,0-1.58,0,1.91,1.91,0,0,0-.59.43,1.9,1.9,0,0,0-.37.63,2.33,2.33,0,0,0,0,1.52,1.86,1.86,0,0,0,.33.66,1.91,1.91,0,0,0,.59.43,2,2,0,0,0,1.58,0,1.81,1.81,0,0,0,.63-.43,1.9,1.9,0,0,0,.37-.63,2.35,2.35,0,0,0,.1-.79Z" fill="#c1c1c2"/>
            <path d="M37.72,4.07h0L38.87.15h.55l1.14,3.92h0L41.69.15h.49L40.83,4.7h-.54L39.15.79h0L38,4.7h-.54L36.1.15h.49Z" fill="#c1c1c2"/>
            <path d="M44.66,4.29H47.1V4.7H44.2V.15H47V.56H44.66V2.12h2.21v.41H44.66Z" fill="#c1c1c2"/>
            <path d="M49.79,4.7h-.42V.15h1.3a3.18,3.18,0,0,1,.62.06,1.48,1.48,0,0,1,.5.21,1,1,0,0,1,.32.38,1.24,1.24,0,0,1,.12.57,1.08,1.08,0,0,1-.33.81,1.31,1.31,0,0,1-.37.24,1.83,1.83,0,0,1-.46.12l1.3,2.16H51.8L50.56,2.57h-.77Zm0-2.53h.8a1.52,1.52,0,0,0,.86-.2.68.68,0,0,0,.3-.61A.73.73,0,0,0,51.67,1a.61.61,0,0,0-.23-.25.93.93,0,0,0-.36-.14,1.85,1.85,0,0,0-.47,0h-.82Z" fill="#c1c1c2"/>
            <path d="M55,4.29h2.4V4.7h-2.9V.15h2.9V.56H55V2.12h2.21v.41H55Z" fill="#c1c1c2"/>
            <path d="M59.64.15h1.51A2.7,2.7,0,0,1,62,.29a2.34,2.34,0,0,1,.77.43,2.11,2.11,0,0,1,.77,1.71,2.17,2.17,0,0,1-.21,1,2.26,2.26,0,0,1-.56.71,2.34,2.34,0,0,1-.77.43,2.7,2.7,0,0,1-.85.14H59.64Zm.46,4.14H61a2.31,2.31,0,0,0,.9-.16,1.93,1.93,0,0,0,.63-.42,1.62,1.62,0,0,0,.38-.59,2,2,0,0,0,0-1.38,1.62,1.62,0,0,0-.38-.59,1.93,1.93,0,0,0-.63-.42A2.31,2.31,0,0,0,61,.57H60.1Z" fill="#c1c1c2"/>
            <path d="M68.77.15h1.36a3.05,3.05,0,0,1,.52.05,1.29,1.29,0,0,1,.47.19,1,1,0,0,1,.34.36,1.11,1.11,0,0,1,.13.57,1,1,0,0,1-.22.63,1,1,0,0,1-.59.35h0a1.16,1.16,0,0,1,.74.34,1.09,1.09,0,0,1,.29.79,1.14,1.14,0,0,1-.46.92,1.72,1.72,0,0,1-.53.25,2.82,2.82,0,0,1-.71.09H68.77Zm.46,2h.93a1.93,1.93,0,0,0,.34,0A.85.85,0,0,0,70.81,2,.69.69,0,0,0,71,1.77a.85.85,0,0,0,.09-.38.69.69,0,0,0-.32-.62,1,1,0,0,0-.35-.14,1.48,1.48,0,0,0-.42,0h-.8Zm0,2.16h.86a1.93,1.93,0,0,0,.48,0,1.38,1.38,0,0,0,.4-.15.84.84,0,0,0,.28-.31.76.76,0,0,0,.1-.41A.77.77,0,0,0,71,2.77a1.47,1.47,0,0,0-.87-.22h-1Z" fill="#c1c1c2"/>
            <path d="M75.75,4.7h-.46v-2L73.58.15h.58l1.37,2.21L76.92.15h.54l-1.7,2.59Z" fill="#c1c1c2"/>
            <rect x="83.16" y="2.2" width="9.42" height="0.43" fill="#c1c1c2"/>
            <rect x="9.49" y="2.2" width="9.42" height="0.43" fill="#c1c1c2"/>
          </g>
        </svg>

        {/* <Wordmark
          {...this.props}
          src={attributionStyles[this.props.attributionStyle]}
          alt="Powered by Contentful"
        /> */}
      </a>
    );
  }
}
