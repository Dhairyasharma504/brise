import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #193670;
  .card {
    background-color: #193670;
    height: 117px;
  }

  .title {
  }
  .subtitle {
    padding-top: 45px;

    padding-right: 9px;
  }
  .container {
    margin: 6px;
  }
`;
const Dashboard_card = ({ title, subtitle }) => (
  <Wrapper>
    <div className="card">
      <div className="container">
        <h1 className="title has-text-white is-3 has-text-weight-bold has-text-right">
          {title}
        </h1>
        <h2 className="subtitle has-text-white is-7 has-text-left has-text-weight-semibold">
          {subtitle}
        </h2>
      </div>
    </div>
  </Wrapper>
);

export default Dashboard_card;
