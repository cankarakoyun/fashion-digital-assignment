import { Product } from '@/models/product.model';
import ProductCard from '@/components/productCard';
import { useParser } from '@/hooks/useParser';
import { useEffect, useState } from 'react';
import Select from 'react-select'
import { DATA_URL, SORT_FILTERS } from '@/config';
import { useFilter } from '@/hooks/useFilter';
import Error from '@/components/error';
import Head from 'next/head';

export default function ProductList({ products, error }: any) {

  if (error) {
    return (
      <Error />
    )
  }

  const brands = useParser(products, 'sizes')
  const [selectedSizes, setSelectedSizes] = useState()
  const [selectedSortFilter, setSelectedSortFilter] = useState()
  const filteredProducts: any = useFilter(products, selectedSizes, selectedSortFilter);

  const handleSizeChange = (selectedOption: any) => {
    setSelectedSizes(selectedOption)
  };

  const handleSortByChange = (selectedOption: any) => {
    setSelectedSortFilter(selectedOption)
  };

  return (
    <>
      <Head>
        <title>Product List | Peek & Cloppenburg</title>
      </Head>
      <div className="p-4">
        {brands &&
          <div className='flex flex-col sm:flex-row sm:justify-end justify-start text-left sm:items-center'>
            <h5 className='sm:mr-4 w-full sm:w-auto mb-4'>Filters:</h5>
            <div className='w-full sm:w-52 mb-4'>
              <Select value={selectedSizes} onChange={handleSizeChange} options={brands} isMulti={true} placeholder="Filter size" />
            </div>
            <div className='w-full sm:w-52 sm:ml-4 mb-4'>
              <Select value={selectedSortFilter} options={SORT_FILTERS} onChange={handleSortByChange} placeholder="Sort by price" />
            </div>
          </div>
        }
        {filteredProducts &&
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        }
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(DATA_URL)
  const error = res.ok ? false : true
  const products: Product[] = !error ? await res.json() : []
  return { props: { products, error } }
}