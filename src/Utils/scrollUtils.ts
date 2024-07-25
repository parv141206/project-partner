export const calculateTransform = (
  scrollPosition: number,
  maxScroll: number,
) => {
  // Calculate rotation from 0 to -45 degrees based on scroll position
  const rotation = Math.max(-45, (scrollPosition / maxScroll) * 45);

  // Calculate scale factor from 1 to 0.5 based on scroll position
  const scale = 1 - (scrollPosition / maxScroll) * 0.5;

  return `
    translateY(${scrollPosition * 0.5}px) 
    translateX(${scrollPosition * 1.5}px) 
    rotate(-${rotation}deg)
    scale(${scale})
  `;
};
