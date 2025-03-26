export const formatCurrency = (amount: number) => (
  `Rp${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
);

export const formatDate = (dateString: string) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  if (!dateRegex.test(dateString)) {
    throw new Error("Invalid date format. Expected format: 'YYYY-MM-DD HH:mm:ss'");
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date value.');
  }

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const dateParser = (date: string) => {
  return new Date(date);
};
