import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [widnowWidth, setWindowWidth] = useState(
    undefined as number | undefined,
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.screen.width);
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widnowWidth;
}
