import React from "react";
import MovieCardDesign from "./MovieCardDesign";
import useFetch from "../API/FetchUrl";
import { CircularProgress, Alert } from "@mui/material";
import SwiperCore, { Pagination,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import MovieSliderCarouselStyle from "../Styles/MovieSliderCarouselStyle";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { popularMovie, popularTV} from "../API/Constant";





SwiperCore.use([Navigation, Pagination]);

export default function MovieSliderCarousel(props) {
 
  //Fetching Data
  const { data, loading, hasError } = useFetch(props.url);
  let availibilityDataRecieved = !loading && !hasError && !!data;
// use state of radiogroup
  // let [action, setAction] = useState("");
  // const handleChange = (e) => {
  //     setAction(e.target.value);
  //   }
  
  if (loading) return <CircularProgress />;
  if (hasError) return <Alert severity="hasError">{hasError}</Alert>;
console.log(data);
let url="https://api.nytimes.com/svc/movies/v2/reviews/search.json";

  return (
    <MovieSliderCarouselStyle>
      <h3 className="titleSlider">{props.title}</h3>
      {/* <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="movie"
        name="radio-buttons-group"
      >
        <FormControlLabel value="movie" control={<Radio />} label="movie"  onChange={handleChange} checked={action === 'movie'}/>
        <FormControlLabel value="tv" control={<Radio />} label="tv"  onChange={handleChange} checked={action === 'tv'}/>
     
      </RadioGroup>
    </FormControl> */}

      <section className="swiper-container">
       
          <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={0}
          loop={true}
    
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          hashNavigation={{
            watchState: true,
          }}
          className="mySwiper"
        >
          
            {availibilityDataRecieved && data.results.map((movie) => {
              return (
             
                <SwiperSlide key={movie.id} className="swiperSlide">
  
                {" "}
                 <MovieCardDesign
                  title={movie.title}
                  year={new Date(movie.release_date).getFullYear().toString()}
                  overview={movie.overview}
                  rating={movie.vote_average}
                  poster={movie.poster_path}
                  genreOne={movie.genre_ids[0]}
                  genreTwo={movie.genre_ids[1]}
                  id={movie.id}
                  category="movies"
                  group="movie"
                /> 
              
              </SwiperSlide>
            
              );
            })}
     
        </Swiper>
      </section>
    </MovieSliderCarouselStyle>
  );
}


  


// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// export default function ControlledRadioButtonsGroup() {
//   const [value, setValue] = React.useState('movie');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <FormControl>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="movie" control={<Radio />} label="movie" />
//         <FormControlLabel value="tv" control={<Radio />} label="tv" />
//       </RadioGroup>
//     </FormControl>
//   );
// }