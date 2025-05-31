import React from "react";
import "./style.css";
import { FaUserTie, FaHandsHelping, FaCheckCircle, FaStopwatch, FaBriefcase } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBriefcase/>,
      title: "Expert partners",
      description:
        "Work with experienced partners and benefit from their knowledge, proven strategies and decades of experience.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Hands-on Guidance",
      description:
        "Receive ongoing, hands-on guidance to ensure effective and practical solutions throughout the process.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Diverse expertise",
      description:
        "Access a broad range of expertise across strategy, organization design and finance, using trusted frameworks.",
    },
    {
      icon: <FaStopwatch />,
      title: "Tailored Solutions",
      description:
        "Receive actionable advice tailored to your specific needs to ensure your company achieves its goals.",
    },
  ];

  return (
    <div className="features-section">
      {features.map((feature, index) => (
        <div className="feature-box" key={index}>
          <div className="icon-circle">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
