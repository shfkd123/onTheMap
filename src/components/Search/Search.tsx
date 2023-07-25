// import { useState } from "react";
import { Box, Flex, Select, Input, Checkbox, Button } from "@chakra-ui/react";
import { SearchStoreWorld, SearchBsnsWorld, CheckBoxValue } from "./SearchData";

const Search = (props: any) => {
  //const [checkedList, setCheckedList] = useState([]);

  //const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const { checked, name } = e.target;
  // if (checked) {
  //   setCheckedList((prev: any) => [...prev, name]);
  // } else {
  //   setCheckedList((prev: any) => prev.filter((item: any) => item !== name));
  // }
  //};

  return (
    <Flex
      flexDir="column"
      justify="space-between"
      w="calc(100vw - 90px)"
      // w="1180px"
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
            {props.bsnsTab ? "상권" : "매장"}
          </Box>
          <Box fontWeight="400" fontSize="16px" color="rgba(0, 0, 0, 0.5)">
            {props.bsnsTab ? "Bsns" : "Store"}
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
            {props.bsnsTab
              ? SearchBsnsWorld.map((data) => {
                  return (
                    <option key={data.id} value={data.value}>
                      {data.name}
                    </option>
                  );
                })
              : SearchStoreWorld.map((data) => {
                  return (
                    <option key={data.id} value={data.value}>
                      {data.name}
                    </option>
                  );
                })}
          </Select>
          <Input
            w="380px"
            h="32px"
            borderRadius="4px"
            p="5px 12px 5px 12px"
            gap="4px"
            border="1px solid #8C8C8C"
            placeholder={
              props.bsnsTab
                ? "상권명을 입력해주세요."
                : "매장 명을 입력해주세요."
            }
          />
        </Flex>

        {!props.bsnsTab && (
          <Flex w="478px" justify="space-between" align="center">
            <Box fontWeight="700" fontSize="16px" color="rgba(0, 0, 0, 0.5)">
              상태
            </Box>
            {CheckBoxValue.map((data) => {
              return (
                <Checkbox
                  key={data.id}
                  fontWeight="400"
                  fontSize="16px"
                  color="rgba(0, 0, 0, 0.8)"
                  // onChange={handleChecked}
                  borderRadius="2px"
                  borderColor="rgba(0, 0, 0, 0.5)"
                  // _checked={{ control: { bg: "black" } }}
                >
                  {data.title}
                </Checkbox>
              );
            })}
          </Flex>
        )}
      </Flex>

      {!props.bsnsTab && (
        <Flex w="561px" justify="space-between" align="center">
          <Box fontSize="16px" fontWeight="700" color="rgba(0, 0, 0, 0.5)">
            개업일
          </Box>
          <Checkbox w="120px" fontSize="14px" fontWeight="500">
            전체
          </Checkbox>
          <Checkbox></Checkbox>
          <Input
            type="date"
            placeholder="From"
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
        </Flex>
      )}

      <Flex justify="flex-end">
        <Button variant="standardMedium" bg="primary" color="white">
          검색
        </Button>
      </Flex>
    </Flex>
  );
};

export default Search;
