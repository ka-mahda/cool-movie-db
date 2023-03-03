import styled from 'styled-components';

let MovieSliderCarouselStyle = styled.section`
width : 100%;
height : 800px;
background-color: var(--bg-color);
margin: 0px;
padding:0px 16px;
display:flex;
justify-content: space-evenly;
align-items: center;
flex-direction:column;

.titleSlider{
  font-family: 'Rubik Dirt', cursive;
    font-size: 2rem;
    text-align: center;
    color:var(--text-color);
}
.swiper-container{
  padding:0px 40px 0px;
  display: flex;
  width:100%;
}
.swiper-container .swiper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
}
.swiper-container .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
 
}



.swiper-container .swiper-button-prev,
.swiper-container .swiper-button-next {
  color: var(--border-color);
  width: 60px !important;
  height: 100px !important;
  top:138px;
}

.swiper-container .swiper-button-prev{
left:-18px;
right:auto;
}
.swiper-container .swiper-button-next{
  right:-19px;
  left:auto;
}


.swiper-pagination-bullet {
  background:var(--overview-color);
}

.swiper-pagination-bullet-active{
  background:var(--text-color);
}

}
`;

export default MovieSliderCarouselStyle;







