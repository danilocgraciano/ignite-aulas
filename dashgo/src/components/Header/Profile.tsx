import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Danilo Graciano</Text>
                <Text color="gray.300" fontSize="small">
                    danilocgraciano@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Danilo Graciano" src="https://github.com/danilocgraciano.png" />
        </Flex>
    );
}