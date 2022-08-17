import { Avatar, AvatarBadge, Stack, Box, Text, Divider } from "@chakra-ui/react";

export default function PostRow(props: { comment: any; userName: any; }) {
    const { comment, userName } = props;
    return (
        <Box p="4" mb="4" width="100%" borderWidth="1px" >
            <Stack direction='row' spacing={4} alignItems='center'>
                <Avatar>
                    {/* <AvatarBadge boxSize='1.25em' bg='green.500' /> */}
                </Avatar>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    {userName}
                </Text>
            </Stack>
            <Divider mt={2}/>
            <Text
                ml={2}
                mt={2}
                // textTransform="uppercase"
                fontSize="xl"
                fontWeight="bold"
                color="pink.800"
            >
                {comment}
            </Text>

        </Box>

    )

}