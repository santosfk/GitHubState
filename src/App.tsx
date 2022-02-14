import * as style from "./styleApp";
import Container from "./components/container";
import { ContextProvider } from "./context";
function App() {
  return (
    <>
      <ContextProvider>
        <style.Title>GitHub.State</style.Title>
        <Container />
      </ContextProvider>
    </>
  );
}

export default App;
