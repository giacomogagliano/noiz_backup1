import rLine from "readline";

const cmd = rLine.createInterface(
  process.stdin,
  process.stdout
);

cmd.question(`Question?? `, answer => {
  if (answer === "yes") console.log("you answered yes");
  if (answer === "no") console.log("you answered no");
  cmd.close();
});

cmd.on("close", () => console.log("Goodbye mfucker"));

export const makeQuestion_v1 = "makeQuestion_v1";
