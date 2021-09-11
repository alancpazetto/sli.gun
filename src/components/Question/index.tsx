import { Avatar, Box, Button, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";

const QuestionAvatar = () => (
  <Grid
    gridTemplateColumns="40px 1fr"
    gridTemplateRows="1fr 1fr"
    gridTemplateAreas="'avatar name' 'avatar time'"
  >
    <Avatar gridArea="avatar" name="Alan Pazetto" size="sm" />
    <Text gridArea="name" lineHeight="1.2">
      Alan Pazetto
    </Text>
    <Text fontSize="sm" lineHeight="1" gridArea="time">
      12 minutes ago
    </Text>
  </Grid>
);

const Question = () => (
  <Flex
    flexDirection="column"
    borderRadius={6}
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    p="16px"
    backgroundColor="rgba(0, 0, 0, 0.01)"
    border="solid 1px rgba(0, 0, 0, 0.10)"
    transition="all 180ms ease-in-out"
    _hover={{
      backgroundColor: "rgba(0, 0, 0, 0.03)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    }}
  >
    <Flex justifyContent="space-between">
      <QuestionAvatar />
      <Box>
        <Button
          size="xs"
          rightIcon={<Icon as={FaThumbsUp} />}
          variant="outline"
        >
          2k
        </Button>
      </Box>
    </Flex>
    <Box mt="20px">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum
        fugit libero natus ipsa qui ducimus rem maxime architecto asperiores
        eaque illum ea eos reiciendis corrupti, similique impedit. Odio,
        pariatur.
      </Text>
    </Box>
  </Flex>
);

export default Question;
