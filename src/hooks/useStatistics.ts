
import { useEffect, useMemo, useState } from 'react';
import { Product } from '@/models/product.model';
import { StatisticsModel } from '@/models/statistics.model';

export const useStatistics = (products: Product[]) => {
  const [statistics, setStatistics] = useState<StatisticsModel>()

  useEffect(() => {
    setStatistics({result1: result1(), result2: result2(), result3: result3()})
  }, [])

  // which brand has the most products that cost less than 40 EUR
  const result1 = () => {
    const filteredProducts = products.filter((product: Product) => product.priceO < 40);
    const counts = filteredProducts.reduce((acc: any, product: Product) => {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const result = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
    );
    return result
  }

  // which brand offers the largest selection of sizes to the customer
  const result2 = () => {
    const counts = products.reduce((acc: any, product: Product) => {
      acc[product.brand] = (acc[product.brand] || []).concat(product.sizes);
      return acc;
    }, {} as Record<string, string[]>);
    const result = Object.keys(counts).reduce((a, b) =>
    counts[a].length > counts[b].length ? a : b
    );
    return result
  }

  // which brand offers the lowest average price for customers wearing size “32”
  const result3 = () => {
    const filteredProducrs = products.reduce((acc: any, product: Product) => {
      if (product.sizes.includes('32')) {
        acc[product.brand] = (acc[product.brand] || []).concat(product.priceO);
      }
      return acc;
    }, {} as Record<string, number[]>);
    const prices = Object.keys(filteredProducrs).reduce((acc, brand) => {
      const prices = filteredProducrs[brand];
      acc[brand] = prices.reduce((sum: any, price: Product) => sum + price, 0) / prices.length;
      return acc;
    }, {} as Record<string, number>);
    const result = Object.keys(prices).reduce((a, b) =>
    prices[a] < prices[b] ? a : b
    );
    return result
  }

  return statistics;
};
