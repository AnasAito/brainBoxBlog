import get from "lodash/get";
const getReportNames = response => {
  //const summaries = response.Result.Summaries;
  const summaries = get(response, "Result.Summaries", []);
  return summaries.map(summary => get(summary, "ReportDisplayName", ""));
};
const getSummaryItems = (response, ReportDisplayName) => {
  const summaries = get(response, "Result.Summaries", []);
  const summaryByName = summaries.filter(
    summary => summary.ReportDisplayName === ReportDisplayName
  )[0];
  const summaryItems = get(summaryByName, "SummaryItems", []);
  // Text
  const newSummaryItems = summaryItems.map(summaryItem => ({
    text: get(summaryItem, "Text", "") || "",
    issuesCount: get(summaryItem, "NumIssues", "") || "",
    subItems: get(summaryItem, "SubItems", []) || [],
    isPositive: get(summaryItem, "IsPositive", "") || ""
  }));
  return newSummaryItems;
};

/*
    get issuedata should retun this data  structure in future
    {
      "gramma": []
     "otehrrepportname":[]
    }
  */

const getIssueData = response => {
  //const tags = response.Result.Tags;
  const tags = get(response, "Result.Tags", []);
  const grammaTags = tags
    .filter(tag => tag.report === "grammar")
    .map(tag => get(tag, "subcategory", ""));
  return grammaTags;
};

const getAllGrammaTagDetail = response => {
  //const tags = response.Result.Tags
  const tags = get(response, "Result.Tags", []);
  //console.log(tags);
  const grammaTags = tags.filter(tag => tag.report === "grammar");

  return grammaTags;
};
const getTextChunks = (response, text) => {
  var i;
  let list = [];

  let tags = response.Result.Tags.filter(tag => tag.report === "grammar");
  if (tags.length === 1) {
    console.log("tags with one");
    const { startPos, endPos, suggestions, subcategory, hint } = tags[0];
    return [
      {
        text: text.slice(0, startPos),
        isHigh: false
      },
      { text: subcategory, isHigh: true, hint: hint, suggestions: suggestions },
      { text: text.slice(endPos + 1), isHigh: false }
    ];
  } else {
    for (i = 0; i < tags.length - 1; i++) {
      if (i === 0) {
        let start = { text: text.slice(0, tags[0].startPos) };
        list.push(start);
      }

      let a = {
        text: tags[i].subcategory,
        isHigh: true,
        rapName: tags[i].categoryDisplayName,
        hint: tags[i].hint,
        suggestions: tags[i].suggestions
      };
      let b = {
        text: text.slice(tags[i].endPos + 1, tags[i + 1].startPos),
        isHigh: false
      };

      list.push(a, b);
      if (i === tags.length - 2) {
        let endh = {
          text: tags[i + 1].subcategory,
          isHigh: true,
          rapName: tags[i + 1].categoryDisplayName,
          hint: tags[i + 1].hint,
          suggestions: tags[i + 1].suggestions
        };
        let end = { text: text.slice(tags[i + 1].endPos + 1), isHigh: false };
        list.push(endh, end);
      }
    }
    console.log("tags + 2");
    return list;
  }
};

export {
  getReportNames,
  getSummaryItems,
  getIssueData,
  getAllGrammaTagDetail,
  getTextChunks
};
