export default function Error() {
  return (
    <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
      <p className="text-base font-semibold leading-8 text-red-600">Error</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Error occured while getting the data.</h1>
      <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
        Sorry, we couldn’t fetch the data. Please reload the page
      </p>
    </div>
  )
}