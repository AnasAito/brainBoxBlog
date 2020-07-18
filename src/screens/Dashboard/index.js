import React from "react";
import UserGraphs from "./sections/userGraphs";
import General from "./sections/general";
import GraphWrapper from "./components/graphWrapper";
import UserCard from "./components/userCard";
import PassedCard from "./components/passedCard";
import TestsCard from "./components/testsCard";
export default function Dashboard() {
  return (
    <div className="flex flex-row    ">
      <div className=" w-3/4 ">
        <General />
        <UserGraphs />
      </div>
      <div className=" w-1/4 ml-3  mt-11   ">
        <UserCard />
        <PassedCard />
        <TestsCard />
      </div>
    </div>
  );
}
