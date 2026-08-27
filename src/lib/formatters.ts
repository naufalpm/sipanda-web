/**
 * Standardized Indonesian Number & Currency Formatters for SIPANDA
 * Guarantees standard Indonesian notation: comma for decimals (e.g. 26,15), dots for thousands (642.500).
 * Eliminates any unwanted whitespace before commas/periods.
 */

export function formatIndonesianNumber(
  value: number | undefined | null,
  options?: {
    minDecimals?: number;
    maxDecimals?: number;
  }
): string {
  if (value === undefined || value === null || isNaN(value)) return '-';

  const minDec = options?.minDecimals ?? 1;
  const maxDec = options?.maxDecimals ?? 2;

  const sign = value < 0 ? '-' : '';
  const absVal = Math.abs(value);

  // Exact 3 decimals for GINI (0,341)
  if (maxDec === 3) {
    const [intPart, decPart] = absVal.toFixed(3).split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${sign}${formattedInt},${decPart}`;
  }

  // Integer or large number >= 1000 like Garis Kemiskinan (642.500)
  if (Number.isInteger(absVal)) {
    const formattedInt = absVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${sign}${formattedInt}`;
  }

  // Standard 1 or 2 decimals
  const [intPart, decPart] = absVal.toFixed(maxDec).split('.');
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Handle trailing zeroes if minDec is 1
  let cleanDec = decPart || '';
  if (minDec === 1 && cleanDec.length === 2 && cleanDec.endsWith('0')) {
    cleanDec = cleanDec.slice(0, 1);
  }

  return cleanDec ? `${sign}${formattedInt},${cleanDec}` : `${sign}${formattedInt}`;
}

export function formatPercent(value: number | undefined | null): string {
  if (value === undefined || value === null || isNaN(value)) return '0,00%';
  const sign = value > 0 ? '+' : value < 0 ? '-' : '';
  const absVal = Math.abs(value);
  const formatted = formatIndonesianNumber(absVal, { minDecimals: 2, maxDecimals: 2 });
  return `${sign}${formatted}%`;
}

export interface MetricDisplayParts {
  prefix: string;
  formattedValue: string;
  suffix: string;
  changeFormatted: string;
  changePercentFormatted: string;
}

export function resolveMetricDisplay(indicator: {
  code?: string;
  unit?: string;
  currentValue?: number;
  changeValue?: number;
  changePercent?: number;
}): MetricDisplayParts {
  let prefix = '';
  let suffix = indicator.unit || '';

  const unit = indicator.unit || '';
  const code = indicator.code || '';

  if (unit === 'Rupiah' || code === 'GK') {
    prefix = 'Rp';
    suffix = '';
  } else if (unit === 'Triliun Rupiah' || unit === 'Triliun Rp' || code === 'PDRB_TAHUNAN') {
    prefix = 'Rp';
    suffix = 'Triliun';
  } else if (unit === 'Juta Rupiah' || unit === 'Juta Rp' || code === 'PDRB_KAPITA') {
    prefix = 'Rp';
    suffix = 'Juta';
  } else if (unit === 'Miliar Rupiah' || unit === 'Miliar Rp') {
    prefix = 'Rp';
    suffix = 'Miliar';
  } else if (code === 'GINI' || unit === 'Rasio' || unit === '') {
    prefix = '';
    suffix = ''; // Gini is a unitless coefficient
  }

  // Format value
  const isGini = code === 'GINI';
  const formattedValue = formatIndonesianNumber(
    indicator.currentValue,
    isGini ? { minDecimals: 3, maxDecimals: 3 } : { minDecimals: 1, maxDecimals: 2 }
  );

  // Format change
  const changeVal = indicator.changeValue ?? 0;
  const changeAbsStr = formatIndonesianNumber(
    Math.abs(changeVal),
    isGini ? { minDecimals: 3, maxDecimals: 3 } : { minDecimals: 1, maxDecimals: 2 }
  );
  const changeSign = changeVal > 0 ? '+' : changeVal < 0 ? '-' : '';

  let changeFormatted = '';
  if (prefix) {
    changeFormatted = `${changeSign}${prefix} ${changeAbsStr}${suffix ? ` ${suffix}` : ''}`;
  } else {
    changeFormatted = `${changeSign}${changeAbsStr}${suffix ? ` ${suffix}` : ''}`;
  }

  const changePercentFormatted = formatPercent(indicator.changePercent ?? 0);

  return {
    prefix,
    formattedValue,
    suffix,
    changeFormatted,
    changePercentFormatted
  };
}
