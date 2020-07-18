import React, { useState } from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
import GraphWrapper from "../components/graphWrapper";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";

const formatDate = date =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
export default function UserGraphs() {
  const [sdate, setSdate] = useState(new Date(2018, 10, 24));
  const [edate, setEdate] = useState(new Date());

  const [type, setType] = useState("line");
  const { data } = useQuery({
    event: "user.chart.get.one",
    variables: {
      step: "1_month",
      chartType: type,
      gt: { createdAt: formatDate(sdate) },
      lt: { createdAt: formatDate(edate) }
    }
  });
  //console.log(get(data, "userChart.data", []));
  return (
    <GraphWrapper>
      {type === "line" ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={get(data, "userChart.data", [])}
            margin={{ top: 0, right: 0, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="count" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#count)"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <BarChart
          width={730}
          height={250}
          data={get(data, "userChart.data", [])}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      )}
    </GraphWrapper>
  );
}
