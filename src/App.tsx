import "./App.css";
import {
  WebAppProvider,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";

function App() {
  const [colorScheme, themeParams] = useThemeParams();
  console.log(colorScheme);
  console.log(themeParams);

  return (
    <WebAppProvider>
      <div className="bg-black">dasddsadasas</div>;
    </WebAppProvider>
  );
}

export default App;
