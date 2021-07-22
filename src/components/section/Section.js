import React from "react";

const Section = ({ title, children }) => {
  return (
    <Section>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </Section>
  );
};

export default Section;
