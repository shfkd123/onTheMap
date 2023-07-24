import {
  Box,
  Flex,
  Image,
  Center,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import PwIcon from "../../assets/images/EyeInvisible.svg";
import Logo from "../../assets/images/logo.svg";

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
            <Image src={Logo} alt="logoIcon" w="235px" marginBottom="22px" />
          </Center>
        </Box>
        <Box>
          <Input
            w="360px"
            h="40px"
            p="8px, 12px, 8px, 12px"
            gap="4px"
            borderRadius="4px"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0, 0, 0, 0.5)"
            marginBottom="22px"
            border="1px solid #D9D9D9"
            placeholder="이메일을 입력하세요"
            name="adminId"
          />
          <InputGroup>
            <Input
              w="360px"
              h="40px"
              p="8px, 12px, 8px, 12px"
              gap="4px"
              borderRadius="4px"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0, 0, 0, 0.5)"
              marginBottom="22px"
              border="1px solid #D9D9D9"
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="adminPw"
            />
            <InputRightElement>
              <Image src={PwIcon} alt="pwdIcon" />
            </InputRightElement>
          </InputGroup>

          <Flex justify="space-between">
            <Checkbox
              defaultChecked
              fontSize="14px"
              fontWeight="400"
              color="rgba(0, 0, 0, 0.8)"
            >
              자동로그인
            </Checkbox>
            <Box color="secondary" fontSize="14px" fontWeight="400">
              아이디 / 비밀번호 찾기
            </Box>
          </Flex>
        </Box>
        <Button
          variant="standardLarge"
          bg="primary"
          fontWeight="700"
          fontSize="16px"
        >
          로그인
        </Button>
        <Flex w="360px" justify="space-between" align="center">
          <Box w="150px" h="0.5px" border="0.5px solid #BFBFBF" />
          <Box fontSize="14px" fontWeight="400" color="rgba(0, 0, 0, 0.5)">
            또는
          </Box>
          <Box w="150px" h="0.5px" border="0.5px solid #BFBFBF" />
        </Flex>
        <Center gap="12px">
          <Box fontSize="14px" fontWeight="400" color="secondary">
            브랜드 계정이 없으신가요?
          </Box>
          <Box fontSize="14px" fontWeight="400" color="primary">
            회원가입
          </Box>
        </Center>
      </Flex>
      <Box fontSize="14px" fontWeight="400" color="disabled">
        Copyright ©2023 Produced by OntheMap
      </Box>
    </Flex>
  );
};

export default Login;
