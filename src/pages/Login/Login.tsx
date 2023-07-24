import { useState } from "react";
import LoginConfirmModal from "../../components/Modal/LoginConfirmModal";
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
  Link,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ReactComponent as PwIcon } from "../../assets/images/EyeInvisible.svg";
import Logo from "../../assets/images/logo.svg";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    pw: "",
  });
  const [isViewPw, setIsViewPw] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isCofirmAlertShow, setIsCofirmAlertShow] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    validation(name, value);
  };

  const validation = (name: string, value: string) => {
    const emailValidation = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,12}$/;

    if (name === "email") {
      if (!value || !emailValidation.test(value)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }

    if (name === "pw") {
      if (!value || !passwordValidation.test(value)) {
        setIsPwValid(true);
      } else {
        setIsPwValid(false);
      }
    }
  };

  const LoginFunc = () => {
    if (!isEmailValid && !isPwValid) {
      if (
        inputValues.email === "test@test.com" &&
        inputValues.pw === "Test123!@"
      ) {
        alert("로그인 성공");
      } else {
        setIsCofirmAlertShow(true);
      }
    } else {
      setIsCofirmAlertShow(true);
    }
  };
  return (
    <Box position="relative">
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
          <Flex h="162px" flexDir="column" justify="space-between">
            <FormControl isInvalid={isEmailValid}>
              <Input
                w="360px"
                h="40px"
                p="8px, 12px, 8px, 12px"
                gap="4px"
                borderRadius="4px"
                fontSize="16px"
                fontWeight="400"
                color="rgba(0, 0, 0, 0.5)"
                border="1px solid #D9D9D9"
                placeholder="이메일을 입력하세요"
                name="email"
                value={inputValues.email}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              {!isEmailValid ? null : (
                <FormErrorMessage fontSize="12px" fontWeight="400">
                  이메일을 다시 확인해주세요.
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={isPwValid}>
              <InputGroup>
                <label>
                  <Input
                    w="360px"
                    h="40px"
                    p="8px, 12px, 8px, 12px"
                    gap="4px"
                    borderRadius="4px"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(0, 0, 0, 0.5)"
                    border="1px solid #D9D9D9"
                    type={isViewPw ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요."
                    name="pw"
                    value={inputValues.pw}
                    onChange={(e) => {
                      handleInput(e);
                    }}
                  />
                  <InputRightElement
                    onClick={() => {
                      setIsViewPw((prev) => !prev);
                    }}
                  >
                    <PwIcon
                      fill={isViewPw ? "#268EFF" : "rgba(191, 191, 191, 1)"}
                    />
                  </InputRightElement>
                </label>
              </InputGroup>
              {!isPwValid ? null : (
                <FormErrorMessage fontSize="12px" fontWeight="400">
                  영소/대문자, 숫자포함. 필수 6~12자형식입니다.
                </FormErrorMessage>
              )}
            </FormControl>

            <Flex justify="space-between">
              <Checkbox
                defaultChecked
                fontSize="14px"
                fontWeight="400"
                color="rgba(0, 0, 0, 0.8)"
              >
                자동로그인
              </Checkbox>
              <Box
                color="secondary"
                fontSize="14px"
                fontWeight="400"
                //
              >
                <Link
                  href="/"
                  mr="3px"
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "primary",
                  }}
                >
                  아이디
                </Link>
                /
                <Link
                  href="/"
                  ml="3px"
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "primary",
                  }}
                >
                  비밀번호 찾기
                </Link>
              </Box>
            </Flex>
          </Flex>
          <Button
            variant="standardLarge"
            bg="primary"
            fontWeight="700"
            fontSize="16px"
            onClick={() => {
              LoginFunc();
            }}
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
              <Link
                href="/"
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "primary",
                }}
              >
                회원가입
              </Link>
            </Box>
          </Center>
        </Flex>
        <Box fontSize="14px" fontWeight="400" color="disabled">
          Copyright ©2023 Produced by OntheMap
        </Box>
      </Flex>
      <Box
        position="absolute"
        top="45%"
        left="49%"
        transform="translate(-45%, -49%)"
      >
        {isCofirmAlertShow && (
          <LoginConfirmModal setIsCofirmAlertShow={setIsCofirmAlertShow} />
        )}
      </Box>
    </Box>
  );
};

export default Login;
