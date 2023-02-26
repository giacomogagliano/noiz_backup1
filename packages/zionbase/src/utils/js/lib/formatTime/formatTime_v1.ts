export interface IformatTime_v1 {
  (time: Date): string;
}

export const formatTime_v1: IformatTime_v1 = (
  time: Date
) => {
  function addZero(t: number) {
    return "0" + t.toString();
  }
  function timeUnitToString(t: number) {
    if (t >= 10) return t.toString();
    else return addZero(t);
  }
  const seconds = timeUnitToString(time.getSeconds());
  const minutes = timeUnitToString(time.getMinutes());
  const hours = timeUnitToString(time.getHours() - 1);
  const array = [hours, minutes, seconds];
  return array.join(":");
};
