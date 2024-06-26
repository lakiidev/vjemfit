import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import heroGuy from "../assets/images/hero.png";
import circle from "../assets/images/circle.svg";
import { Arrow } from "../arrow";
import { fade, titleAnim, photoAnim } from "../Animations";

const Header = () => {
  return (
    <HeroWrapper>
      <Hero
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.5, delayChildren: 1 }}
      >
        <Img variants={photoAnim}>
          <img src={heroGuy} alt="" className="image" />
          <img src={circle} alt="" className="circle" />
        </Img>
        <Text
          initial={"hidden"}
          transition={{ staggerChildren: 0.75 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div className="titles">
            <div>
              <motion.h1 variants={titleAnim}>Transform Your</motion.h1>
            </div>
            <br />
            <div>
              <motion.h1 variants={titleAnim}>Mind, Body & Health</motion.h1>
            </div>
          </motion.div>
          <motion.p variants={fade}>
            Heal your body in 90 days with proven holistic methods{" "}
          </motion.p>
          <motion.a variants={fade} href="#" className="button">
            I’m Ready to Change
          </motion.a>
        </Text>
      </Hero>
      <Arrow />
    </HeroWrapper>
  );
};
export default Header;

const Hero = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  max-width: 144rem;
  margin: 0 auto;
  @media (max-width: 1500px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    overflow: hidden;
    text-align: center;
    a {
      margin: 0 auto;
    }
  }
`;
const HeroWrapper = styled.div`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
  .arrow {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media (max-width: 1500px) {
    .arrow {
      transform: scale(0.8);
      transform-origin: bottom right;
    }
  }
  @media (max-width: 800px) {
    .arrow {
      display: none;
    }
  }
`;
const Img = styled(motion.div)`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    margin-left: -20rem;
    .circle {
      left: 25% !important;
    }
  }
  .circle {
    position: absolute;
    top: 20%;
    left: 5%;
  }
  .image {
    position: relative;
    z-index: 100;
  }
  @media (max-width: 500px) {
    margin-left: 0;
    .image {
      max-width: 100%;
      margin-left: -5rem;
    }
    .circle {
      left: 0rem !important;
      width: 100%;
    }
  }
`;
const Text = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
  margin-top: 2rem;
  align-items: flex-start;
  z-index: 100;
  h1 {
    font-size: 6.4rem;
    font-weight: 700;
    margin: 0;
  }
  p {
    font-size: 2.4rem;
    font-weight: 400;
  }
  .button {
    font-size: 2.4rem;
    font-weight: 700;
  }
  .titles {
    div {
      overflow: hidden;
    }
  }
`;
