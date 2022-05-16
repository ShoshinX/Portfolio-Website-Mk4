import { Box, Flex, Link } from "@chakra-ui/react";
export interface CardContent {
  title: string;
  overview: string;
  technologies: string;
}
export const Card = (props: CardContent) => {
  const { title, overview, technologies } = props;
  return (
    <Box
      boxShadow="lg"
      borderRadius="lg"
      borderWidth="1px"
      w="20em"
      p={5}
      bg="white"
    >
      {title}
      <Box borderTop="1px" pt={5}>
        {overview}

        {technologies}
        <Flex>
          <Box
            borderRadius="3xl"
            borderWidth="1px"
            bg="#0a2540"
            color="#fff"
            p={2}
            m={2}
          >
            <Link>**More Info**</Link>
          </Box>
          <Box
            borderRadius="3xl"
            borderWidth="1px"
            bg="#0a2540"
            color="#fff"
            p={2}
            m={2}
          >
            <Link>**Github**</Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
