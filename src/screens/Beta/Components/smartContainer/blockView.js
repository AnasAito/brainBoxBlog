import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
import dataDefault from "./data";
import Quiz from "../blocks/Quiz";
import Image from "../blocks/Image";
import Text from "../blocks/Text";
export default function BlockView({ blockData }) {
  //console.log(blockData);
  let { id, type } = blockData;
  const { data } = useQuery({
    event: "block.get.one",
    variables: {
      where: { id },
      withSelect: true
    },
    skip: !id
  });

  let quiz = get(data, "block.quiz", dataDefault);
  let image = get(data, "block.image.cloudinaryId", "");
  let text = get(data, "block.text.content", "");
  const mapper = {
    image: <Image src={image} />,
    quiz: <Quiz quiz={quiz} />,
    text: <Text content={text} />
  };
  return <>{type ? mapper[type] : <></>}</>;
}
