import React, { useState, useEffect } from "react";

import SearchBar from "shared/components/SearchBar/index";

import Carousel from "./Components/carousel";
import Previewer from "./Components/previewer";
import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import get from "lodash/get";
let template = { name: "block31", map: { 0: "block1", 1: "", 2: "" } };
let blocks = [{ id: "block1", type: "quiz" }];
// given inputs activity.id : "ckbuul42f000j01etawlwer4v"
export default function Editor({ id = "ckcbzzyai000v01cvbvbffcpp" }) {
  // init with template.name or first template on carousel if template = null
  // need template object
  // maper will be used to render block or add button
  // to do
  // - query activity template and blocks by activity.id  : done
  // -

  const { data } = useQuery({
    event: "activity.get.one",
    variables: {
      where: {
        id
      },
      withSelect: true
    },
    skip: !id
  });
  //default value if activity is empty

  const activity = get(data, "activity", {
    name: "",
    order: 0,
    template: "template1",
    type: "",
    layout: {},
    blocks: []
  });
  useEffect(() => {
    setOption(template.name);
  }, []);

  const [option, setOption] = useState("block31");
  // console.log(Object.values(JSON.parse(activity.layout)));
  console.log(Object.values(activity.layout));
  return (
    <div className="m-10">
      <div className="hidden sm:block pt-10">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-black">Tests</h2>

          <SearchBar />
        </div>

        <div class="border-t border-gray-100"></div>
      </div>
      <div className="pt-10  flex flex-row ">
        <div className="flex w-2/12 flex-col items-center justify-center  ">
          <Carousel setOption={setOption} option={option} />
        </div>
        <div className="flex w-10/12 ">
          <Previewer
            option={option}
            //  maper={Object.values(JSON.parse(activity.layout))}
            blocks={activity.blocks}
            maper={activity.layout}
            activityId={id}
          />
        </div>
      </div>
    </div>
  );
}
