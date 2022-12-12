import { useEffect, useState } from "react";

export const useCheck_v1 = (
  answers: string[],
  checkCallback: (input: string) => () => JSX.Element
) => {
  const [botCheck, setBotCheck] = useState(
    checkCallback("")
  );
  useEffect(() => {
    const answer = answers.slice(
      answers.length - 1,
      answers.length
    );
    if (!answer) return;
    if (!answer[0]) return;
    const bot = checkCallback(answer[0]);
    setBotCheck(bot);
  }, [answers]);
  return { botCheck };
};
