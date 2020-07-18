import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
export default function UserCard() {
  const { data } = useQuery({
    event: "user.chart.get.one",
    variables: {
      step: "1_month",
      chartType: "line",
      gt: { createdAt: "2019-07-07" }
    }
  });

  return (
    <div class=" hidden md:block overflow-hidden shadow rounded-lg bg-purple-200 ">
      <div class=" py-5 ">
        <div className="px-4">
          <p className="font-medium text-gray-700 ">Number of users </p>
          <p className="text-3xl text-white font-bold">4096</p>
        </div>
        <div className=" h-36  px-0 ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={get(data, "userChart.data", [])}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}
            >
              <defs>
                <linearGradient id="count" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ffff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                fill="url(#count)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
