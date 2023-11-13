import { Product } from '@/models/product.model';
import { DATA_URL } from '@/config';
import Error from '@/components/error';
import { useStatistics } from '@/hooks/useStatistics';
import Head from 'next/head';

export default function Statistics({ products, error }: any) {
  if (error) {
    return (
      <Error />
    )
  }

  const statistics = useStatistics(products)

  return (
    <>
      <Head>
        <title>Statistics | Peek & Cloppenburg</title>
      </Head>
      <div className="p-4">
        <dl className="grid grid-cols-1 gap-x-6 gap-y-6 text-center lg:grid-cols-3">
          <div className="mx-auto flex w-full flex-col border border-1 border-gray-300 p-4">
            <dt className="text-base leading-7 text-gray-600">Brand has the most products that cost less than 40 EUR</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
              {statistics?.result1}
            </dd>
          </div>
          <div className="mx-auto flex w-full flex-col border border-1 border-gray-300 p-4">
            <dt className="text-base leading-7 text-gray-600">Brand offers the largest selection of sizes</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
              {statistics?.result2}
            </dd>
          </div>
          <div className="mx-auto flex w-full flex-col border border-1 border-gray-300 p-4">
            <dt className="text-base leading-7 text-gray-600">Brand offers the lowest average price for size “32”</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
              {statistics?.result3}
            </dd>
          </div>
        </dl>
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