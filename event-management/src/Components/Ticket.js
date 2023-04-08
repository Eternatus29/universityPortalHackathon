import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Ticket.css";

const Ticket = () => {
  return (
    <div className="ticket Poppins-font" data-tilt data-tilt-perspective='700'>
      <div class="container">
        <div class="item-container">
          <div class="img-container">
            <img src={require("../Assests/g2.png")} alt="Event image" />
          </div>

          <div class="body-container">
            <div class="overlay"></div>

            <div class="event-info">
              <p class="title">Bubbe's Book Fare</p>
              <div class="separator"></div>
              <p class="info">Bellmore, NY</p>
              <p class="price">Rs 200</p>

              <div class="additional-info">
                <p class="info">
                  <i class="fas fa-map-marker-alt"></i>
                  Auditoriam , GLA University
                </p>
                <p class="info">
                  <i class="far fa-calendar-alt"></i>
                  Sat, April 20, 10:00 AM 
                </p>

                <p class="info description">
                  Welcome! Everyone has a unique perspective after reading a
                  book, and we would love you to share yours with us! We meet
                  one Sunday evening <span>more...</span>
                </p>
              </div>
            </div>
            <button class="action">Book it</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
