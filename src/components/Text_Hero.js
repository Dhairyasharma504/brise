import React from 'react';

const Text_Hero = ({ title, subtitle }) => {
  return (
    <div>
      <p className="title has-text-black has-text-weight-bold is-family-sans-serif">
        {title}
      </p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Text_Hero;
