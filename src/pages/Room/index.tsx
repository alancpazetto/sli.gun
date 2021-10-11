import { Box, Button, Flex, Heading, Icon, Input } from "@chakra-ui/react";
import { Database, db } from "../../models/Database";
import { Field, FieldProps, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";

import { Auth } from "../../models/Auth";
import { FaPaperPlane } from "react-icons/fa";
import { IGunChainReference } from "gun-util";
import Question from "../../components/Question";
import { useParams } from "react-router";

type FormValues = {
  question: string;
};

type QuestionType = {
  question: string;
};

type RecordQuestion = Record<string, QuestionType>;

const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [roomQuestions, setRoomQuestions] = useState<QuestionType[]>([]);
  const roomPath = useMemo(() => `rooms/${roomId}/questions`, [roomId]);

  useEffect(() => {
    db.get(roomPath)
      .map()
      .once((data) => {
        if (data) {
          const q = { question: data.question };

          setRoomQuestions([...roomQuestions, q]);
          console.log("once", data, roomQuestions);
        }
      });
    db.get(roomPath).on((data) => {
      console.log("on", data);
      // setRoomQuestions(data);
    });
  }, []);

  // useEffect(() => {
  //   room = Database.getInstance().get(`rooms/${ROOM_ID}`);
  //   Database.getInstance()
  //     .get(`rooms/${ROOM_ID}/1632446764088`)
  //     .on((data) => console.log("datadatadata", data.question));
  //   room.once((d: IGunChainReference) => {
  //     console.log("data once", d);
  //     // d.map((d2: IGunChainReference) => console.log(d2));
  //     // setRoomQuestions(d as RecordQuestion);
  //   });
  //   room.on((d: RecordQuestion) => {
  //     setRoomQuestions(d as RecordQuestion);
  //     console.log("data", d);
  //   });
  //   room.map((d: RecordQuestion) => {
  //     setRoomQuestions(d as RecordQuestion);
  //     console.log("map", d);
  //   });
  // }, []);

  const handleSubmitForm = (values: FormValues) => {
    try {
      const index = new Date().toISOString();
      db.get(roomPath).get(index).put({
        question: values.question,
      });
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
      }
    }
  };

  return (
    <Flex direction="column">
      <Box>
        <Heading>#room-{roomId}</Heading>
      </Box>

      <Box mt="30px">
        <Formik<FormValues>
          initialValues={{ question: "" }}
          onSubmit={handleSubmitForm}
        >
          <Form>
            <Flex flexDirection="column" alignItems="flex-end">
              <Field name="question">
                {({ field }: FieldProps<string>) => (
                  <Input
                    placeholder="Type your question"
                    as="textarea"
                    h="100px"
                    {...field}
                  />
                )}
              </Field>
              <Button
                mt="16px"
                colorScheme="teal"
                rightIcon={<Icon as={FaPaperPlane} />}
                type="submit"
              >
                Send
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Box>
      <Box mt="100px">
        {JSON.stringify(roomQuestions)}
        {/* {room.map((q) => (
          <p>{JSON.stringify(q)}</p>
        ))} */}
        <Question />
      </Box>
    </Flex>
  );
};

export default Room;
