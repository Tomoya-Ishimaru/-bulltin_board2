import React, { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
// import { useSelectUser } from "../../../hooks/useSelectUser";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
//   const { onSelectUser, selectedUser } = useSelectUser();
  const onClickHome = useCallback(() => router.push("/"), []);
  const onClickPost = useCallback(
    () => router.push("/post"),
    []
  );
  const userName:any = useSelector<any>(state => state.user.name)
  const onClickProfile = useCallback(() => router.push("/profile"), []);

  return (
    <>

      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            一日掲示板
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
          flexGrow={2}
        >
          <Box pr={4}>
            <Link onClick={onClickPost}>投稿する</Link>
          </Box>
          <Box>
            <Link onClick={onClickProfile}>プロフィール設定</Link>
          </Box>
        </Flex>
        <Flex  
          align="right"
          // as="h1"
          fontSize="lg"
          fontWeight="bold"
          // display={{ base: "none", md: "flex" }}
          // flexGrow={2}
          >
          <Box>
            こんにちは {userName} さん
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickPost}
        onClickSetting={onClickProfile}
        onClickProfile={onClickProfile }
      />
    </>
  )
}
