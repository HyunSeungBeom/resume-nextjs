export const calculateTotalExperience = (
  list: { startedAt: string; endedAt: string }[]
) => {
  let totalMonths = 0;

  list.forEach(({ startedAt, endedAt }) => {
    const [startYear, startMonth] = startedAt.split('-').map(Number);
    const [endYear, endMonth] = endedAt.split('-').map(Number);

    totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `총 ${years}년 ${months}개월`;
};
