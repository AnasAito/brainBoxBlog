import React, { useState } from "react";
import { useMutation } from "services/Client";
import get from "lodash/get";
import View from "./view";
//import response from "./api";
//import response from "./api";
import { getReportNames, getSummaryItems, getTextChunks } from "./utils";
export default function Index({ instructions }) {
  // console.log(getSummaryItems(response, "Grammar Check"));

  const [text, setText] = useState("");
  const [corr, setCorr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);

  const [readingSummary, setReadingSummary] = useState([]);
  const [chunks, setChunks] = useState([]);
  const onfinish = async mutate => {
    // get response  with post call on POST /api/async/text
    // retrun response
    // get reportnames [reportname]
    setLoading(true);
    await mutate({ variables: { text } }).then(result => {
      //alert("data is here");
      setLoading(false);
      //  console.log(result);
      //console.log(result);
      const response = get(result, "data.scoreText");
      //console.log(JSON.stringify(response));

      let reportNames_ = getReportNames(response);
      let filterdRepportNames_ = reportNames_.filter(
        name => name === "Grammar Check"
      );
      // console.log(filterdRepportNames_);
      let cardData_ = filterdRepportNames_.map(repportName =>
        getSummaryItems(response, repportName)
      );
      //console.log(cardData_);
      const readabilitySummaries = getSummaryItems(response, "Readability");

      // console.log(readabilitySummaries);
      setReadingSummary(readabilitySummaries);

      setCardData(cardData_);

      // console.log("my words");
      //console.log(getIssueData(response));

      //console.log(getAllGrammaTagDetail(response));
      setChunks(getTextChunks(response, text));

      setCorr(true);
    });
  };
  //console.log(Text.includes("ground and"));

  const { mutate } = useMutation({ event: "score.writing" });
  return (
    <View
      loading={loading}
      setText={setText}
      corr={corr}
      instructions={instructions}
      onfinish={() => onfinish(mutate)}
      cardData={cardData}
      readingSummary={readingSummary}
      chunks={chunks}
    />
  );
}
