import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { color, motion, useAnimation } from "framer-motion";
import rightArrow from "./rightArrow.png";
import leftArrow from "./leftArrow.png";
const Card = ({ wordInfo, onSwipe }) => {
  const [flipped, setFlipped] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setFlipped(false);
    controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  }, [wordInfo, controls]);

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      // Swiped right (correct answer)
      controls.start({
        x: 500,
        y: -100,
        rotate: 45,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      onSwipe("right");
    } else if (info.offset.x < -threshold) {
      // Swiped left (wrong answer)
      controls.start({
        x: -500,
        y: -100,
        rotate: -45,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      onSwipe("left");
    } else {
      // Return to original position if swipe is not far enough
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  };

  return (
    <>
      <div
        style={{
          color: "white",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
          minWidth: "100%",
        }}
      >
        <div>
          <img
            style={{ marginBottom: "-.3rem", height: "1.25rem" }}
            src={leftArrow}
          />
          {"  "}
          Learnt it!
        </div>
        <div>
          Knew it!{"  "}
          <img
            style={{ marginBottom: "-.3rem", height: "1.25rem" }}
            src={rightArrow}
          />
        </div>
      </div>
      <motion.div
        className={s.cardContainer}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      >
        <div
          className={`${s.card} ${flipped ? s.flipped : ""}`}
          onClick={() => setFlipped((prev) => !prev)}
        >
          {/* Front of the card */}
          {!flipped && (
            <div className={s.front}>
              <h2 className={s.word}>{wordInfo.word}</h2>
              <div className={s.tapToView}>
                <hr className={s.hr} />
                Tap to view
              </div>
            </div>
          )}

          {/* Back of the card */}
          {flipped && (
            <div className={s.back}>
              <h2 className={s.word}>{wordInfo.word}</h2>
              <p className={s.definition}>{wordInfo.definition}</p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
