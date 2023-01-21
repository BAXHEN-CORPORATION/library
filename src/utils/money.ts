export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format;

export const currencyFormatterWithPlaceholder = (
  money?: number,
  placeholder = ""
): string => {
  if (money === undefined) {
    return placeholder;
  }

  return currencyFormatter(money);
};
