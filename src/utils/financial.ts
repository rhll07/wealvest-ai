export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateFV = (initialInvestment: number, monthlySIP: number, rate: number, duration: number): number => {
  const r = rate / 12;
  const n = duration * 12;
  const fvLumpsum = initialInvestment * Math.pow(1 + r, n);
  const fvSIP = monthlySIP * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  return Math.round(fvLumpsum + fvSIP);
};
