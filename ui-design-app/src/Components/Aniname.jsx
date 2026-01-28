function Aniname(props) {
    return (
        <div className="relative">
            <h2 className='text-4xl font-serif my-2.5 text-yellow-500 after:content-[""] after:absolute after:w-full after:h-[0.09rem] after:bg-gray-400 after:top-6 after:mx-2'>
                {props.name}
            </h2>
        </div>
    );
}

export default Aniname;
