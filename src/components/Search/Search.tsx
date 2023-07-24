import { Box, Flex, Select, Input, Checkbox, Button } from "@chakra-ui/react";

const Search = () => {
  return (
    <Flex
      flexDir="column"
      justify="space-around"
      w="calc(100vw - 90px)"
      h="192px"
      border="1px solid #8C8C8C"
      borderRadius="4px"
      boxShadow="0px 4px0px rgba(0, 0, 0, 0.75)"
      p="16px"
      m="3px"
      gap="11px"
    >
      <Box borderBottom="1px solid rgba(0, 0, 0, 0.8)">
        <Flex justify="space-between" align="flex-end" w="81px">
          <Box fontWeight="700" fontSize="20px">
            매장
          </Box>
          <Box fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.5)">
            Store
          </Box>
        </Flex>
      </Box>

      <Flex justify="space-between" w="1091px" h="32px">
        <Flex w="561px" justify="space-between" align="center">
          <Box fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
            검색어
          </Box>
          <Select
            w="120px"
            h="32px"
            borderRadius="4px"
            border="1px solid #8C8C8C"
          >
            매장명
          </Select>
          <Input
            w="380px"
            h="32px"
            borderRadius="4px"
            p="5px 12px 5px 12px"
            gap="4px"
            border="1px solid #8C8C8C"
            placeholder="매장 명을 입력해주세요."
          />
        </Flex>
        <Flex w="478px" justify="space-between" align="center">
          <Box fontWeight="700" fontSize="16px" color="rgba(0, 0, 0, 0.5)">
            상태
          </Box>
          <Checkbox fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.8)">
            전체
          </Checkbox>
          <Checkbox fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.8)">
            입점
          </Checkbox>
          <Checkbox fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.8)">
            휴점
          </Checkbox>
          <Checkbox fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.8)">
            폐점
          </Checkbox>
          <Checkbox fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.8)">
            대기
          </Checkbox>
          <Checkbox fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.8)">
            기타
          </Checkbox>
        </Flex>
      </Flex>
      <Flex w="561px" justify="space-between" align="center">
        <Box fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
          개업일
        </Box>
        <Checkbox
          w="120px"
          fontSize="14px"
          fontWeight="500"
          color="rgba(0, 0, 0, 0.5)"
        >
          전체
        </Checkbox>
        <Checkbox w="380px">
          <Input
            type="date"
            w="152px"
            h="32px"
            borderRadius="4px"
            p="5px 12px 5px 12px"
            border="1px solid #8C8C8C"
            m="2px"
          />
          <Input
            type="date"
            w="152px"
            h="32px"
            borderRadius="4px"
            p="5px 12px 5px 12px"
            border="1px solid #8C8C8C"
            m="2px"
          />
        </Checkbox>
      </Flex>
      <Flex justify="flex-end">
        <Button variant="standardMedium" bg="primary" color="white">
          검색
        </Button>
      </Flex>
    </Flex>
  );
};

export default Search;
