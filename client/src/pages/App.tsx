import Header from "../components/Header";
import Typer from "../components/Typer";
import Tips from "../components/Tips";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

import styled from "styled-components";

const AppStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  align-items: center;

  @media (max-width: 960px) {
    .title-indicator {
      display: none;
    }
  }
`;

import "./App.css";

function App() {
  return (
    <AppStyles>
      <Header />
      <Typer />
      <Tips />
      <About />
      <Feedback />
      <Footer />
    </AppStyles>
  );
}

export default App;
