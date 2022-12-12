import {} from "readline";
export const Step1_v1 = "Step1_v1";

enum Type1 {
  folder = "folder",
  file = "file",
}

for (let type in Type1) {
  console.log(type);
}
