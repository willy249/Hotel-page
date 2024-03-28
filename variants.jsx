/**
 * fadeIn 函數生成一個動畫效果對象，用於在元素顯示時實現淡入效果。
 * @param {string} direction - 淡入方向，可以是 "up", "down", "left" 或 "right"。
 * @param {number} delay - 動畫延遲時間（秒）。
 * @returns {object} 返回一個包含動畫效果的對象。
 */
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
