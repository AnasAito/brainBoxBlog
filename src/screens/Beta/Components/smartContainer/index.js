import React, { useState, useEffect } from "react";
import View from "./view";
export default function Index({ attachInit, block }) {
  const [attach, setAttach] = useState(false);
  useEffect(() => {
    setAttach(attachInit);
  }, []);
  console.log("block to be attached ");
  console.log(block);
  return (
    <View
      attach={attach}
      setAttach={setAttach}
      blockData={attach ? block[0] : ""}
    />
  );
}
