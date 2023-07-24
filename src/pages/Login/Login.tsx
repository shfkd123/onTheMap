import {
  Box,
  Flex,
  Image,
  Center,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      flexDirection="column"
      justify="space-between"
      align="center"
      minH="calc(100vh - 46px)"
    >
      <Box h="22px" />
      <Flex
        flexDirection="column"
        justify="space-between"
        align="center"
        w="360px"
        h="471px"
      >
        <Box gap="20px">
          <Center h="105px">
            <Image
              src="./images/logo_v1.png"
              alt="Dan Abramov"
              w="235px"
              gap="24px"
            />
          </Center>
        </Box>
        <Box>
          <Input
            w="360px"
            h="40px"
            p="8px, 12px, 8px, 12px"
            gap="4px"
            borderRadius="4px"
            color="#fff"
            marginBottom="22px"
            border="1px solid #D9D9D9"
            placeholder="아이디를 입력하세요."
            name="adminId"
          />
          <Input
            w="360px"
            h="40px"
            p="8px, 12px, 8px, 12px"
            gap="4px"
            borderRadius="4px"
            color="#fff"
            marginBottom="22px"
            border="1px solid #D9D9D9"
            type="password"
            placeholder="비밀번호를 입력하세요."
            name="adminPw"
          />

          <Flex justify="space-between">
            <Checkbox defaultChecked>자동로그인</Checkbox>
            <Box color="secondary">아이디 / 비밀번호 찾기</Box>
          </Flex>
        </Box>
        <Button variant="standardLarge" bg="primary">
          로그인
        </Button>
        <Flex w="360px" justify="space-between" align="center">
          <Box w="150px" h="0.5px" border="0.5px solid #BFBFBF" />
          <Box>또는</Box>
          <Box w="150px" h="0.5px" border="0.5px solid #BFBFBF" />
        </Flex>
        <Center gap="12px">
          <Box color="secondary">브랜드 계정이 없으신가요?</Box>
          <Box color="primary">회원가입</Box>
        </Center>
      </Flex>
      <Box color="disabled">Copyright ©2023 Produced by OntheMap</Box>
    </Flex>
  );
};

export default Login;
