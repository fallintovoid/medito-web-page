const convertUnixTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  return formattedDate;
};

export default convertUnixTime;
