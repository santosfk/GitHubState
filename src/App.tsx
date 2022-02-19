import * as style from "./styleApp";
import RoutesFunc from "./Routes/Routes";
import { ContextProvider } from "./context";
function App() {
  return (
    <>
      <ContextProvider>
        <RoutesFunc />
      </ContextProvider>
    </>
  );
}

export default App;
