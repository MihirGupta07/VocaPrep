import React, { useEffect, useState } from "react";
import { words } from "../data/vocabularydotcom-top-1000";
import Card from "../components/Card";
import s from "../components/style.module.scss";

const CardScreen = () => {
  const [randomWordInfo, setRandomWordInfo] = useState(null);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(
    parseInt(localStorage.getItem("highestStreak")) || 0
  );

  useEffect(() => {
    generateRandomWord();
    // Initialize adsbygoogle if not already done
    if (window.adsbygoogle && window.adsbygoogle.loaded === false) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, []);

  const generateRandomWord = () => {
    setRandomWordInfo(words[Math.floor(Math.random() * words.length)]);
  };

  const handleSwipe = (direction) => {
    if (direction === "right") {
      // Correct answer
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) {
        setHighestStreak(newStreak);
        localStorage.setItem("highestStreak", newStreak);
      }
    } else if (direction === "left") {
      // Wrong answer
      setStreak(0);
    }
    setTimeout(() => {
      generateRandomWord();
    }, 500); // Wait for the swipe animation to finish
  };

  return (
    <div className={s.container}>
      <div className={s.topBar}>
        <span>Streak: {streak}</span>
        <span>Highest Streak: {highestStreak}</span>
      </div>

      {randomWordInfo && (
        <Card wordInfo={randomWordInfo} onSwipe={handleSwipe} />
      )}
      {/* AdSense Strip */}
      <div className={s.adContainer}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-4844222444986533" // Replace with your AdSense publisher ID
          data-ad-slot="XXXXXXXXXX" // Replace with your AdSense ad slot ID
          data-ad-format="auto"
        ></ins>
      </div>
    </div>
  );
};

export default CardScreen;
