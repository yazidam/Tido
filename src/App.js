import React from "react";
import { Container } from "react-bootstrap";
import CounterList from "./components/CounterList";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Container className="p-3">
        <Header></Header>
        <CounterList></CounterList>
      </Container>
    </div>
  );
}

export default App;
