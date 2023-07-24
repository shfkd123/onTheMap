import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

declare global {
  interface Window {
    naver: any;
  }
}
const Map = () => {
  const mapRef = useRef(null);
  const { naver } = window;

  useEffect(() => {
    mapRef.current = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(35.3595704, 127.55399),
      zoom: 7,
    });
  }, []);

  return (
    <Box w="100%" h="calc(100vh - 47px)" position="relative">
      <Box id="map" h="100%" />
    </Box>
  );
};

export default Map;
