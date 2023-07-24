import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import AlertClose from "../../assets/images/alertClose.svg";
import Close from "../../assets/images/close.svg";

const LoginConfirmModal = (props: any) => {
  return (
    <Flex
      flexDir="column"
      justify="space-evenly"
      border="1px solid #BFBFBF"
      boxShadow="0px 3px 6px -4px rgba(0, 0, 0, 0.25)"
      borderRadius="4px"
      w="408px"
      h="156px"
      bg="#fff"
    >
      <Flex justify="space-around" align="center">
        <Flex>
          <Image
            src={AlertClose}
            alt="AlertCloseIcon"
            w="24px"
            h="24px"
            color="rgba(0, 0, 0, 0.8)"
          />
          <Box
            w="304px"
            h="24px"
            p="0px 24px 0px 24px"
            fontSize="16px"
            fontWeight="700"
          >
            로그인 불가
          </Box>
        </Flex>
        <Image
          src={Close}
          alt="closeBtn"
          w="14px"
          h="14px"
          onClick={() => {
            props.setIsCofirmAlertShow(false);
          }}
        />
      </Flex>
      <Center>
        <Flex flexDir="column">
          <Box fontSize="14px" fontWeight="400" color="rgba(0, 0, 0, 0.8)">
            존재하지 않는 이메일입니다.
          </Box>
          <Box fontSize="14px" fontWeight="400" color="rgba(0, 0, 0, 0.8)">
            이메일을 확인하시거나 새로운 계정을 생성해주세요.
          </Box>
        </Flex>
      </Center>
      <Flex justify="flex-end" mr="50px">
        <Button
          variant="standardSmall"
          bg="primary"
          fontSize="14px"
          fontWeight="700"
          textAlign="center"
          onClick={() => {
            props.setIsCofirmAlertShow(false);
          }}
        >
          확인
        </Button>
      </Flex>
    </Flex>
  );
};

export default LoginConfirmModal;
