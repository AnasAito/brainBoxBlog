import React, { useState } from "react";
import View from "./view";
export default function Index() {
  const [attach, setAttach] = useState(false);
  return <View attach={attach} setAttach={setAttach} />;
}
