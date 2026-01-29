import "./App.css";
import Headers from "./Components/Headers.jsx";
import Aniprev from "./Components/Aniprev.jsx";
import {
  animeSlides,
  TopAnime,
  AnimeRelease,
  DetailAnime,
} from "./assets/Animedata.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Aniname from "./Components/Aniname.jsx";
import Anime from "./Components/Anime.jsx";
import Anidis from "./Components/Anidis.jsx";
function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 w-full overflow-x-hidden scroll-smooth overflow-y-scroll relative">
      <Headers />
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
          coverflow: true,
          type: "dynamic",
        }}
        grabCursor={true}
        speed={600}
        resistanceRatio={0.85}
        navigation={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {animeSlides.map((ani) => (
          <SwiperSlide key={ani.id} className="">
            <Aniprev
              name={ani.name}
              img={ani.img}
              gradient={ani.gradient}
              genre={ani.genre}
              age={ani.age}
              category={ani.category}
              info={ani.info}
              color={ani.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Aniname name="Animovies" />
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          coverflow: true,
        }}
        grabCursor={true}
        speed={600}
        resistanceRatio={0.85}
        navigation={true}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
      >
        {AnimeRelease.map((anime) => (
          <SwiperSlide key={anime.id}>
            <Anime name={anime.name} img={anime.image} year={anime.year} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Aniname name="Top animes" />
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          coverflow: true,
        }}
        grabCursor={true}
        speed={600}
        resistanceRatio={0.85}
        navigation={true}
        spaceBetween={20}
        slidesPerView={4}
      >
        {TopAnime.map((anime) => (
          <SwiperSlide key={anime.id}>
            <Anime name={anime.name} img={anime.image} year={anime.year} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Aniname name="Animes Description" />
      <div className="px-10 md:px-20 pb-10 grid grid-cols-2 gap-4">
        {DetailAnime.map((anime) => (
          <Anidis
            key={anime.id}
            name={anime.name}
            img={anime.image}
            genre={anime.genre}
            description={anime.description}
            rating={anime.rating}
            reviews={anime.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
