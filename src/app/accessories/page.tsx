import React from 'react'

const accessories = () => {
  return (
    <>
    {/* 1st */}
    <div className="font-[sans-serif]">
  <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
    <h2 className="text-4xl font-extrabold text-white mb-12 flex text-center justify-center">
  Skin Care
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://img.sellvia.com/uploads/2021/11/08/25910d.jpg-350x350.jpg?10000"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Advance repair scale treatment</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $10 <span className="text-gray-400 ml-2 font-medium">$15</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-14-a-300x366.jpg"
            alt="Product 2"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Face Lotion</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $12 <span className="text-gray-400 ml-2 font-medium">$17</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-10-a-300x366.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Caramel Cream Delight
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $14 <span className="text-gray-400 ml-2 font-medium">$19</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div> 
{/* 2nd */}
<div className="font-[sans-serif]">
  <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
    <h2 className="text-4xl font-extrabold text-white mb-12 flex text-center justify-center">
Hair Care
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-18-a-300x366.jpg"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Advance repair scale treatment</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $10 <span className="text-gray-400 ml-2 font-medium">$15</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-19-a-300x366.jpg"
            alt="Product 2"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Face Lotion</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $12 <span className="text-gray-400 ml-2 font-medium">$17</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2023/11/product-04-a-300x366.jpg"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
            Caramel Cream Delight
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $14 <span className="text-gray-400 ml-2 font-medium">$19</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* 3rd */}
<div className="font-[sans-serif]">
  <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
    <h2 className="text-4xl font-extrabold text-white mb-12 flex text-center justify-center">
Nail Laquor
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0595/6691/5779/files/nails-3.jpg?v=1636657507"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Red Velvet Nude </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $10 <span className="text-gray-400 ml-2 font-medium">$15</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://swissbeauty.in/cdn/shop/products/MS70-01b_d4a8d747-1474-4b0b-9585-998894cefe61_360x.jpg?v=1698320059"
            alt="Product 2"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">Super Shine</h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $12 <span className="text-gray-400 ml-2 font-medium">$17</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#429e84] rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://swissbeauty.in/cdn/shop/files/SB-112_38_360x.jpg?v=1708124297"
            alt="Product 3"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-gray-800">
           Color Splash
          </h3>
          <h4 className="text-xl text-gray-700 font-bold mt-4">
            $14 <span className="text-gray-400 ml-2 font-medium">$19</span>
          </h4>
          <button
            type="button"
            className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default accessories