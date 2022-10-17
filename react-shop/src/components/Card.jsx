export function Card(props) {
    const {
        image,
        name,
        id,
        description,
        finalPrice,
    } = props

    return (
        <div className='relative bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in'>
            <div className='overflow-hidden rounded-t-md rounded-b bg-zinc-200 dark:bg-zinc-800 aspect-none transition-all duration-150 ease-in'>
                <img
                    src={image}
                    alt={name}
                    className='object-cover object-center w-72 p-3'
                />
            </div>
            <div className='flex flex-col justify-between p-3'>
                    <h3 className='flex flex-col text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {name}
                        <span className="opacity-[0.60]">{description}</span>
                    </h3>
                    <button className='flex flex-col place-self-center group relative overflow-hidden text-gray-100 bg-gray-800 dark:text-gray-900 dark:bg-gray-300 px-7 pt-5 pb-1 mt-4 mb-2 rounded-md hover:pt-3 hover:pb-3 active:scale-90 transition-all ease- duration-200'>
                        <span className='text-sm text-gray-200 bg-green-700 w-[101%] absolute top-0 left-[50%] translate-x-[-50%] group-hover:translate-y-[-100%] transition-transform ease- duration-200'>
                            {finalPrice}
                        </span>
                        BUY
                    </button>
            </div>
        </div>
    )
}