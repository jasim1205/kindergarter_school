import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './carousel.css';

import { Slider } from '../../api/slide';
// import '../../../public/assets/css/style.css'; // Import Owl Carousel styles

const TestimonialCarousel = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Slider();
        setTestimonialsData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  const options = {
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  };


  // const testimonials = [
  //   {
  //     text:
  //       'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita',
  //     name: 'Parent Name 1',
  //     profession: 'Profession 1',
  //     image: 'assets/img/testimonial-1.jpg',
  //   },
  //   {
  //     text:
  //       'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita',
  //     name: 'Parent Name 1',
  //     profession: 'Profession 2',
  //     image: 'assets/img/testimonial-2.jpg',
  //   },
  //   {
  //     text:
  //       'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita',
  //     name: 'Parent Name 1',
  //     profession: 'Profession 2',
  //     image: 'assets/img/testimonial-2.jpg',
  //   },
  //   {
  //     text:
  //       'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita',
  //     name: 'Parent Name 1',
  //     profession: 'Profession 2',
  //     image: 'assets/img/testimonial-2.jpg',
  //   },
  //   {
  //     text:
  //       'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita',
  //     name: 'Parent Name 1',
  //     profession: 'Profession 2',
  //     image: 'assets/img/testimonial-2.jpg',
  //   },
  //   // Add more testimonials here
  // ];

  return (
    <>
      <div className="container">
        <div class="text-center pb-2">
          <p class="section-title px-5">
            <span class="px-2">Testimonial</span>
          </p>
          <h1 class="mb-4">What Parents Say!</h1>
        </div>
        <OwlCarousel {...options}>
          {testimonialsData.map((testimonials, index) => (
            <div className="testimonial-item" key={index}>
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                {testimonials.description}
              </div>
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src={testimonials.image}
                  style={{ width: '70px', height: '70px' }}
                  alt="Image"
                />
                <div className="pl-3">
                  <h5>{testimonials.name}</h5>
                  <i>{testimonials.title}</i>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>

      </div>
    </>
  );
};

export default TestimonialCarousel;
