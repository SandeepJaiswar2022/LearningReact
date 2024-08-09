function Product({name='default',price='22222',desc='this is dummy description about the defualt product'}) {
    return (
        <>
            <div className='p-2'>
                <div class="max-w-sm bg-indigo-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/* <img class="h-[220px] w-full rounded-t-md object-cover" src="shampoo.jpg" alt="" /> */}
                    <div class="p-5">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <h5 class="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">{desc}</h5>
                        <h3 class="mb-2 text-lg font-bold  tracking-tight text-gray-900 dark:text-white">price: {price}$</h3>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;