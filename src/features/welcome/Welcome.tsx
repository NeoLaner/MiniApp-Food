import { MainButton, useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { CardHeader, CardContent, CardFooter, Card, Cards } from "./Card";
import Button from "./Button";
import { useState } from "react";

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [colorScheme, themeParams] = useThemeParams();
  console.log(colorScheme);
  console.log(themeParams.bg_color);

  return (
    <main
      className={`flex h-[100dvh] items-center justify-center bg-[var(--tg-theme-bg-color)]`}
    >
      <Cards className="flex overflow-hidden relative">
        <Card
          className={`w-full max-w-md   transition-all  ${
            currentSlide > 0 ? "-translate-x-full" : ""
          } `}
        >
          <CardHeader className="relative overflow-hidden rounded-t-lg flex items-center justify-center ">
            <img
              alt="Welcome"
              className="w-48"
              height="200"
              src="coock.webp"
              width="400"
            />
          </CardHeader>
          <CardContent className="space-y-4 p-6 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter text-[var(--tg-theme-text-color)]">
                Welcome to our App
              </h2>
              <p className="text-[var(--tg-theme-text-color)] ">
                Get started by exploring our features and discovering how our
                app can help you achieve your goals.
              </p>
            </div>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              onClick={() => setCurrentSlide(1)}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card
          className={`w-full max-w-md transition-all absolute ${
            currentSlide > 0 ? "" : "translate-x-full"
          } `}
        >
          <CardHeader className="relative overflow-hidden rounded-t-lg flex items-center justify-center">
            <img
              alt="Welcome"
              className="w-48"
              height="200"
              src="buy.webp"
              width="400"
            />
          </CardHeader>
          <CardContent className="space-y-4 p-6 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">
                Welcome to our App
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Get started by exploring our features and discovering how our
                app can help you achieve your goals.
              </p>
            </div>
          </CardContent>
          <CardFooter className="pt-4 hidden">
            <MainButton text="Get Started" onClick={() => setCurrentSlide(1)} />
            {/* <Button
              onClick={() => setCurrentSlide(1)}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Get Started
            </Button> */}
          </CardFooter>
        </Card>
      </Cards>
    </main>
  );
}
