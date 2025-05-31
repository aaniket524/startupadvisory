import React from "react";
import "./style.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: `As a young company, we faced the challenge of drawing up a convincing financial plan for investor meetings. With Petra's support, we redesigned the entire financial plan, worked specifically on the structure, assumptions and calculation methods and were prepared for all queries. Her expertise and experience in M&A and startups were incredibly valuable. In the end, not only did we as founders have a clear roadmap, but we were also able to convince our investors and close a six-figure financing round.`,
    name: "Verena Judmayer",
    company: "MATR",
    image: "/src/assets/atesti/atesti1.jpg",
  },
  {
    quote: `Petra Wolkenstein you are one of the best coaches I have ever seen!`,
    name: "Gloria Katharina Wagner",
    company: "techwomen.io",
    image: "/src/assets/atesti/atesti2.png",
  },
  {
    quote: `I learned a lot about negotiations and about me! Thank you, Petra Wolkenstein.`,
    name: "Berit Barbosa",
    company: "comigo",
    image: "/src/assets/atesti/atesti3.png",
  },
];

const ATestimonials = () => {
  return (
    <div className="testimonial-container">
      {testimonials.map((item, index) => (
        <div className="testimonial-card" key={index}>
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-text">{item.quote}</p>
          <div className="testimonial-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="testimonial-name">{item.name}</div>
          <div className="testimonial-company">{item.company}</div>
        </div>
      ))}
    </div>
  );
};

export default ATestimonials;
