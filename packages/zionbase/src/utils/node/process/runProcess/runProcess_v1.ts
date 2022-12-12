export type Options = {
  successMess?: string;
  showTrace?: boolean;
  args?: any[];
};

export type runProcess_v1 = <T>(
  process: () => Promise<T>,
  options?: Options
) => void;

export const runProcess_v1: runProcess_v1 = function <T>(
  process: () => Promise<T>,
  options: Options = { successMess: "Success" }
) {
  const main = async (
    successMess: string = "Process terminated successully"
  ): Promise<{ end: 0 | 1; successMess: string }> => {
    await process();
    return { end: 0, successMess };
  };

  main(options?.successMess)
    .then(process => {
      if (process.end === 0) console.log("\n\n" + process.successMess + "\n\n");
    })
    .catch(e => console.log(options?.showTrace ? e : e.message));
};
