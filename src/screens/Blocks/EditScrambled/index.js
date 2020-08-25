import React, { useState, useEffect } from "react";
import get from "lodash/get";

import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import withNotification from "services/Notification";

function All({ notification }) {
  const { id } = useParams();
  const history = useHistory();
  // from legacy code
  const [sentences, setSentences] = useState([]);
  const [addSentence, setAddSentence] = useState("");
  const [title, setTitle] = useState("");
  const change = (event, setStateCallback) => {
    setStateCallback(event.target.value);
  };
  const handleChange = (value, idx) => {
    setSentences((state) =>
      state.map((v, i) => {
        if (i === idx) {
          return value;
        } else {
          return v;
        }
      })
    );
  };
  const handleAddSentence = () => {
    setSentences((state) => [...state, addSentence]);
    setAddSentence("");
  };

  const updateFluency = async (mutate) => {
    const result = await mutate({
      variables: {
        where: { id },
        data: {
          title,
          correctSentences: sentences,
          // shuffledSentence
        },
      },
    });
    if (get(result, "data.updateScrambledSentence")) {
      notification.success("Scrambled sentences successfully saved");
    } else {
      notification.error("Error");
    }
  };
  const { data } = useQuery({
    event: "scrambled.sentence.get.one",
    variables: {
      where: { id },
    },
  });

  useEffect(() => {
    const correct = get(data, "scrambledsentence.correctSentences") || [];
    // const shuffled = get(data, "scrambledsentence.shuffledSentence") || "";
    const ttl = get(data, "scrambledsentence.title", "");
    // if (shuffled) {
    //   setChecked(false);
    // }
    setSentences(correct);
    // setShuffledSentence(shuffled);
    setTitle(ttl);
  }, [data]);
  const { mutate } = useMutation({ event: "scrambled.sentence.update" });
  // end legacy

  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Edit scrambled sentences block
        </h3>
      </div>

      {/*added*/}
      <div className=" bg-white flex w pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex-1 flex  ">
          <div className="w-5/12 ">
            <div className="max-w-lg  flex-col rounded-md shadow-sm sm:max-w-xs">
              <div class="mt-1 flex rounded-md shadow-sm">
                <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  Title
                </span>
                <input
                  id={title}
                  autoComplete="off"
                  className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => change(event, setTitle)}
                  value={title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row ">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition ease-in-out duration-150"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
          </span>
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              type="submit"
              onClick={() => updateFluency(mutate)}
            >
              Save change
            </button>
          </span>
        </div>
      </div>

      {/*add*/}
      <div className=" bg-white flex w pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className=" flex flex-1   ">
          <div className="  flex-col rounded-md shadow-sm sm:max-w-xs  ">
            <div class="mt-1 flex rounded-md shadow-sm w-96">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                New sentence
              </span>
              <input
                onChange={(event) => setAddSentence(event.target.value)}
                value={addSentence}
                id="username"
                class="flex-1 form-input block    w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row ">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              type="submit"
              onClick={handleAddSentence}
            >
              Add
            </button>
          </span>
        </div>
      </div>

      {/*end add */}

      <div>
        {sentences.map((v, i) => (
          <div className=" pb-5 px-2 ">
            <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                {`Sentence ${i + 1}`}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                  <input
                    id={title}
                    autoComplete="off"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                    onChange={(event) => handleChange(event.target.value, i)}
                    value={v}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default withNotification(All);
