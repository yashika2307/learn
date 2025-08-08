import React from "react";
import { useNavigate } from "react-router-dom";

export default function JoinUs() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Care Provider",
      description:
        "Help elders with companionship, care, and day-to-day support in your city.",
      link: "/apply/care-provider",
    },
    {
      title: "Community Champion",
      description:
        "Be the bridge between elders and WellTogether. Spread awareness and connect families to our services.",
      link: "/apply/community-champion",
    },
    {
      title: "Student Volunteer",
      description:
        "Earn experience and make a difference by spending time with elders and helping them feel connected.",
      link: "/apply/student-volunteer",
    },
  ];

  const containerStyle = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    marginBottom: "10px",
    color: "#222",
  };

  const descStyle = {
    fontSize: "0.95rem",
    marginBottom: "20px",
    color: "#555",
  };

  const buttonStyle = {
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.95rem",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e65a50",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Join Us</h2>
      <div style={cardContainerStyle}>
        {roles.map((role, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={titleStyle}>{role.title}</h3>
            <p style={descStyle}>{role.description}</p>
            <button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = buttonStyle.backgroundColor)
              }
              onClick={() => navigate(role.link)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
