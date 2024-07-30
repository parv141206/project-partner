import { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import Icon from "../../Statefull/Icon";

interface Position {
  x: number;
  y: number;
}

const iconSources = [
  "/images/icons/c.svg",
  "/images/icons/c++.svg",
  "/images/icons/java.svg",
  "/images/icons/python.svg",
  "/images/icons/js.svg",
  "/images/icons/angular.svg",
  "/images/icons/react.svg",
];

const getRandomPosition = (
  maxWidth: number,
  maxHeight: number,
  iconSize: number,
): Position => {
  const minX = maxWidth * 0.1; // 10% from the left
  const maxX = maxWidth * 0.9 - iconSize; // 90% minus icon size
  const minY = maxHeight * 0.1; // 10% from the top
  const maxY = maxHeight * 0.9 - iconSize; // 90% minus icon size

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  const xPercent = (x / maxWidth) * 100;
  const yPercent = (y / maxHeight) * 100;

  return { x: xPercent, y: yPercent };
};

const HomePageAnimation: React.FC = () => {
  const [width, height] = useWindowSize();
  const iconSize = 80;
  const [positions, setPositions] = useState<Position[]>([]);

  const updatePositions = () => {
    const newPositions: Position[] = [];

    iconSources.forEach(() => {
      let position: Position;
      do {
        position = getRandomPosition(width, height, iconSize);
      } while (
        newPositions.some(
          (pos) =>
            Math.abs(pos.x - position.x) < (iconSize / width) * 100 &&
            Math.abs(pos.y - position.y) < (iconSize / height) * 100,
        )
      );

      newPositions.push(position);
    });

    setPositions(newPositions);
  };

  useEffect(() => {
    updatePositions();

    if (width > 768) {
      const interval = setInterval(updatePositions, 3 * 1000);
      return () => clearInterval(interval);
    }
  }, [width, height]);

  return (
    <>
      {iconSources.map((src, index) => (
        <motion.div
          key={index}
          className="absolute -z-10"
          initial={{
            top: `${positions[index]?.y ?? 0}%`,
            left: `${positions[index]?.x ?? 0}%`,
          }}
          animate={{
            top: `${positions[index]?.y ?? 0}%`,
            left: `${positions[index]?.x ?? 0}%`,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          style={{
            pointerEvents: "none",
          }}
        >
          <Icon src={src} className="h-20 w-20" />
        </motion.div>
      ))}
    </>
  );
};

export default HomePageAnimation;
