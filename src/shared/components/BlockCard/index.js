import React from "react";
import get from "lodash/get";
import { useLocation, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "services/Client";

import withNotification from "services/Notification";
const Card = ({ payload, type, onEdit, onDelete, notification }) => {
  function useQueryURL() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryURL();
  const attachBlock = query.get("attach");
  let history = useHistory();
  const { data: activity } = useQuery({
    event: "activity.get.one",
    variables: { where: { id: attachBlock }, withSelect: true },
    skip: !attachBlock,
  });
  const submitBlock = async (createBlock, activityID) => {
    const result = await createBlock({
      variables: {
        data: {
          name: payload.title,
          type,
          activity: { id: activityID },
          [type]: { id: payload.id },
        },
      },
    });
    console.log(result);
    const blockId = get(result, "data.createBlock.id");
    if (blockId) {
      notification.success("Block successfully attached to activity");
      console.log("success");
      history.push(`/admin/tests/activities/edit/${activityID}`);
    } else {
      notification.success("Error");
      console.log("error");
    }
  };
  const { mutate: createBlock } = useMutation({
    event: "block.create",
    update: ({ data }) => {
      const newData = {
        activity: {
          ...activity.activity,
          blocks: [...activity.activity.blocks, data.createBlock],
          __typename: "Activity",
        },
      };
      return {
        event: "activity.get.one",
        variables: {
          where: { id: attachBlock },
          withSelect: true,
        },
        data: newData,
      };
    },
  });
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-row">
      <div className="bg-blue-50 rounded-l-lg  w-1/4" />

      <div className="flex flex-row justify-between  m-2 w-1/2 ">
        <p className=" text-md flex justify-center  font-semibold text-gray-900  flex flex-wrap">
          {payload.title}
        </p>
      </div>
      <div className="  flex flex-row justify-end w-1/4">
        <div className=" flex flex-col    ">
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={
              attachBlock
                ? () => {
                    submitBlock(createBlock, attachBlock);
                  }
                : () => {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className={`h-4 w-4 ${
                attachBlock
                  ? "cursor-pointer text-green-700 hover:text-green-500"
                  : "text-gray-400"
              } `}
              fill="currentColor"
            >
              <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
            </svg>
          </div>

          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={
              !attachBlock
                ? () => {
                    onEdit();
                  }
                : () => {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              // className="h-4 w-4 cursor-pointer text-indigo-600 hover:text-indigo-500"
              className={`h-4 w-4 cursor-pointer ${
                !attachBlock
                  ? "text-indigo-600 hover:text-indigo-500"
                  : "text-gray-400"
              } `}
              fill="currentColor"
            >
              <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
            </svg>
          </div>
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={
              !attachBlock
                ? () => {
                    onDelete();
                  }
                : () => {}
            }
          >
            <svg
              id="Capa_1"
              // className="h-4 w-4 cursor-pointer text-red-600 hover:text-red-500"
              className={`h-4 w-4 cursor-pointer ${
                !attachBlock
                  ? "text-red-600 hover:text-red-500"
                  : "text-gray-400"
              } `}
              viewBox="0 0 515.556 515.556"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z" />
              <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withNotification(Card);
