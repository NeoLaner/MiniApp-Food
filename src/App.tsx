import {
  WebAppProvider,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";
import Welcome from "./features/welcome/Welcome";

function App() {
  const [colorScheme, themeParams] = useThemeParams();
  console.log(colorScheme);
  console.log(themeParams);

  return (
    <WebAppProvider>
      <Welcome />
    </WebAppProvider>
  );
}

export default App;
