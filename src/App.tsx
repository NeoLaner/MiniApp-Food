import "./App.css";
import {
  WebAppProvider,
  MainButton,
  useShowPopup,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";

function App() {
  const [colorScheme, themeParams] = useThemeParams();

  return (
    <WebAppProvider>
      <div className="bg-black">dasddsadasas</div>;
    </WebAppProvider>
  );
}

export default App;
