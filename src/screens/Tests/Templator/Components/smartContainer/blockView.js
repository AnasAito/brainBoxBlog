import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
import dataDefault from "./data";
import Quiz from "../blocks/Quiz";
import Image from "../blocks/Image";
import Text from "../blocks/Text";
export default function BlockView({ blockId }) {
  const { data } = useQuery({
    event: "block.get.one",
    variables: {
      where: { id: blockId },
      withSelect: true,
    },
    skip: !blockId,
  });
  console.log("blockData", data);
  let quiz = get(data, "block.quiz", dataDefault);
  let image = get(data, "block.image.cloudinaryId", "");
  let text = get(data, "block.text.content", "");
  const mapper = {
    image: <Image src={image} />,
    quiz: <Quiz quiz={quiz} />,
    text: <Text content={text} />,
    default: <Text content={"no data"} />,
  };
  return <> {mapper[get(data, "block.type", "default")]}</>;
}
