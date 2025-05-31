import React from "react";
import "./style.css";

const testimonials = [
  {
    image: "/src/assets/testi/testi1.jpg", 
    text: `Working with Michael Kubiena was a really fruitful experience. He combines tons of experience and strong conceptual skills with a hands-on attitude: Exactly what we needed. Together we were able to create something entirely new & unique for the Turkish retail & hospitality industry as well as for the global Metro world, something which has become a reference point in terms of quality, innovation and customer focus. Michael not only was instrumental in designing our learning curriculum, he also successfully facilitated the development of our overall organization.`,
    name: "Betül Bildik",
    position: "Gastronometro | Metro Turkey",
  },
  {
    image: "/src/assets/testi/test2.jpg", 
    text: "Thanks for your great support!!",
    name: "Gabriele Tatzberger",
    position: "Director of Start-up Services at Vienna Business Agency",
  },
  {
    image: "/src/assets/testi/testi3.jpg", 
    text: `In Petra Wolkenstein, we have found someone who will provide us with consistent and targeted support in focusing our services and, building on this, will help us to decisively develop our presence in digital and social media. The contribution of her personal experience in dealing with these media and her corresponding expertise are a decisive factor in the expansion of our customer base. I can only warmly recommend Mrs Wolkenstein. What she develops and drives forward in the start-up scene also has great applications for us as an SME. The positive development of our company over the last 5 years of working with Mrs Wolkenstein is the best proof of this.`,
    name: "DI Christian Lorenz",
    position: "geschäftsführender Gesellschafter der Lorenz Consult ZT GmbH",
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      {testimonials.map((item, index) => (
        <div className="testimonial-card" key={index}>
          <img src={item.image} alt={item.name} className="testimonial-img" />
          <p className="testimonial-text">{item.text}</p>
          <p className="testimonial-name">{item.name}</p>
          <p className="testimonial-position">{item.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;
