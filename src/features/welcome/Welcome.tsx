import { MainButton, useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { Card, Cards } from "./Card";
// import Button from "./Button";
import { useState } from "react";
import Button from "./Button";

const cards = [
  {
    headingText: "Welcome",
    text: "🍕 Craving Freshness? You've Arrived at the Right Place! 🍕",
    image: "coock.webp",
  },
  {
    headingText: "Start Ordering",
    text: "🛵💨 Your Next Pizza is Just a Click Away - And Delivery is On Us! 🏡🍕",
    image: "delivery.webp",
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
      <Cards className="flex overflow-hidden relative ">
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
      <Button onClick={() => setCurrentSlide(1)}>dasda</Button>
      <MainButton text="Get Started" onClick={() => setCurrentSlide(1)} />
    </main>
  );
}
