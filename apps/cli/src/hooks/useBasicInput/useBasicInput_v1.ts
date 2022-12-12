import { useApp, useInput, Key } from "ink";
import { useState } from "react";

export const useBasicInput_v1 = (
  type?: "open" | "selection"
) => {
  type;
  const [answers, setAnswers] = useState<string[]>([]);
  const [inputUpdate, setInputUpdate] = useState<string[]>(
    []
  );
  const [usrKey, setUsrKey] = useState<Key>();
  const { exit } = useApp();

  useInput((input, key) => {
    setUsrKey(key);
    setInputUpdate([...inputUpdate, input]);
    if (key.return === true) {
      let input = inputUpdate.join("");
      setAnswers([...answers, input]);
      setInputUpdate([]);
    }
    if (key.escape === true) exit();
    if (key.delete === true)
      setInputUpdate(
        inputUpdate.slice(0, inputUpdate.length - 1)
      );
  });
  return { inputUpdate, answers, usrKey };
};
