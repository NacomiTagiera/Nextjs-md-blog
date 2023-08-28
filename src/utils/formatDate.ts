const dateTimeFormat = new Intl.DateTimeFormat('pl-PL', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export const formatDate = (date: Date) => dateTimeFormat.format(date);
