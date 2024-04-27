import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Banner } from "./components/Banner/Banner";
import { Link } from "./components/Link/Link";
import { Input } from "./components/Input/input";
import { List } from "./components/List/list";

function App() {
  return (
    <div className="App">
      <Banner text="Witaj na mojej stronie!" />
      <Button>Pokaż alertttt</Button>
      <Link link="https://example.com">Przykładowy link</Link>
      {/* <Input /> */}
      <List />
    </div>
  );
}

export default App;
