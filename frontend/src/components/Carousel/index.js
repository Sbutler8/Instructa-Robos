import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <Slider {...settings} className="carousel">
                <div>
                    <img src="https://content.instructables.com/ORIG/FO9/LX23/JK10S8O5/FO9LX23JK10S8O5.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=9c9257ab64de620c334ec03f2a25b929" alt=''></img>
                </div>
                <div>
                    <img src="https://content.instructables.com/ORIG/FJA/HU79/KJBFHTLK/FJAHU79KJBFHTLK.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=7d919b26c85995fc6317a489e9af4b9f" alt=''></img>
                </div>
                <div>
                    <img src="../../images/carousel3.jpg" alt=''></img>
                </div>
                <div>
                    <img src="../../images/carousel4.jpg" alt=''></img>
                </div>
                <div>
                    <img src="../../images/carousel5.jpg" alt=''></img>
                </div>
                <div>
                    <img src="../../images/carousel6.jpg" alt=''></img>
                </div>
            </Slider>

            <div className="textOverPicture">
                <div id="pictureText">YOURS FOR THE MAKING</div>
                <p id="pictureSmallText">Instructarobos is a community for people who like to make things. Come explre, share, and make your next project with us!</p>
            </div>


            <div className="midSection">
                <div className="midSectionBlocks">
                    <div className="midSectionTitles">step-by-step</div>
                    <p>We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</p>
                </div>
                <div className="midSectionBlocks">
                    <div className="midSectionTitles">Made by you</div>
                    <p>Instructarobos are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</p>
                </div>
                <div className="midSectionBlocks">
                    <div className="midSectionTitles">a happy place</div>
                    <p>Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.</p>
                </div>
            </div>

            <hr></hr>

            <div className="midSectionBlocks">
                <div className="midSectionTitles">Explore Projects</div>
            </div>
        </>
  );
}

export default Carousel;
