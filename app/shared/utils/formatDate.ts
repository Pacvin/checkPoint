export const formatDate = (isoString: string): string => {
  if (!isoString) return '';

  const date = new Date(isoString);

  if (isNaN(date.getTime())) return isoString;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
