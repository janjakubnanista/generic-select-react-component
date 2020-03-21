import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// This component does not contain any business logic, it is here just to make things a bit prettier.
// Having said that I didn't write any tests for this component (the only thing to test here
// would be whether the Calendar gets rendered)
export const App: React.FC = () => {
  return (
    <Container>
      <DefaultStyles />

      <Title>@jannanista/webpack-react-ts-template</Title>
      <Content>Your webapp here!</Content>
    </Container>
  );
};

// A simple full-screen container component
const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  flex: 0;
`;

const Content = styled.div`
  flex: 1;
  position: relative;
`;

const DefaultStyles = createGlobalStyle`
  html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
