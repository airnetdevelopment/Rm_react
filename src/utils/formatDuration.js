export const formatDuration = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours}hr${hours > 1 ? "s" : ""} ${minutes}min${minutes > 1 ? "s" : ""}`;
    } else if (hours > 0) {
        return `${hours}hr${hours > 1 ? "s" : ""}`;
    } else {
        return `${minutes}min${minutes > 1 ? "s" : ""}`;
    }
};