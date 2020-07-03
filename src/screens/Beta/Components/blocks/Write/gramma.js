import React from "react";
const Card = ({ text, count, more }) => {
  console.log(more);
  return (
    <div class="flex flex-col justify-between  bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <div class="flex items-center">
          <div class=" w-0 flex-1">
            <dl>
              <dt class=" flex flex-wrap text-sm leading-5 font-medium text-gray-500 ">
                {text}
              </dt>
              <dd class="flex items-baseline">
                <div class="text-2xl leading-8 font-semibold text-gray-900">
                  {more.map(item => (
                    <span class=" ml-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-indigo-100 text-indigo-800">
                      <svg
                        class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {item.Text}
                    </span>
                  ))}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function GrammaSummary({ reportName, cardData }) {
  return (
    <div>
      <span class="inline-flex items-center px-3 py-0.5 rounded-full  font-medium shadow-md  text-white bg-blue-400">
        <h3 class="text-lg leading-6 font-medium ">Grammar Check</h3>
      </span>

      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((carddata, index) => (
          <Card
            key={carddata.text}
            text={carddata.text}
            count={carddata.issuesCount}
            more={carddata.subItems}
          />
        ))}
      </div>
    </div>
  );
}
