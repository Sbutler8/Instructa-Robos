import React, { useSelector, useDispatch} from 'react-redux';
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getCategories } from "../../store/categories";
import { getProjectsByCategory } from "../../store/projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getCategories()), [dispatch]);
    const categories = useSelector((state) => state.categories);
    const categoryArray = Object.values(categories);

    useEffect(() => {
        categoryArray.map(category => {
            dispatch(getProjectsByCategory(category.name))
        })
    }, [dispatch]);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const carouselImages = [
        "https://content.instructables.com/ORIG/FO9/LX23/JK10S8O5/FO9LX23JK10S8O5.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=9c9257ab64de620c334ec03f2a25b929",
        "https://content.instructables.com/ORIG/FJA/HU79/KJBFHTLK/FJAHU79KJBFHTLK.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=7d919b26c85995fc6317a489e9af4b9f",
        "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXJkdWlub3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1559819614-c5bdc6c7191e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1558137623-ce933996c730?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80"
    ];

return (
    <>
        <Slider {...settings} className="carousel">
            {carouselImages.map(carouselImage => {
                return (
                <div key={carouselImage} className="img-container">
                    <img className="carousel" src={carouselImage} alt=''></img>
                    <hr id="picture-top"></hr>
                    <div id="pictureText">YOURS FOR THE MAKING</div>
                    <div id="pictureSmallText">Instructarobos is a community for people who like to make things. Come explre, share, and make your next project with us!</div>
                    <hr id="picture-bottom"></hr>
                </div>
                )
            })}
        </Slider>



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

        <hr id="divider" ></hr>

        <div className="midSectionBlocks">
            <div className="midSectionTitles">Explore Projects</div>
            {categoryArray.map(category => {
                return (
                    <div key={category.id} className="category">
                        <div to={`/categories/${category.name}`}>
                            <div className="category">{category.name}</div>
                            {/* {dispatch(getProjectsByCategory(category.name))} */}
                        </div>
                    </div>
                    )
                })}
        </div>
    </>
  );
}

export default Carousel;
