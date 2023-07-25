import { Box, Center, Flex, Image } from "@chakra-ui/react";
import Left from "../../assets/images/Left.svg";
import Right from "../../assets/images/Right.svg";
import Dot from "../../assets/images/Pagination-Item-Ellipsis.svg";

const Pagination = (props: any) => {
  const handlePageBtn = (value: number) => {
    props.setCurrentPage(props.currentPage + value);
  };

  return (
    <Box w="280.67px" h="23.48px">
      <Flex justify="space-between" align="center">
        <Box fontSize="14px" fontWeight="400">
          Total {props.totalItem} items
        </Box>

        <Box w="17.75px">
          <Image
            src={Left}
            alt="logoIcon"
            w="8.88px"
            onClick={() => {
              handlePageBtn(-1);
            }}
          />
        </Box>

        <Box w="14px" gap="7.4px">
          <Center
            fontSize="12px"
            fontWeight="400"
            color="rgba(0, 0, 0, 0.8)"
            textAlign="center"
          >
            1
          </Center>
        </Box>
        <Image src={Dot} alt="logoIcon" w="17.75px" h="17.75px" />
        <Box w="14px" gap="7.4px">
          <Center
            fontSize="12px"
            fontWeight="400"
            color="rgba(0, 0, 0, 0.8)"
            textAlign="center"
          >
            {props.currentPage - 1}
          </Center>
        </Box>

        <Box
          w="17.75px"
          h="18.48px"
          borderRadius="4px"
          border="1px solid #262626"
          p="1px 3px 1px 3px"
          gap="7.4px"
        >
          <Box fontSize="12px" fontWeight="700" textAlign="center">
            {props.currentPage}
          </Box>
        </Box>
        <Box w="14px" gap="7.4px">
          <Center
            fontSize="12px"
            fontWeight="400"
            color="rgba(0, 0, 0, 0.8)"
            textAlign="center"
          >
            {props.currentPage + 1}
          </Center>
        </Box>
        <Image src={Dot} alt="logoIcon" w="17.75px" h="17.75px" />
        <Box w="14px" gap="7.4px">
          <Box
            fontSize="12px"
            fontWeight="400"
            color="rgba(0, 0, 0, 0.8)"
            textAlign="center"
          >
            {props.totalPage}
          </Box>
        </Box>
        <Box w="17.75px">
          <Image
            src={Right}
            alt="logoIcon"
            w="8.88px"
            onClick={() => {
              handlePageBtn(1);
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Pagination;
