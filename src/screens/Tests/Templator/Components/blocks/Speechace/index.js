import React, { useState, useEffect } from "react";
import { useMutation } from "services/Client";
import withStore from "services/Store";
import get from "lodash/get";
import View from "./view";

import AudioRecorder from "audio-recorder-polyfill";

let recorder;

function Speech({ store, sentences, onAnswer, answers }) {
  const [index, setindex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bar, setBar] = useState([]);
  const [state, setState] = useState({
    record: false,
    recordedBlob: null,
    audio_file: null,
    attempts: null,
    score: null
  });

  const startRecord = () => {
    setState(state => ({ ...state, record: true, score: null }));
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        if (!window.MediaRecorder) {
          recorder = new AudioRecorder(stream);
        } else {
          recorder = new MediaRecorder(stream);
        } // Set record to <audio> when recording will be finished
        recorder.addEventListener("dataavailable", e => {
          setState(state => ({
            ...state,
            recordedBlob: URL.createObjectURL(e.data),
            audio_file: e.data
          }));
        });

        // Start recording
        recorder.start();
      })
      .catch(err => {
        setState(state => ({ ...state, record: false }));
        console.log(err);
        // this.props.notification.error(err.message);
        return;
      });
  };
  const stopRecord = () => {
    recorder.stop();
    recorder.stream.getTracks().forEach(i => i.stop());
    setState(state => ({ ...state, recordedBlob: null, record: false }));
  };

  const scoreText = text => {
    // make list word
    const attempt = Object.keys(get(answers, `${index}`, {})).length;
    const scoreToParse = get(answers, `${index}.${attempt}.score`, "{}");
    const wordScore = get(
      JSON.parse(scoreToParse),
      "text_score.word_score_list",
      []
    );

    let listText = text.split(" ");

    return listText.map(word => {
      if (
        wordScore.filter(wordresp => {
          return wordresp.word.replace(/'/g, "’") === word;
        }).length === 0
      ) {
        return { word: word, color: "text-black" };
      } else {
        let data = wordScore.filter(
          wordresp => wordresp.word.replace(/'/g, "’") === word
        );

        return {
          word: data[0].word,
          color:
            data[0].quality_score < 33
              ? "text-red-600"
              : data[0].quality_score < 66
              ? "text-yellow-300"
              : "text-green-400"
        };
      }
    });
  };
  const { mutate } = useMutation({ event: "file.upload.one" });
  const { mutate: scoreFluency } = useMutation({ event: "score.fluency" });

  useEffect(() => {
    const file = state.audio_file;
    if (!file) return;
    setLoading(true);
    async function fetchData() {
      const result = await mutate({
        variables: {
          file
        }
      });
      const audio_url = get(result, "data.singleUpload");
      const fluencyResult = await scoreFluency({
        variables: { text: sentences[index], url: audio_url }
      });

      const speechScore = get(fluencyResult, "data.scoreFluencyTool");
      setState(state => ({ ...state, score: speechScore }));
      onAnswer({
        attempt: state.attempts[index] + 1,
        idx: index,
        sentence: sentences[index],
        recordPath: audio_url,
        score: speechScore
      });
      store.set("uploading", false);
      return result;
    }
    fetchData().then(() => setLoading(false));
  }, [scoreFluency, mutate, state.audio_file]);

  useEffect(() => {
    const currentAttempt = Object.keys(get(answers, `${index}`, {})).length;
    setState(state => ({
      ...state,
      attempts: { ...state.attempts, [index]: currentAttempt }
    }));
  }, [answers, index]);

  useEffect(() => {
    const values = Object.values(get(answers, `${index}`, {}));
    if (values === {}) {
      return;
    }
    const bar = values.map(value => {
      const score = JSON.parse(value.score);
      if (score.status === "success") {
        return score.text_score.quality_score;
      } else return "error";
    });

    setBar(bar);
  }, [index, answers]);

  if (!sentences || (sentences && sentences.length === 0)) {
    return "";
  }
  console.log(state.attempts);
  return (
    <View
      words={scoreText(sentences[index])}
      sentence={sentences[index]}
      setIndex={setindex}
      index={index}
      startRecord={startRecord}
      stopRecord={stopRecord}
      recordingData={state}
      len={sentences.length}
      loading={loading}
      bar={bar}
    />
  );
}

export default withStore(Speech);
