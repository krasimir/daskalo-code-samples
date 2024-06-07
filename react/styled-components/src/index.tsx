import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = styled.h1`
  color: red;
  font-size: ${props => props.size}px;
`;

const BrandedTitle = styled(Title)`
  text-decoration: underline;
`;

function Navigation({ className }) {
  return (
    <nav className={className}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const CoolNavigation = styled(Navigation)`
  background-color: #333;
  li {
    font-weight: bold;
    text-decoration: underline;
    color: ${props => props.theme.secondary};
  }
  & {
    border: 1px solid red;
  }
`;

const theme = {
  primary: 'red',
  secondary: 'magenta',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrandedTitle size={32}>Hello, <span>user</span></BrandedTitle>
      <CoolNavigation />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);