import { useEffect, useMemo, useState } from 'react';
import { Product } from '@/models/product.model';

export type StrikePriceApy = {
  strikePricePercentage: string;
  apy: string;
};

export const useParser = (products: Product[], key: string) => {
  const [parsedData, setParsedData] = useState();

  useEffect(() => {
    const uniqueValues = Array.from(new Set(products.flatMap((item: any) => (Array.isArray(item[key]) ? item[key] : [item[key]]))));
    const result: any = uniqueValues.map((value) => ({ value: value.toString(), label: value.toString() }));
    setParsedData(result);
  }, [])

  return parsedData;
};
