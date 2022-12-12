export interface IupperCaseFirst_v1 {
  (string: string): string;
}

export const upperCaseFirst_v1: IupperCaseFirst_v1 = function (string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
