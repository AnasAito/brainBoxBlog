import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const moment = require("moment-timezone");
const formatToPie = data => [
  { name: "completed", value: data.filter(x => x.completed == true).length },
  {
    name: "non Completed",
    value: data.filter(x => x.completed == false).length
  }
];

export default function PassedCard() {
  const { data } = useQuery({
    event: "user.placement.test.get.many",
    variables: {
      gt: { createdAt: `${moment().format("YYYY-MM-DD")} 23:59:00.310724+00` },
      lt: {
        createdAt: `${moment()
          .add("days", 1)
          .format("YYYY-MM-DD")} 23:59:00.310724+00`
      }
    }
  });

  const COLORS = ["#6c2bd9", "#ac94fa"]; // purple-700 , purple-400
  return (
    <div class=" hidden md:block overflow-hidden shadow rounded-lg bg-purple-200 mt-6 ">
      <div class=" py-5 ">
        <div className="px-4">
          <p className="text-balck font-bold ">
            {moment().format("MMMM D,YYYY")}{" "}
          </p>
        </div>
        {get(data, "userPlacementTests.data", []).length ? (
          <div className=" w-full flex h-36 px-0 mt-6 flex-row  ">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie
                  data={formatToPie(get(data, "userPlacementTests.data", []))}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                  }}
                  innerRadius={40}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {formatToPie(get(data, "userPlacementTests.data", [])).map(
                    (entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke={COLORS[index % COLORS.length]}
                      />
                    )
                  )}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex   flex-col  justify-center">
              <div>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5  text-gray-800">
                  <svg
                    class="-ml-1 mr-1.5 h-2 w-2 text-purple-700"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  <p className="text-xs text-gray-400"> Tests completed</p>
                </span>
                <p className="text-sm text-gray-700 font-bold px-3">
                  {get(
                    formatToPie(get(data, "userPlacementTests.data", []))[0],
                    "value",
                    ""
                  )}{" "}
                </p>
              </div>
              <div>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5  text-gray-800">
                  <svg
                    class="-ml-1 mr-1.5 h-2 w-2 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  <p className="text-xs text-gray-400"> Tests not completed</p>
                </span>
                <p className="text-sm text-gray-700  font-bold px-3">
                  {get(
                    formatToPie(get(data, "userPlacementTests.data", []))[1],
                    "value",
                    ""
                  )}{" "}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className=" w-full flex h-36 px-0 mt-6 flex-row justify-center items-center  ">
            <p className="">No tests passed today</p>
          </div>
        )}
        :
      </div>
    </div>
  );
}
