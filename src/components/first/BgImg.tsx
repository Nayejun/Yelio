// import {useEffect, useState} from "react";
// import Image from "next/image";
// import Rectangle from "../../assets/images/Rectangle.png";
//
// const getWindowDimensions = () => {
//    const {innerWidth: width, innerHeight: height} = window;
//    return {
//       width, height,
//    };
// }
//
// const BgImg = () => {
//    const [width, setWidth] = useState<number>();
//    const [height, setHeight] = useState<number>();
//
//    useEffect(() => {
//       const {width, height} = getWindowDimensions();
//
//       setWidth(width);
//       setHeight(height);
//    }, []);
//
//    useEffect(() => {
//       const handleResize = () => {
//          const {width, height} = getWindowDimensions();
//          setWidth(width);
//          setHeight(height);
//       }
//
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//    }, []);
//
//    if (width && height) {
//       return (
//         <Image
//           src={Rectangle.src}
//           width={width}
//           height={height}
//         />
//       );
//    }
//    return null;
// }
//
// export default BgImg;