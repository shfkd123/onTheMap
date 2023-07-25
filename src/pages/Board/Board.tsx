import { useState } from "react";
import List from "../../components/List/List";
import Search from "../../components/Search/Search";
// import { SideBarData } from "./SideBarData";
import { ReactComponent as Store } from "../../assets/images/store.svg";
import { ReactComponent as CommercialDistrict } from "../../assets/images/store2.svg";
import { Box, Flex, Button } from "@chakra-ui/react";

const Board = () => {
  const [bsnsTab, setBsnsTab] = useState(false);

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
            <Box
              w="40px"
              h="58px"
              fontWeight={bsnsTab ? "400" : "700"}
              color={bsnsTab ? "rgba(0, 0, 0, 0.5)" : "black"}
              fontSize="16px"
              textAlign="center"
              m="18px"
              onClick={() => {
                setBsnsTab(false);
              }}
            >
              <Button
                w="40px"
                h="40px"
                p="0px"
                variant="circle"
                bg={bsnsTab ? "white" : "primary"}
                boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.5)"
                mb="5px"
              >
                <Store
                  width="24"
                  height="24"
                  fill={bsnsTab ? "black" : "white"}
                />
              </Button>
              매장
            </Box>
            <Box
              w="40px"
              h="58px"
              fontWeight={bsnsTab ? "700" : "400"}
              color={bsnsTab ? "black" : "rgba(0, 0, 0, 0.5)"}
              textAlign="center"
              m="18px"
              onClick={() => {
                setBsnsTab(true);
              }}
            >
              <Button
                w="40px"
                h="40px"
                p="0px"
                variant="circle"
                boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.5)"
                bg={bsnsTab ? "primary" : "white"}
                mb="5px"
              >
                <CommercialDistrict
                  width="24"
                  height="24"
                  fill={bsnsTab ? "white" : "black"}
                />
              </Button>
              상권
            </Box>
          </Box>
        </Flex>

        <Flex w="calc(100vw - 80px)" flexDir="column">
          <Search bsnsTab={bsnsTab} />
          <List bsnsTab={bsnsTab} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Board;
