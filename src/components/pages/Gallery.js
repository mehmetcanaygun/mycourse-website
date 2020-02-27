import React, { useState } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

const Gallery = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const galleryImages = [
    {
      imgId: 0,
      imgPathSm: "./img/gallery-img-0-sm.jpg",
      imgPathMd: "./img/gallery-img-0-md.jpg"
    },
    {
      imgId: 1,
      imgPathSm: "./img/gallery-img-1-sm.jpg",
      imgPathMd: "./img/gallery-img-1-md.jpg"
    },
    {
      imgId: 2,
      imgPathSm: "./img/gallery-img-2-sm.jpg",
      imgPathMd: "./img/gallery-img-2-md.jpg"
    },
    {
      imgId: 3,
      imgPathSm: "./img/gallery-img-3-sm.jpg",
      imgPathMd: "./img/gallery-img-3-md.jpg"
    },
    {
      imgId: 4,
      imgPathSm: "./img/gallery-img-4-sm.jpg",
      imgPathMd: "./img/gallery-img-4-md.jpg"
    },
    {
      imgId: 5,
      imgPathSm: "./img/gallery-img-5-sm.jpg",
      imgPathMd: "./img/gallery-img-5-md.jpg"
    },
    {
      imgId: 6,
      imgPathSm: "./img/gallery-img-6-sm.jpg",
      imgPathMd: "./img/gallery-img-6-md.jpg"
    },
    {
      imgId: 7,
      imgPathSm: "./img/gallery-img-7-sm.jpg",
      imgPathMd: "./img/gallery-img-7-md.jpg"
    },
    {
      imgId: 8,
      imgPathSm: "./img/gallery-img-8-sm.jpg",
      imgPathMd: "./img/gallery-img-8-md.jpg"
    },
    {
      imgId: 9,
      imgPathSm: "./img/gallery-img-9-sm.jpg",
      imgPathMd: "./img/gallery-img-9-md.jpg"
    }
  ];
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="gallery-page">
      <Header title={"Gallery"} />
      <div className="navigation">
        <Link
          to="/"
          onClick={() => {
            scrollTop();
          }}
        >
          Home
        </Link>
        &nbsp;&middot;&nbsp;
        <Link
          to="/gallery"
          onClick={() => {
            scrollTop();
          }}
        >
          Gallery
        </Link>
      </div>
      <div className="page-wrapper">
        <div className="gallery-page__gallery">
          <div className="images-sm">
            {galleryImages.map(img => (
              <button
                key={img.imgId}
                onClick={() => {
                  setCurrentImg(img.imgId);
                }}
                className={img.imgId === currentImg ? "current" : ""}
                style={{
                  background: `url(${img.imgPathSm}) no-repeat center center/cover`
                }}
              ></button>
            ))}
          </div>
          <div className="image-md">
            <img
              src={galleryImages[currentImg].imgPathMd}
              alt="gallery-img-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
