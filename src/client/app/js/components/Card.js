import React, { Component, createRef } from "react";
import styled from "styled-components";

import Arrow from "./Arrow";
import Grid from "./Grid";
import Info from "./Info";
import Img from "./Img";
import Letter from "./Letter";
import Title from "./Title";

const CardWrapper = styled.div`
  height: 336px;
  margin: 20px 50px;
  perspective: 500px;
  position: relative;
  transform: translateZ(0px);
  width: 309px;
`;

const CardBody = styled.div`
  background: ${({
    defaultTheme: { bgColor },
    mouseOver,
    secondaryTheme: { primaryColor },
  }) => (mouseOver ? primaryColor : bgColor)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({
    defaultTheme: { borderColor },
    mouseOver,
    secondaryTheme: { secondaryColor },
  }) => (mouseOver ? secondaryColor : borderColor)};
  border-radius: 15px;
  display: flex;
  flex-flow: column nowrap;
  height: 336px;
  padding: 20px;
  position: relative;
  outline-color: rgb(44, 45, 72);
  transform: translate(0px, 0px);
  transition: background 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
    border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
    color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  width: 309px;
  z-index: 1;
`;

const ShadowS = styled.div`
  background: ${({ defaultTheme: { shadowColor } }) =>
    shadowColor ? shadowColor : ""};
  border-radius: 15px;
  content: "hello";
  display: block;
  height: 302px;
  position: absolute;
  bottom: ${({ mouseOver }) => (mouseOver ? "-7px" : "0px")};
  transform: translate(0px, 0px);
  transition: bottom 0.6s ease, right 0.6s ease;
  right: ${({ mouseOver }) => (mouseOver ? "-7px" : "0px")};
  width: 278px;
  z-index: -1;
`;

const ImgWrapper = styled.div`
  height: 50%;
  width: 100%;
`;

export default class Card extends Component {
  constructor(props) {
    super(props);

    // dom references
    this.cardBodyRef = createRef();
    this.cardWrapperRef = createRef();
    this.shadowRef = createRef();

    this.state = {
      mouseOver: false,
    };
  }

  componentDidUpdate() {
    var { mouseOver } = this.state;

    if (mouseOver) {
      var rotateElems = [this.cardBodyRef.current, this.shadowRef.current];

      this.animate3dRotation(rotateElems);
    }

    this.animateScale(this.cardWrapperRef.current, mouseOver);
  }

  animate3dRotation(elems) {
    var {
      gsap: { timeline },
    } = gsap;
    var tl = new timeline();

    tl.to(elems, { duration: 0.18, rotationX: "-6deg" })
      .to(elems, { duration: 0.3, rotationX: "0.85deg" })
      .to(elems, { duration: 0.15, rotationX: "0deg" });
  }

  animateScale(elems, mouseOver) {
    var {
      gsap: { timeline },
    } = gsap;
    var tl = new timeline();

    if (mouseOver) {
      tl.to(elems, { duration: 0.45, scale: 1.035 });
      tl.to(elems, { duration: 0.325, scale: 1.03 });
    } else {
      tl.to(elems, { duration: 0.3, scale: 1 });
    }
  }

  onMouseStateChange() {
    this.setState({ mouseOver: !this.state.mouseOver });
  }

  render() {
    const {
      content: {
        defaultTheme,
        img,
        imgRight,
        imgTop,
        info,
        letter,
        secondaryTheme,
        title,
      },
    } = this.props;

    const { mouseOver } = this.state;

    return (
      <CardWrapper
        ref={this.cardWrapperRef}
        onMouseEnter={() => this.onMouseStateChange()}
        onMouseLeave={() => this.onMouseStateChange()}
      >
        <CardBody
          ref={this.cardBodyRef}
          defaultTheme={defaultTheme}
          secondaryTheme={secondaryTheme}
          mouseOver={mouseOver}
        >
          <ImgWrapper>
            <Grid secondaryTheme={secondaryTheme} mouseOver={mouseOver} />
            <Letter
              letter={letter}
              defaultTheme={defaultTheme}
              secondaryTheme={secondaryTheme}
              mouseOver={mouseOver}
            />
            <Img top={imgTop} right={imgRight} img={img} />
          </ImgWrapper>
          <Title
            title={title}
            defaultTheme={defaultTheme}
            mouseOver={mouseOver}
          />
          <Info defaultTheme={defaultTheme} info={info} mouseOver={mouseOver} />
          <Arrow defaultTheme={defaultTheme} mouseOver={mouseOver} />
        </CardBody>
        <ShadowS
          ref={this.shadowRef}
          defaultTheme={defaultTheme}
          mouseOver={mouseOver}
        />
      </CardWrapper>
    );
  }
}
