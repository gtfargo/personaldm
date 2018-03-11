import React from "react";
import styled from "styled-components";

const NotificationText = styled.h2`
    font-size: 1.5em;
    text-align: left;
    line-height: 1.4em;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        max-width: ${props => props.theme.sizes.maxWidth};
        font-size: 1em;
      }
      @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        max-width: ${props => props.theme.sizes.maxWidth};
        font-size: 1.2em;
      }
`

const NotificationBanner = styled.div`
    padding-top: 1em;
    padding-bottom: 1em; 
    padding-left: 3em;
    padding-right: 3em;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    position: absolute;
    transition: all 400ms;
    transform: ${props => props.ready ? `translateY(0%)` : `translateY(-100%)`}
    
`

export default class Notification extends React.Component {
    state = {
        ready: false
    }

    componentDidMount() {
        setTimeout(() => {
            requestAnimationFrame(() => {
                this.setState({
                    ready: true
                })
            })
        }, 1000)
    }

    render() {
        return (
            <NotificationBanner ready={this.state.ready}>
                <NotificationText>
                    Hey!  I'm in the process of overhauling this site - some things may not work properly in the meantime.  Feel free to look around!
                </NotificationText>
            </NotificationBanner>
        )
    }
}