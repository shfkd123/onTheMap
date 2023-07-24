import { Outlet, useNavigate } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" zIndex="1">
        <Flex h="46px" justify="space-between" align="center">
          <Image
            src="./images/logo.png"
            alt="Dan Abramov"
            w="106px"
            h="26px"
            onClick={() => {
              navigate("/");
            }}
          />
          <Flex>
            <Box
              onClick={() => {
                navigate("/map");
              }}
            >
              @ Map
            </Box>
            <Box
              onClick={() => {
                navigate("/board");
              }}
            >
              @ Board
            </Box>
          </Flex>
          <Box w="100px" />
        </Flex>
      </Box>
      <Outlet />
    </div>
  );
};

export default Nav;
