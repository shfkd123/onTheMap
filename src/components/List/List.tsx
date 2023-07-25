import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
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
  Image,
  Center,
} from "@chakra-ui/react";
import { ThStoreData, ThBsnsData, StoreStatus } from "./ListData";
import DetailIcon from "../../assets/images/detailIcon.svg";
import { Data } from "../interfaces/Store";

const List = (props: any) => {
  const [bsnsData, setBsnsData] = useState<Data[]>([]);
  const [storeData, setStoreData] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  //

  useEffect(() => {
    const axiosFunc = async (url: string) => {
      const response = await axios.get<Data[]>(url);
      return response;
    };

    const getStoreData = async () => {
      const storeResponse = await axiosFunc("./data/store.json");
      const bsnsResponse = await axiosFunc("./data/bsns.json");
      setStoreData(storeResponse.data.list);
      setBsnsData(bsnsResponse.data);
    };

    getStoreData();
  }, []);

  useEffect(() => {
    if (storeData) {
      setTotalItem(storeData.length);
      const totalPage = Math.ceil(storeData.length / 6);
      setTotalPage(totalPage);
    }
  }, [storeData, bsnsData]);

  return (
    <Box
      // w="1180px"
      // h="604px"
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
        <Table variant="unstyled" size="lg" gap="4px">
          <Thead>
            <Box>
              <Tr>
                <Th></Th>
                {props.bsnsTab
                  ? ThBsnsData.map((data) => {
                      return (
                        <Th
                          key={data.id}
                          fontSize="16px"
                          fontWeight="700"
                          color="rgba(0, 0, 0, 0.5)"
                        >
                          {data.name}
                        </Th>
                      );
                    })
                  : ThStoreData.map((data) => {
                      return (
                        <Th
                          key={data.id}
                          fontSize="16px"
                          fontWeight="700"
                          color="rgba(0, 0, 0, 0.5)"
                        >
                          {data.name}
                        </Th>
                      );
                    })}
              </Tr>
            </Box>
          </Thead>
          {props.bsnsTab ? (
            <Tbody w="356px">
              {bsnsData?.slice(0, 6).map((data, index) => {
                return (
                  <Tr key={data.bsDisCode}>
                    <Box
                      borderRadius="12px"
                      border="1px solid #BFBFBF"
                      gap="10px"
                      m="3px"
                    >
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>{index + 1}</Td>
                      <Td>{data.bsDisName}</Td>
                      <Td>{data.bsDisCode}</Td>
                      <Td>후보상권</Td>
                      {/* <Td>{data.linkStore[0].storeName}</Td> */}
                      <Td>{data.bsDisName})</Td>
                      <Td>{data.addrNew}</Td>
                      <Td>
                        <Image src={DetailIcon} alt="detailShowIcon" w="16px" />
                      </Td>
                    </Box>
                  </Tr>
                );
              })}
            </Tbody>
          ) : (
            <Tbody w="356px">
              {storeData?.slice(0, 6).map((data, index) => {
                const matchedStatus = StoreStatus.find(
                  (status) => status.value === data.storeStatus
                );
                return (
                  <Tr key={data.storeCode}>
                    <Box
                      borderRadius="12px"
                      border="1px solid #BFBFBF"
                      gap="10px"
                      m="3px"
                    >
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>{index + 1}</Td>
                      <Td>{data.storeName}</Td>
                      <Td>{data.storeCode}</Td>
                      <Td>{matchedStatus ? matchedStatus.name : "기타"}</Td>
                      <Td>{data.storeType}</Td>
                      <Td>
                        {data.ownerName}({data.ownerPhone})
                      </Td>
                      <Td>{data.openDate.substr(0, 10)}</Td>
                      <Td>{data.New}</Td>
                      <Td>
                        <Image src={DetailIcon} alt="detailShowIcon" w="16px" />
                      </Td>
                    </Box>
                  </Tr>
                );
              })}
            </Tbody>
          )}
        </Table>
      </TableContainer>

      <Center p="10px">
        <Pagination
          totalItem={totalItem}
          totalPage={totalPage}
          limit={6}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Center>
    </Box>
  );
};

export default List;
