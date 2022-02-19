import * as style from "./styleApp";
import Container from "./components/container";
import { ContextProvider } from "./context";
function App() {
  return (
    <>
      <ContextProvider>
        <style.HeaderBar>
          <h1>me</h1>
          <h1>myPacks</h1>
        </style.HeaderBar>
        <Container />
      </ContextProvider>
    </>
  );
}

export default App;
