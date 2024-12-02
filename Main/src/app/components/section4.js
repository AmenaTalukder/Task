import "../Styles/section4.css";
import React from "react";
import containImg from "../assets/profile1.png";
import colIcon from "../assets/col-icon.png";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Section4 = () => {
  const circleSequence = [0, 0, 1, 0, 0];
  const testimonials = [
    {
      image: containImg,
      name: "Kilian Murphe",
      colIcon: colIcon,
      text: "I love the interactive elements and the community forums where I can connect with other learners."
    },
    {
      image: containImg,
      name: "Kilian Murphe",
      colIcon: colIcon,
      text: "“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life."
    },
    {
      image: containImg,
      name: "Kilian Murphe",
      colIcon: colIcon,
      text: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."
    },
    {
      image: containImg,
      name: "Kilian Murphe",
      colIcon: colIcon,
      text: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight!"
    },
    {
      image: containImg,
      name: "Kilian Murphe",
      colIcon: colIcon,
      text: "It's not just about physical health but mental and emotional well-being too."
    },
    {
      image: containImg,
      name: "Kilian Murphe",
      colIcon: colIcon,
      text: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."
    }
    // {
    //   image: containImg,
    //   name: "Kilian Murphe",
    //   colIcon: colIcon,
    //   text: "I love the interactive elements and the community forums where I can connect with other learners."
    // }
  ];

  return (
    <div className="Main-div">
      <div className="container-heading">
        Learners love EduPath. See why they rate us 4.9 out of 5
      </div>
      <div className="container-content">
        <div className="container-testimonials">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="container-each">
                <div className="top-div">
                  <img
                    src={testimonial.image.src}
                    alt={testimonial.name}
                    className="container-image"
                  />

                  <div className="icon-col">
                    <img
                      src={testimonial.colIcon.src}
                      alt="icon"
                      className="col-icon"
                    />
                  </div>
                </div>
                <p className="container-name">{testimonial.name}</p>
                <div className="container-text">{testimonial.text}</div>
              </div>
            );
          })}
        </div>

        <div className="circle-img">
          {circleSequence.map((isFilled, index) =>
            isFilled ? <FaCircle key={index} /> : <FaRegCircle key={index} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4;
