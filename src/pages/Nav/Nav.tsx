import { Outlet, useNavigate } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/images/logo_v1.svg";
import Map from "../../assets/images/DataMap.svg";
import Board from "../../assets/images/ERP Dashboard.svg";

const Nav = () => {
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
              onClick={() => {
                navigate("/map");
              }}
            >
              <Image w="14px" h="14px" src={Map} alt="mapTap" />{" "}
              <Box fontSize="20px" fontWeight="700">
                Map
              </Box>
            </Flex>
            <Flex
              justify="space-evenly"
              align="center"
              w="72px"
              h="46px"
              onClick={() => {
                navigate("/board");
              }}
            >
              <Image w="14px" h="14px" src={Board} alt="boardTap" />{" "}
              <Box fontSize="20px" fontWeight="700">
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
