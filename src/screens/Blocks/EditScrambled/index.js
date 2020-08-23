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
      <div className=" pb-5 px-2 bg-indigo-50">
        <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t  sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="first_name"
            className="block text-sm    leading-5 text-gray-700  font-black sm:mt-px sm:pt-2"
          >
            Title
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg  relative rounded-md shadow-sm sm:max-w-xs">
              <input
                id={title}
                autoComplete="off"
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                onChange={(event) => change(event, setTitle)}
                value={title}
              />
            </div>
          </div>
        </div>
      </div>
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
      <div className=" pb-5 px-2 ">
        <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            New Sentence
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
              <input
                id={"Add sent"}
                autoComplete="off"
                label="Add"
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                onChange={(event) => setAddSentence(event.target.value)}
                value={addSentence}
              />
            </div>
          </div>

          <span className="ml-3 inline-flex rounded-md ">
            <button
              onClick={handleAddSentence}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Add
            </button>
          </span>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              onClick={() => history.goBack()}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              onClick={() => updateFluency(mutate)}
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default withNotification(All);
