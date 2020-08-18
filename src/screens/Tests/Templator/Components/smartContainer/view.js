import React, { useState } from "react";
import AddButton from "../addButoon";
import { useQuery, useMutation } from "services/Client";
import get from "lodash/get";
export default function View({
  order,
  history,
  activityId,
  blockToDelete,
  isDelete,
}) {
  const [isHalf, setIsHalf] = useState(true);
  const { data: activity } = useQuery({
    event: "activity.get.one",
    variables: { where: { id: activityId }, withSelect: true },
    skip: !activityId,
  });

  const submitStaticBlock = async (activityID, blockType, position) => {
    // updat layout
    const prevLayout = get(activity, "activity.layout", {});
    console.log("layout");
    console.log(prevLayout);

    const activityUpdated = await updateLayout({
      variables: {
        where: { id: activityID },
        data: {
          layout: {
            ...prevLayout,
            [blockType]: position,
          },
        },
      },
    });
  };
  // add m template
  const { mutate: updateLayout } = useMutation({
    event: "activity.update",
  });
  return (
    <>
      <div className={`flex p-3  rounded-lg ${isHalf ? "w-1/2" : "w-full"} `}>
        <div class=" px-1 py-2 rounded-lg w-full">
          <div class="border-gray-200 rounded-lg   h-96 border-2 border-dashed ">
            <div className=" w-full   bg-white   ">
              <button
                className={`py-4 w-1/2 ${isHalf ? "" : "bg-blue-100"}`}
                onClick={() => setIsHalf(false)}
              >
                row
              </button>
              <button
                className={`py-4 w-1/2 ${!isHalf ? "" : "bg-blue-100"}`}
                onClick={() => setIsHalf(true)}
              >
                col
              </button>
            </div>
            <div className="  flex  h-10/12 items-center justify-center   ">
              <AddButton
                blockToDelete={blockToDelete}
                isDelete={isDelete}
                history={history}
                activityId={activityId}
                position={`${order}-${isHalf ? "h" : "f"}`}
                submitStaticBlock={submitStaticBlock}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
