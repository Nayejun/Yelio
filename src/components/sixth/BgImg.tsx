import {useEffect, useState} from "react";
import Image from "next/image";
import Bg from "../../assets/images/BG5.png";
import styled from "styled-components";

const Positioner = styled.div`
  //position: fixed;
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-y: hidden;
`;

const getWindowDimensions = () => {
   const {innerWidth: width, innerHeight: height} = window;
   return {
      width, height,
   };
}

const BgImg = () => {
   const [width, setWidth] = useState<number>();
   const [height, setHeight] = useState<number>();

   useEffect(() => {
      const {width, height} = getWindowDimensions();

      setWidth(width);
      setHeight(height);
   }, []);

   useEffect(() => {
      const handleResize = () => {
         const {width, height} = getWindowDimensions();
         setWidth(width);
         setHeight(height);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   if (width && height) {
      return (
        <Positioner>
           <Image
             src={Bg.src}
             width={width}
             height={height}
           />
        </Positioner>
      );
   }
   return null;
}

export default BgImg;