import React from "react";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
