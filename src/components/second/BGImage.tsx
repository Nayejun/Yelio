import { useEffect, useState } from "react";
import Image from "next/image";
import BG from "../../assets/images/BG.png"

function getWindowDimensions() {
   const { innerWidth: width, innerHeight: height } = window;
   return {
      width,
      height,
   };
}

export function BGImage() {
   const [width, setWidth] = useState<number>();
   const [height, setHeight] = useState<number>();

   useEffect(() => {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
   }, []);

   useEffect(() => {
      function handleResize() {
         const { width, height } = getWindowDimensions();
         setWidth(width);
         setHeight(height);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   if (width && height) {
      return (
           <Image
             src={BG.src}
             width={width}
             height={height}
           />
      );
   }

   return null;
}