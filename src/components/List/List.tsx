import {
  Box,
  Flex,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Checkbox,
} from "@chakra-ui/react";

const List = () => {
  return (
    <Box
      // w="1180px"
      w="calc(100vw - 90px)"
      h="calc(100vh - 250px)"
      border="1px solid #8C8C8C"
      borderRadius="4px"
      boxShadow="0px 4px0px rgba(0, 0, 0, 0.75)"
      p="16px"
      m="3px"
      gap="11px"
    >
      <Box borderBottom="1px solid rgba(0, 0, 0, 0.8)">
        <Flex justify="space-between" align="flex-end" w="130px">
          <Box fontWeight="700" fontSize="20px">
            검색 결과
          </Box>
          <Box fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.5)">
            Result
          </Box>
        </Flex>
      </Box>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th></Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                번호
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                매장명
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                매장코드
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                상태
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                타입
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                대표자
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                개업일
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                주소
              </Th>
              <Th fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
                상세보기
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox />
              </Td>
              <Td>1</Td>
              <Td>서울역점</Td>
              <Td>12839</Td>
              <Td>입점</Td>
              <Td>B</Td>
              <Td> 김양일 (010-3928-7028)</Td>
              <Td>2022-03-23</Td>
              <Td>서울특별시 용산구 동자동 366 트윈시티 1103호</Td>
              <Td>ㅁ</Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox />
              </Td>
              <Td>2</Td>
              <Td>서울역점</Td>
              <Td>12839</Td>
              <Td>입점</Td>
              <Td>B</Td>
              <Td> 김양일 (010-3928-7028)</Td>
              <Td>2022-03-23</Td>
              <Td>서울특별시 용산구 동자동 366 트윈시티 1103호</Td>
              <Td>ㅁ</Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox />
              </Td>
              <Td>3</Td>
              <Td>서울역점</Td>
              <Td>12839</Td>
              <Td>입점</Td>
              <Td>B</Td>
              <Td> 김양일 (010-3928-7028)</Td>
              <Td>2022-03-23</Td>
              <Td>서울특별시 용산구 동자동 366 트윈시티 1103호</Td>
              <Td>ㅁ</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;
