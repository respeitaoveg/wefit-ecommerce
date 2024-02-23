import { useEffect, useState } from "react";

type WindowDimensionsType = {
  width: number | undefined;
  height: number | undefined;
  isSmallerThan640px: boolean;
};

export const useWindowDimensions = (): WindowDimensionsType => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsType>({
    width: undefined,
    height: undefined,
    isSmallerThan640px: false,
  });

  useEffect(() => {
    function handleResize(): void {
      const width = window.innerWidth;
      const isSmallerThan640px = width !== undefined && width < 640;
      setWindowDimensions({
        width,
        height: window.innerHeight,
        isSmallerThan640px,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};