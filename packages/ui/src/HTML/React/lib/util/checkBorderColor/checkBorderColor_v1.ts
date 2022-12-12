export const checkBorderColor_v1 = <
  T extends { borderColor?: string }
>(
  props: T
) => {
  if (!props.borderColor) return "black";
  return props.borderColor;
};
