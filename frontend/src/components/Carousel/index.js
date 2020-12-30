import React from 'react';
import './Carousel.css';

function Carousel() {
    let slideIndex = 0;
    const slideImages = document.querySelectorAll("img");
    const dots = document.querySelectorAll(".dot");

    const showSlides = slides => {
        slideImages.forEach(image => {
            image.style.display = "none";
        })

        slideIndex += 1;

        if (slideIndex > slideImages.length)
        {
            slideIndex = 1;
        }

        dots.forEach(dot => {
            dot.className = dot.className.replace("active", "");
        })

        slideImages[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        // Change image every 2 seconds
        setTimeout(showSlides, 2000);
    }


    return (
        <>
            <div className="carousel">
                <div className="images">
                    <img src="../../images/carousel1.jpg" alt=''></img>
                </div>
                <div className="images">
                    <img src="../../images/carousel2.jpg" alt=''></img>
                </div>
                <div className="images">
                    <img src="../../images/carousel3.jpg" alt=''></img>
                </div>
                <div className="images">
                    <img src="../../images/carousel4.jpg" alt=''></img>
                </div>
            </div>

            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div id="pictureText">YOURS FOR THE MAKING</div>
            <p id="pictureSmallText">Instructarobos is a community for people who like to make things. Come explre, share, and make your next project with us!</p>

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
            {/* {showSlides(slideImages)} */}
        </>
  );
}

export default Carousel;
