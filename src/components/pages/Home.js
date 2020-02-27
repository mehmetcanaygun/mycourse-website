import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      slidePath: "./img/slide-lecture.jpg",
      slideTitle: "Slide One",
      slideContent:
        "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus explicabo incidunt officiis pariatur ipsam, facilis rem fugiat saepe earum!",
      slideLink: "/lectures"
    },
    {
      slidePath: "./img/slide-tutor.jpg",
      slideTitle: "Slide Two",
      slideContent:
        "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus explicabo incidunt officiis pariatur ipsam, facilis rem fugiat saepe earum!",
      slideLink: "/tutors"
    },
    {
      slidePath: "./img/slide-classroom.jpg",
      slideTitle: "Slide Three",
      slideContent:
        "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus explicabo incidunt officiis pariatur ipsam, facilis rem fugiat saepe earum!",
      slideLink: "/classrooms"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 5000;
  let slideInterval;

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const autoSlide = () => {
    slideInterval = setInterval(() => {
      nextSlide();
    }, intervalTime);
  };

  const stopSlide = () => {
    clearInterval(slideInterval);
  };

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    autoSlide();

    return () => {
      stopSlide();
    };
    // eslint-disable-next-line
  }, [currentSlide]);

  return (
    <div className="home-page">
      <div className="home-page__slideshow-bubbles">
        {slides.map((s, index) => (
          <button
            key={index}
            className={
              index === currentSlide ? "bubble-btn current" : "bubble-btn"
            }
            onClick={() => {
              setCurrentSlide(index);
            }}
          ></button>
        ))}
      </div>
      <div className="home-page__slideshow-buttons">
        <button
          className="prev-btn"
          onClick={() => {
            prevSlide();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="next-btn"
          onClick={() => {
            nextSlide();
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="home-page__slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
            style={{
              background: `url(${slide.slidePath}) no-repeat center center/cover`
            }}
          >
            <div
              className="content"
              onMouseEnter={() => {
                stopSlide();
              }}
              onMouseLeave={() => {
                autoSlide();
              }}
            >
              <h1>{slide.slideTitle}</h1>
              <p>{slide.slideContent}</p>
              <Link
                to={slide.slideLink}
                onClick={() => {
                  scrollTop();
                }}
              >
                More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
