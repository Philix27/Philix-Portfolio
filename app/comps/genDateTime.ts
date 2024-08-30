export function genDateTime(unix_timestamp:number): string {
  const date = new Date(unix_timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Hours part from the timestamp
  const hours = date.getHours();

  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();

  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  const formattedTime =
    hours + ":" + minutes.substr(-2)

return `${day}/${month}/${year} | ${formattedTime}`;
}