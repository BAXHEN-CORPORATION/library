export const dateIsoToClient = (date?: string, placeholder = ""): string => {
  if (!date) return placeholder;

  const _date = new Date(date);
  const day = `${_date.getDate()}`.padStart(2, "0");
  const month = `${_date.getMonth() + 1}`.padStart(2, "0");
  const year = _date.getFullYear().toString().padStart(4, "0");

  return `${day}/${month}/${year}`;
};
export const getShortDayFromDate = (
  date?: string,
  placeholder = ""
): string => {
  if (!date) return placeholder;

  const _date = new Date(date);

  return _date.toLocaleString("pt-br", {
    weekday: "short",
  });
};
