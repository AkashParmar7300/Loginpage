import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ff4a4a; /* Red background color */
`;

const BoxContainer = styled.div`
  width: 400px;
  min-height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #ff4a4a, #4a90e2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 500px;
  position: absolute;
  top: -290px;
  left: -70px;
  background: linear-gradient(45deg, #ff4a4a, #4a90e2);
  border-radius: 50%;
  transform: rotate(60deg);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeaderText = styled.h2`
  margin: 0;
  font-size: 30px;
`;

const SmallText = styled.h5`
  margin: 0;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: none;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  padding: 0px 10px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;

  &:focus {
    border-bottom: 2px solid #4a90e2;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 1em;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  background: #4a90e2;
  cursor: pointer;
  transition: all 240ms ease-in-out;

  &:hover {
    background: #ff4a4a;
  }
`;

const SwitchButton = styled.button`
  margin-top: 10px;
  background: none;
  color: #4a90e2;
  border: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #ff4a4a;
  }
`;

const backDropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "40%",
    height: "500px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 1.8,
  stiffness: 25,
};

export default function LoginPage() {
  const [isExpanded, setExpanded] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToRegister = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setIsLogin(false);
    }, 400);
  };

  const switchToLogin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setIsLogin(true);
    }, 400);
  };

  return (
    <Container>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backDropVariants}
            transition={expandingTransition}
          />
          <HeaderContainer>
            <HeaderText>{isLogin ? "Login" : "Register"}</HeaderText>
            <SmallText>
              {isLogin ? "Please login with your phone number" : "Please register with your phone number"}
            </SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <FormContainer>
            <Input type="tel" placeholder="Phone Number" required />
            <Input type="password" placeholder="Password" required />
            {!isLogin && <Input type="password" placeholder="Confirm Password" required />}
            <SubmitButton type="submit">
              {isLogin ? "Login" : "Register"}
            </SubmitButton>
            <SwitchButton onClick={isLogin ? switchToRegister : switchToLogin}>
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </SwitchButton>
          </FormContainer>
        </InnerContainer>
      </BoxContainer>
    </Container>
  );
}
