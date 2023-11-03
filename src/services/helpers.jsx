export const formatDate = (date) => {
    const dateObj = new Date(date).toString();
    const year = dateObj.slice(11,16);
    const month = dateObj.slice(4,7);
    const day = dateObj.slice(8,10);
    return `${month} ${day}, ${year}`;
}