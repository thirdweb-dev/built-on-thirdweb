import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, Input, Select, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

interface IProps {
  page: number;
  setPage: (page: number) => void;
  projectsPerPage: number;
  totalItems: number;
}

const PaginationHelper: FC<IProps> = ({
  page,
  setPage,
  projectsPerPage,
  totalItems,
}) => {
  const [showInput, setShowInput] = useState(false);

  const noOfPages = Math.ceil(totalItems / projectsPerPage);
  const start = (page - 1) * projectsPerPage;
  const end = start + projectsPerPage;

  useEffect(() => {
    if (page > noOfPages) {
      setPage(noOfPages);
    }
  }, [page, noOfPages, setPage]);

  return (
    <Flex flexDir="column" alignItems="center" mt={10}>
      <Flex gap="2" color="gray.400" mt={10}>
        <Button
          textDecor="underline"
          cursor="pointer"
          variant="unstyled"
          isDisabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <Icon as={ChevronLeftIcon} w={6} h={6} />
        </Button>

        {Array.from(
          { length: noOfPages > 5 ? 5 : noOfPages },
          (_, i) => i + 1
        ).map((p) => (
          <Button
            key={p}
            textDecor="underline"
            variant="unstyled"
            onClick={() => {
              setPage(p);
            }}
            color={page === p ? "gray.700" : "gray.400"}
            cursor={page === p ? "default" : "pointer"}
            background={page === p ? "gray.100" : "none"}
          >
            {p}
          </Button>
        ))}

        {noOfPages > 5 && (
          <>
            {showInput ? (
              <Input
                w={16}
                value={page}
                onChange={(e) =>
                  setPage(
                    Number(e.target.value) > noOfPages
                      ? noOfPages
                      : Number(e.target.value)
                  )
                }
                onBlur={() => {
                  setShowInput(false);
                }}
                min={1}
                max={noOfPages}
              />
            ) : (
              <Button
                textDecor="underline"
                variant="unstyled"
                onClick={() => {
                  setShowInput(true);
                }}
              >
                ...
              </Button>
            )}
          </>
        )}

        {noOfPages > 5 && (
          <Button
            textDecor="underline"
            variant="unstyled"
            onClick={() => {
              setPage(noOfPages);
            }}
            color={page === noOfPages ? "gray.700" : "gray.400"}
            cursor={page === noOfPages ? "default" : "pointer"}
            background={page === noOfPages ? "gray.100" : "none"}
          >
            {noOfPages}
          </Button>
        )}

        <Button
          textDecor="underline"
          cursor="pointer"
          variant="unstyled"
          isDisabled={page === noOfPages}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <Icon as={ChevronRightIcon} w={6} h={6} />
        </Button>
      </Flex>

      <Flex w="full" align="center" justify="space-between" mt={4}>
        <Select
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
          w={20}
        >
          {Array.from({ length: noOfPages }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>

        <Text ml={2} color="gray.400">
          Results: {start + 1} - {end} of {totalItems}
        </Text>
      </Flex>
    </Flex>
  );
};

export { PaginationHelper };
