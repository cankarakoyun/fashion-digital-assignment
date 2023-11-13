import { useEffect } from 'react';
import { Product } from '@/models/product.model';
import Select from 'react-select';


export default function ProductCard({ product }: any) {

  const getDiscountPercentage = (priceO: number, priceR: number) => {
    return (((priceO - priceR) / priceO) * 100).toFixed(0)
  }

  return (
    <a key={product.id} className="group product-card">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
        <img
          src={product.images[0]}
          alt={product.brand}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {product.priceR &&
          <div className='absolute bottom-1 left-1 bg-black text-white p-1 text-sm'>
            {getDiscountPercentage(product.priceO, product.priceR)}% Off
          </div>
        }
      </div>
      <div className='product-information h-28'>
      <div className='first-side'>
        <h3 className="mt-2 font-black">{product.brand}</h3>
        <h4 className="mt-1 text-sm text-gray-700 truncate">{product.description}</h4>
      </div>
      <div className='second-side hidden'>

        {product.images.length > 1 &&
          <div className='flex'>
            {product.images.map((image: string, index: number) => {
              if (index > 0)
                return (<img
                  src={image}
                  alt={product.brand}
                  className='mr-2'
                  width={60}
                  key={index}
                />)
            })}
          </div>
        }

        <div className='flex mt-2 truncate'>
          {product.sizes.map((size: string) => (
            <p className='mr-2 text-sm' key={size}>{size}</p>
          ))}
        </div>

      </div>
      <p className="mt-1">{product.priceR ? product.priceR : product.priceO} €</p>
      </div>
   

    </a>
  )
}