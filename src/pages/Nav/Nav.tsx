import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/images/logo_v1.svg";
import { ReactComponent as Map } from "../../assets/images/DataMap.svg";
import { ReactComponent as Board } from "../../assets/images/ERP Dashboard.svg";
// import { useRecoilState } from "recoil";
// import { loginSuccess } from "../../recoilState";

const Nav = () => {
  //const [isloginSuccess, setIsloginSuccess] = useRecoilState(loginSuccess);
  const [isMapTab, setIsMapTab] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Box boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" zIndex="1">
        <Flex h="46px" justify="space-between" align="center">
          <Image
            src={Logo}
            alt="LogoIcon"
            w="106px"
            h="26px"
            onClick={() => {
              navigate("/");
            }}
          />

          <Flex w="346px" h="46px" justify="center" align="center">
            <Flex
              justify="space-evenly"
              align="center"
              w="72px"
              h="46px"
              borderBottom={isMapTab === "map" ? "2px solid black" : "none"}
              onClick={() => {
                setIsMapTab("map");
                navigate("/map");
              }}
            >
              <Map
                width="14"
                height="14"
                fill={isMapTab === "map" ? "black" : "rgba(0, 0, 0, 0.25)"}
              />
              <Box
                fontSize="20px"
                fontWeight="700"
                color={isMapTab === "map" ? "black" : "rgba(0, 0, 0, 0.25)"}
              >
                Map
              </Box>
            </Flex>
            <Flex
              justify="space-evenly"
              align="center"
              w="72px"
              h="46px"
              ml="20px"
              fill={isMapTab === "board" ? "black" : "rgba(0, 0, 0, 0.25)"}
              borderBottom={isMapTab === "board" ? "2px solid black" : "none"}
              onClick={() => {
                setIsMapTab("board");
                navigate("/board");
              }}
            >
              <Board
                width="14"
                height="14"
                fill={isMapTab === "map" ? "black" : "rgba(0, 0, 0, 0.25)"}
              />
              <Box
                fontSize="20px"
                fontWeight="700"
                color={isMapTab === "board" ? "black" : "rgba(0, 0, 0, 0.25)"}
              >
                Board
              </Box>
            </Flex>
          </Flex>
          <Box w="100px" />
        </Flex>
      </Box>
      <Outlet />
    </div>
  );
};

export default Nav;
