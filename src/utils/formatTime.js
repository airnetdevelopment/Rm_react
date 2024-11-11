export function parseDateTimeWithZ(isoString) {
    const date = new Date(isoString);
  
    // Extract and format the date as "DD::MM::YYYY"
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
  
    // Extract and format the time as "HH:MM"
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
  
    return {
        date: formattedDate,
        time: formattedTime
    };
}
  