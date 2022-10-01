export function Card(props) {
    return (
        <div className='relative bg-zinc-200 rounded-lg shadow-lg shadow-zinc-400/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in'>
            <div className='overflow-hidden rounded-t-md rounded-b bg-gray-200 aspect-none'>
                <img
                    src={props.image}
                    alt={props.name}
                    className='object-cover object-center'
                />
            </div>
            <div className='flex justify-between p-3'>
                <div>
                    <h3 className='text-sm text-gray-700'>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {props.name}
                    </h3>
                </div>
            </div>
        </div>
    )
}