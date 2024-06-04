export const formatDate = (dateStr: string): string => {
  // Ensure dateStr is a string primitive
  const date: Date = new Date(dateStr.toString());
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
