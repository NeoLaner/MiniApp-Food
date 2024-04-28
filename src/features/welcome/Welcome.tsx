import { MainButton, useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { Card, Cards } from "./Card";
// import Button from "./Button";
import { useState } from "react";

const cards = [
  { headingText: "Welcome", text: "Hey", image: "coock.webp" },
  {
    headingText: "Finish",
    text: "Hey HeyHeyHeyHeyHeyHey",
    image: "buy.webp",
  },
];

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
        {cards.map((card, index) => (
          <Card
            index={index}
            currentSlide={currentSlide}
            headingText={card.headingText}
            text={card.text}
            image={card.image}
            key={index}
          />
        ))}
      </Cards>
      <MainButton text="Get Started" onClick={() => setCurrentSlide(1)} />
    </main>
  );
}
