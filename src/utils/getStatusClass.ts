export const getStatusClass = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'text-green-500';
    case 'PENDING':
      return 'text-yellow-500';
    case 'CLOSED':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};
