import React, { useState } from "react";
import { useQuery, useMutation } from "services/Client";
import get from "lodash/get";
import omit from "lodash/omit";
import dataDefault from "./data";
import Quiz from "../blocks/Quiz";
import Image from "../blocks/Image";
import Text from "../blocks/Text";
import Audio from "../blocks/Audio";

import withNotification from "services/Notification";
import SmartContainer from "./index";
import Global from "services/Global";
const BlockView = ({ isFull, blockId, activityId, notification }) => {
  const [show, setShow] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [half, setHalf] = useState(!isFull);
  const [empty, setEmpty] = useState(false);
  const { data } = useQuery({
    event: "block.get.one",
    variables: {
      where: { id: blockId },
      withSelect: true,
    },
    skip: !blockId,
  });
  const { data: activity } = useQuery({
    event: "activity.get.one",

    variables: { where: { id: activityId }, withSelect: true },
    skip: !activityId,
  });

  const { mutate } = useMutation({ event: "block.delete" });
  const { mutate: updateLayout } = useMutation({
    event: "activity.update",
    update: ({ data }) => {
      return {
        event: "activity.get.one",
        variables: {
          where: { id: activityId },
        },
        data: data.updateActivity,
      };
    },
  });

  const updateWidth = async (mutate) => {
    let prevLayout = get(activity, "activity.layout", {});
    let position = prevLayout[blockId].split("-")[0];

    //console.log("pos", `${position}-${half ? "h" : "f"}`);

    const newLayout = await mutate({
      variables: {
        where: { id: activityId },
        data: {
          layout: {
            ...omit(get(activity, "activity.layout", {}), [blockId]),
            [blockId]: `${position}-${!half ? "h" : "f"}`,
          },
        },
      },
    });
    console.log("new layout ", newLayout.data.updateActivity);
    setHalf(!half);
  };
  const changeBlock = async (mutate) => {
    // create new layout
    console.log("value", get(activity, `layout`, {}));
    const orderDel = get(activity, "activity.layout", {})[blockId].split(
      "-"
    )[0];
    //  Global.set("deletedOrder", orderDel);
    const prevLayout = omit(get(activity, "activity.layout", {}), [blockId]);

    // delete block
    const result = await mutate({
      variables: {
        where: { id: blockId },
      },
    });

    const block = get(result, "data.deleteBlock.id", false);

    {
      if (block) {
        setIsDelete(orderDel);

        {
          /*  await updateLayout({
          variables: {
            where: { id: activityId },
            data: {
              layout: prevLayout,
            },
          },
        })*/
        }

        notification.success("Block successfully dettached from activity");
      } else {
        notification.success("Error");
      }
    }
  };

  const deleteBlock = async (mutate) => {
    // create new layout
    //  console.log("value", get(activity, `layout`, {}));

    const prevLayout = omit(get(activity, "activity.layout", {}), [blockId]);

    // delete block
    const result = await mutate({
      variables: {
        where: { id: blockId },
      },
    });

    const block = get(result, "data.deleteBlock.id", false);

    {
      if (block) {
        // setIsDelete(orderDel);

        await updateLayout({
          variables: {
            where: { id: activityId },
            data: {
              layout: prevLayout,
            },
          },
        });
        setEmpty(true);

        notification.success("Block successfully dettached from activity");
      } else {
        notification.success("Error");
      }
    }
  };

  let quiz = get(data, "block.quiz", dataDefault);
  let image = get(data, "block.image.cloudinaryId", "");
  let text = get(data, "block.text.content", "");
  let audio = get(data, "block.audio.path", "");
  const dynamicMapper = {
    image: <Image src={image} />,
    quiz: <Quiz quiz={quiz} />,
    text: <Text content={text} />,
    audio: <Audio src={audio} />,
    default: <Text content={"no data"} />,
  };

  return (
    <>
      {isDelete ? (
        <SmartContainer
          isDelete={true}
          blockToDelete={blockId}
          key={blockId}
          activityId={activityId}
          order={isDelete}
        />
      ) : (
        <>
          {empty ? (
            <></>
          ) : (
            <div className={` p-3 ${half ? "w-1/2" : "w-full"}`}>
              <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <span
                  class={`relative z-0 inline-flex shadow-sm rounded-md
            
            ease-in-out duration-200 ${
              show
                ? "transform translate-y-0 opacity-100 "
                : "transform translate-y-full opacity-0"
            }`}
                >
                  <button
                    type="button"
                    onClick={() => changeBlock(mutate)}
                    class="relative inline-flex items-center bg-blue-500 px-4 py-2 rounded-l-md border border-gray-300text-sm leading-5 font-medium text-white  focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Change block
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteBlock(mutate)}
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300  text-sm leading-5 font-medium text-white  focus:z-10 focus:outline-none focus:border-blue-300  bg-red-500 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => updateWidth(updateLayout)}
                    class="-ml-px relative inline-flex items-center bg-green-500 px-4 py-2 rounded-r-md border border-gray-300 text-sm leading-5 font-medium text-white focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Change width
                  </button>
                </span>

                <div>{dynamicMapper[get(data, "block.type", "default")]}</div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default React.memo(withNotification(BlockView));
