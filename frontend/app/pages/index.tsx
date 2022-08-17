import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import PostRow from "../components/molecules/PostRow "
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  console.log("home");
  const [userInfo, setUserInfo] = useState([] as any);
  useEffect(() => {
    const fetchGet = async () => {
      const ENDPOINT = `/api/query`;
      const result = await axios.get(ENDPOINT)
      setUserInfo(result.data)
    }
    fetchGet();
  }, [])

  return (
    <>
      <Center mt="16px">
        <Box p="5" width="90%" borderWidth="1px">
          {userInfo.map((user: { id: React.Key | null | undefined; content: any; user_name: any; }, index: any) => {
            return (
              <PostRow key={user.id} comment={user.content} userName={user.user_name} />
            )
          })}
        </Box>
      </Center>
    </>
  )
}