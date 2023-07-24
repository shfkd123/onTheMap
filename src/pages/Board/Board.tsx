import List from "../../components/List/List";
import Search from "../../components/Search/Search";
import { SideBarData } from "./SideBarData";
import { ReactComponent as Store } from "../../assets/images/store.svg";
import { ReactComponent as CommercialDistrict } from "../../assets/images/store2.svg";
import { Box, Flex, Button, Image } from "@chakra-ui/react";

const Board = () => {
  return (
    <Box>
      <Flex>
        <Flex
          w="80px"
          h="calc(100vh - 52px)"
          m="3px"
          borderRadius="4px"
          flexDir="column"
          justify="flex-start"
          // justify="space-around"
          border="1px solid #8C8C8C"
          boxShadow="0px 4px0px rgba(0, 0, 0, 0.75)"
        >
          {/* <Box h="134px">
            {SideBarData.map((data) => {
              return (
                <Box
                  w="40px"
                  h="58px"
                  key={data.id}
                  textAlign="center"
                  m="18px"
                >
                  <Button w="40px" h="40px" variant="circle" bg="primary"> 
          {/* <Image w="48px" h="48px" src={data.svg} alt={data.name} /> */}
          {/* {data.svg} */}
          {/* </Button>
                  {data.name}
                </Box>
              );
            })} 
          </Box>*/}
          <Box h="134px">
            <Box w="40px" h="58px" textAlign="center" m="18px">
              <Button w="40px" h="40px" variant="circle" bg="primary">
                <Store width="48" height="48" fill="#f5b914" />
              </Button>
              매장
            </Box>
            <Box w="40px" h="58px" textAlign="center" m="18px">
              <Button w="40px" h="40px" variant="circle" bg="primary">
                <CommercialDistrict width="48" height="48" fill="#f5b914" />
              </Button>
              상권
            </Box>
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
