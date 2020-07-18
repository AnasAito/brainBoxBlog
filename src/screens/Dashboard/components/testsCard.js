import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
const moment = require("moment-timezone");
const orderTests = data => {
  let temp = data.map(
    x =>
      `${get(x, "usergroup.group.name", "")}/${get(
        x,
        "placementTest.title",
        ""
      )}`
  );
  return [...new Set(temp)];
};
//console.log(orderTests(get(data, "userPlacementTests.data")));
export default function TestsCard() {
  const { data } = useQuery({
    event: "user.placement.test.get.many",
    variables: {
      orderBy: { createdAt: "desc" },
      gt: { createdAt: `${moment().format("YYYY-MM-DD")} 23:59:00.310724+00` },
      lt: {
        createdAt: `${moment()
          .add("days", 1)
          .format("YYYY-MM-DD")} 23:59:00.310724+00`
      },
      withSelect: true
    }
  });

  const TestLi = ({ testName, groupName }) => (
    <a
      href="#"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="px-4 py-2 flex items-center ">
        <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div className=" break-words ">
            <span class="  text-sm leading-5 font-medium text-indigo-600   ">
              {testName}
            </span>
            <div class="mt-2 flex">
              <div class="flex items-center text-sm leading-5 text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span> By {groupName}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-5 flex-shrink-0">
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </a>
  );
  return (
    <div class=" hidden md:block overflow-hidden  mt-6 shadow rounded-lg bg-white ">
      <div class=" py-5 ">
        <div className="px-4 flex flex-row justify-between">
          <p className="text-balck font-bold ">
            Latest tests <span className="text-gray-500">(Today)</span>
          </p>

          <span className="text-balck font-bold text-purple-700  ">
            View more
          </span>
        </div>
        <div className="    ">
          {orderTests(get(data, "userPlacementTests.data", [])).length == 0 ? (
            <div className=" w-full flex h-36 px-0 mt-6 flex-row justify-center items-center  ">
              <p className="">No tests passed today</p>
            </div>
          ) : (
            <>
              {orderTests(
                get(data, "userPlacementTests.data", [])
              ).map((element, index) =>
                index <= 2 ? (
                  <TestLi
                    testName={element.split("/")[1]}
                    groupName={element.split("/")[0]}
                  />
                ) : (
                  <></>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
