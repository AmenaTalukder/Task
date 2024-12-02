import React from "react";
import "../Styles/section2.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import renderStars from "../components/renderStars";
import { FaStopwatch } from "react-icons/fa6";
import { PiBookOpenTextFill } from "react-icons/pi";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import { FaCheckCircle } from "react-icons/fa";

const Section2 = () => {
  const courses = [
    {
      image: image1,
      button: "Beginner | Nutrition and Diet",
      title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
      rating: "4.9",
      reviews: "(566)",
      time: "6h 34m",
      lessons: "3 Lessons",
      profileImage: profile1,
      profile: "Kilian Murphe",
      price: "$40"
    },
    {
      image: image2,
      button: "Intermediate | Nutrition and Diet",
      title: "Parenting in the Digital Age: Navigating Screen Time",
      rating: "4.8",
      reviews: "(450)",
      time: "5h 15m",
      lessons: "5 Lessons",
      profileImage: profile2,
      profile: "Sophia Hopkin",
      price: "$35"
    },
    {
      image: image3,
      button: "Beginner | Nutrition and Diet",
      title: "Holistic Health: Integrating Mind, Body, and Spirit",
      rating: "4.7",
      reviews: "(320)",
      time: "7h 20m",
      lessons: "4 Lessons",
      profileImage: profile3,
      profile: "Luna Karim",
      button1: "Enrolled"
    },
    {
      image: image4,
      button: "Beginner | Nutrition and Diet",
      title: "Introduction to Healthy Diet and Nutrition",
      rating: "4.9",
      reviews: "(566)",
      time: "8h 10m",
      lessons: "6 Lessons",
      profileImage: profile4,
      profile: "Kate Winslate",
      price: "$50"
    }
  ];

  return (
    <div className="hero-div">
      <div className="header-div">
        <div className="heading-div">
          <h1 className="h1">Our Popular Courses</h1>
          <h5 className="h5">
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster a sense of inner
            peace and balance.
          </h5>
        </div>
        <div className="arrow">
          <img src="/Frame 52.png" className="arrow-icon" alt="Previous" />
          <img src="/Frame 51.png" className="arrow-icon" alt="Next" />
        </div>
      </div>
      <div className="cart">
        {courses.map((course, index) => (
          <div key={index} className="card">
            <img
              src={course.image.src}
              alt={course.title}
              className="card-image"
            />
            <div className="card-content">
              <div className="Button-section">
                <button className="btn-state">
                  {course.button.split("|")[0]}
                </button>
                <button className="btn-section">
                  {course.button.split("|")[1]}
                </button>
              </div>

              <h3 className="card-title">{course.title}</h3>
              <p className="card-rating">
                <div className="rating">
                  {renderStars(course.rating)} {course.rating} {course.reviews}
                </div>
              </p>
              <p className="card-time">
                <div className="time-section">
                  <FaStopwatch className="card-time-icon" />
                  {course.time}
                  <PiBookOpenTextFill className="card-time-icon" />
                  {course.lessons}
                </div>
                <hr className="horizon-line" />
              </p>

              <div className="card-footer">
                <div className="card-profileImg">
                  <img
                    src={course.profileImage.src}
                    alt={course.profile}
                    className="profile-image"
                  />
                  <p className="course-profile">{course.profile}</p>
                </div>
                {index === 2 && (
                  <p className="button-pro3">
                    <FaCheckCircle className="cheak-circle" />
                    {course.button1}
                  </p>
                )}
                <p className="card-price">{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
