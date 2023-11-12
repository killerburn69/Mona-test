export function formatMoney(number: number) {
  let formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
}
