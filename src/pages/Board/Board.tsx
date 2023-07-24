import List from "../../components/List/List";
import Search from "../../components/Search/Search";
import { SideBarData } from "./SideBarData";
import { Box, Flex, Button } from "@chakra-ui/react";

const Board = () => {
  return (
    <Box>
      <Flex>
        <Flex
          w="80px"
          h="calc(100vh - 52px)"
          m="3px"
          borderRadius="4px"
          justify="space-around"
          border="1px solid #8C8C8C"
          boxShadow="0px 4px0px rgba(0, 0, 0, 0.75)"
        >
          <Box h="134px">
            {SideBarData.map((data) => {
              return (
                <Box
                  w="40px"
                  h="58px"
                  key={data.id}
                  textAlign="center"
                  m="18px"
                >
                  <Button variant="circle" bg="primary">
                    {data.name}
                  </Button>
                  {data.name}
                </Box>
              );
            })}
          </Box>
        </Flex>

        <Flex w="calc(100vw - 80px)" flexDir="column">
          <Search />
          <List />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Board;
