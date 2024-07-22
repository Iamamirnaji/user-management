export const convertToPersianNumbers = (number: number | string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(number).replace(
    /\d/g,
    (digit) => persianDigits[digit as unknown as number]
  );
};
