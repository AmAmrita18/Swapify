import React from "react";

const Platfrom = () => {
  return <div className="platfrom" id="about">
    <div className="bg" >
      <img src="assets/img/platfrom.png" alt="" />
    </div>
    <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center wow fadeInUp"
              data-wow-duration="0.3s"
              data-wow-delay="0.3s">
              <div className="section-head">
                <h4 className="lasthead">About Us</h4>
                <h2 className="title">
                  The Online Cryptocurrency Exchange Platform
                </h2>
                <p className="text">It offers a seamless trading experience, enabling users to buy, sell, and swap digital assets with ease. Powered by decentralized technology, it ensures transparency, security, and full user control over transactions. Whether you're a beginner or an experienced trader, our platform is designed to meet your needs with intuitive features and a user-friendly interface.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>;
};

export default Platfrom;
