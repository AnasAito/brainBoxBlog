import React from "react";
import { useQuery } from "services/Client";
import get from "lodash/get";
import moment from "moment";
export default function Dashboard() {
  const d = moment().subtract(30, "days").format();
  const { data: lastUsers } = useQuery({
    event: "user.get.count",
    variables: { gt: { createdAt: d }, where: { type: "student" } },
  });
  const { data: allUsers } = useQuery({
    event: "user.get.count",
    variables: { where: { type: "student" } },
  });
  const { data: allTests } = useQuery({
    event: "user.placement.test.count",
    variables: { where: { completed: true } },
  });
  const { data: lastTests } = useQuery({
    event: "user.placement.test.count",
    variables: { where: { completed: true }, gt: { createdAt: d } },
  });
  const { data: allTestsCreated } = useQuery({
    event: "test.count",
  });
  const { data: lastTestsCreated } = useQuery({
    event: "test.count",
    variables: { gt: { createdAt: d } },
  });
  console.log(allTestsCreated, lastTestsCreated);
  return (
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
      <div class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3">
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Candidates
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
                  {get(allUsers, "users.count", "...")}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from{" "}
                    {get(allUsers, "users.count", 0) -
                      get(lastUsers, "users.count", 0)}
                  </span>
                </div>
                <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Increased by</span>
                  {get(lastUsers, "users.count", 0)}
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Test Taken
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
                  {get(allTests, "userPlacementTests.count", "...")}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from{" "}
                    {get(allTests, "userPlacementTests.count", 0) -
                      get(lastTests, "userPlacementTests.count", 0)}
                  </span>
                </div>
                <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Increased by</span>
                  {get(lastTests, "userPlacementTests.count", 0)}
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Test Created
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
                  {get(allTestsCreated, "placementTests.count", "...")}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from{" "}
                    {get(allTestsCreated, "placementTests.count", 0) -
                      get(lastTestsCreated, "placementTests.count", 0)}
                  </span>
                </div>
                <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Increased by</span>
                  {get(lastTestsCreated, "placementTests.count", 0)}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
