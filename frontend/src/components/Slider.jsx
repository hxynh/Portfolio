import React, { useState } from 'react';
import classes from './styles/Slider.module.css'; // Create a CSS file for styling

export default function Slider() {
  const slidesData = [
    {
      header: 'Who am I?',
      description: "Welcome! I'm Nancy, a passionate front-end developer with a knack for crafting captivating digital experiences. With expertise in React, JavaScript, HTML, CSS, and jQuery, I thrive in bringing creativity to life through clean, intuitive interfaces.\nDetail-oriented and a natural multitasker, I pride myself on delivering pixel-perfect designs while juggling multiple projects. Effective communication is at the heart of my work ethos, enabling seamless collaboration and ensuring project goals are exceeded."
    },
    {
      header: 'What sets me apart?',
      description: "It's my dedication to continuous learning and research. I'm constantly exploring new technologies and refining my skills, always eager to push the boundaries of what's possible in the digital realm.\nBeyond coding, I find solace in the pages of novels and the gentle melodies of the kalimba. My curiosity extends beyond technology; diving into a great story or mastering a new musical piece adds depth to my creativity."
    },
    {
      header: 'My goal?',
      description: "To blend innovation with functionality, creating web experiences that not only impress but also resonate with users on a meaningful level.\nLet's connect and explore the possibilities of crafting something extraordinary together."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={classes.slider}>

    <div>
        
        
      <div className={classes.slides}>
      <button className={classes.prev} onClick={prevSlide}>
      
      </button>
        {slidesData.map((slide, index) => (
          <div key={index} className={index === currentSlide ? `${classes.slide} ${classes.active}` : classes.slide}>
            <h2>{slide.header}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
        <button className={classes.next} onClick={nextSlide}>
      </button>
      </div>
      
      
    </div>
      <div className={classes.dots}>
      
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? `${classes.dot} ${classes.activeDot}` : classes.dot}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
        
      </div>
      
      
    </div>
  );
};
