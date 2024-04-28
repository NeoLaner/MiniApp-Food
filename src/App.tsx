import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import Welcome from "./features/welcome/Welcome";

function App() {
  return (
    <WebAppProvider>
      <Welcome />
    </WebAppProvider>
  );
}

export default App;
