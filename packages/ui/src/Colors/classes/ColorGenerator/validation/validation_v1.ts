import { ColorGeneratorOptions } from "..";

export function validation_v1(
  options: ColorGeneratorOptions,
  maxColors: number
) {
  const error1 = "min must be positive number";
  if (options.min < 0) throw new Error(error1);

  const error2 = "min must be less than 360";
  const condition2 = options.min > maxColors;
  if (condition2) throw new Error(error2);

  const error3 = "max must be more than 0";
  if (options.max < 0) throw new Error(error3);

  const condition4 = options.max > maxColors;
  const error4 = "max must be less than 360";
  if (condition4) throw new Error(error4);

  const condition5 = options.min > options.max;
  const error5 = "min value shall be less than max!!";
  if (condition5) throw new Error(error5);
  else return 0;
}
