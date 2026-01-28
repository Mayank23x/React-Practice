function Aniprev({
  name,
  img,
  gradient,
  genre = [],
  color,
  age = "13+",
  category = "Anime",
  info = "",
}) {
  return (
    <div className={`flex items-center justify-between md:p-20  pt-5`}>
      <div className="flex flex-col gap-6 max-w-lg relative">
        <div>
          <h1
            className={`font-serif text-5xl md:text-7xl font-bold bg-linear-to-r ${gradient} bg-clip-text text-transparent mb-2`}
          >
            {name}
          </h1>
        </div>
        <div className="flex gap-3 text-xs font-semibold flex-wrap">
          <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-400">
            {age}
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400">
            {category}
          </span>
          {genre.map((g, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-400"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-base text-gray-300 leading-relaxed">{info}</p>
        <div className="flex gap-4 items-center pt-4">
          <button
            className={`px-6 py-3 bg-linear-to-r ${gradient} text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1`}
          >
            Watch Now
          </button>
          <button
            className={`px-6 py-3 border-2 border${color} text${color} font-bold rounded-lg hover:bg-orange-500/10 transition-all duration-300`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <img
        className={`w-64 md:w-70 h-auto object-contain rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-500 ease-out hover:shadow-black`}
        src={img}
        alt={name}
      />
    </div>
  );
}

export default Aniprev;
