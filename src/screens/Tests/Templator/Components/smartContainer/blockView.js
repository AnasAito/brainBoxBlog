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
  });
  const deleteBlock = async (mutate) => {
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

        await updateLayout({
          variables: {
            where: { id: activityId },
            data: {
              layout: prevLayout,
            },
          },
        });

        notification.success("Block successfully dettached to activity");
      } else {
        notification.success("Error");
      }
    }
  };
  const deleteStaticBlock = async () => {
    // create new layout

    const orderDel = get(activity, "activity.layout", {})[blockId].split(
      "-"
    )[0];
    const prevLayout = omit(get(activity, "activity.layout", {}), [blockId]);

    {
      /* const activityUpdated = await updateLayout({
      variables: {
        where: { id: activityId },
        data: {
          layout: prevLayout,
        },
      },
    });*/
    }
    setIsDelete(orderDel);
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
        <div className={` p-3 ${isFull ? "w-full" : "w-1/2"}`}>
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <span
              className={` inline-flex rounded-md shadow-sm ease-in-out duration-200 ${
                show
                  ? "transform translate-y-0 opacity-100 "
                  : "transform translate-y-full opacity-0"
              }`}
            >
              <button
                onClick={() => deleteBlock(mutate)}
                type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
              >
                <svg
                  class="-ml-0.5 mr-2 h-4 w-4 fill-current text-white"
                  viewBox="-40 0 427 427.00131"
                >
                  <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                  <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                  <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
                  <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                </svg>
                Delete block
              </button>
            </span>
            <div>{dynamicMapper[get(data, "block.type", "default")]}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(withNotification(BlockView));
