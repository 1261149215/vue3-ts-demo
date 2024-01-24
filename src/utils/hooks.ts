function formatDates(dates: string[]): string[] {
  return dates.map(dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  });
}
export {
    formatDates
}