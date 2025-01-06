type ComingSoonProps = {
    name?: string,
}
const ComingSoon = ({name}: ComingSoonProps) => {
    return <div className='w-full h-full flex flex-col justify-center bg-gray-300 text-6xl sm:text-9xl text-center text-white'>
        {name ? <div>{name}</div> : null}
        <div>
            Coming Soon
        </div>
        <div className='pt-16'>{':)'}</div>
    </div>
}

export default ComingSoon;