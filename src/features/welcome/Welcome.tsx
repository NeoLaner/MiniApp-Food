import { MainButton, useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { Card } from "./Card";

export default function Component() {
  const [colorScheme, themeParams] = useThemeParams();
  console.log(colorScheme);
  console.log(themeParams.bg_color);

  return (
    <main
      className={`flex h-[100dvh] items-center justify-center bg-[var(--tg-theme-bg-color)]`}
    >
      <Card />
      <MainButton text="Get Started" />
    </main>
  );
}
