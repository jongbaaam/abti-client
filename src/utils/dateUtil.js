export function getToLocaleDateString(targetDate) {
  return new Date(targetDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}
