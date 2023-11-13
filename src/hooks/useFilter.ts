
import { useEffect, useMemo, useState } from 'react';
import { Product } from '@/models/product.model';

export const useFilter = (products: Product[], sizes: any, sortBy: any) => {
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {

    var filteredProducts;
    if(sizes && sizes.length) {
      filteredProducts = products.filter((product) =>
        product.sizes.some((size) => sizes.map((s: any) => s.value).includes(size))
      );
    }
  
    const sortedProducts: any = filteredProducts ? [...filteredProducts] : [...products];

    if(sortBy) {
      sortedProducts.sort((a: Product, b: Product) => {
        const priceA = a.priceR !== undefined ? a.priceR : a.priceO;
        const priceB = b.priceR !== undefined ? b.priceR : b.priceO;

        return sortBy.value === 'asc' ? priceA - priceB : priceB - priceA;
      });
    }
   
    setFilteredProducts(sortedProducts)
  }, [sizes, sortBy])

  return filteredProducts;
};
