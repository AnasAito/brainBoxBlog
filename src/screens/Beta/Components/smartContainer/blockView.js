import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
import dataDefault from "./data";
import Quiz from "../blocks/Quiz";
import Image from "../blocks/Image";
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

  console.log("block data");

  let quiz = get(data, "block.quiz", dataDefault);
  let image = get(data, "block.image.cloudinaryId", "");
  const mapper = { image: <Image src={image} />, quiz: <Quiz quiz={quiz} /> };
  return <>{type ? mapper[type] : <></>}</>;
}
