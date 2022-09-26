export function Card(props) {
    return (
        <div className='relative bg-zinc-200 rounded-lg shadow w-max h-max hover:outline outline-offset-0 outline-indigo-500'>
            <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-t-md rounded-b bg-gray-200 lg:aspect-none'>
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