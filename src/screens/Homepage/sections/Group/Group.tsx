import React from "react";
import "./style.css";

export const Group = (): JSX.Element => {
  return (
    <div className="group">
      <div className="overlap">
        <div className="left-side">
          <p className="contact-us-for-the">
            <span className="text-wrapper">Contact us For the </span>
            <span className="span">Consultacy</span>
          </p>
          <p className="lorem-ipsum-is">
            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
            has been the industry&#39;s standard dummy text ever
          </p>

          <div className="info">
            <div className="div-2">
              <div className="div-3">
                <div className="text-wrapper-8">(629) 555-0129</div>

                <div className="text-wrapper-6">Requesting A Call:</div>
              </div>

              <div className="text-wrapper-9">phone</div>
            </div>

            <div className="div-4">
              <div className="div-5">
                <p className="text-wrapper-8">9 am - 8 pm</p>

                <div className="text-wrapper-6">Open Hours:</div>
              </div>

              <div className="text-wrapper-9">clock</div>
            </div>

            <div className="div-6">
              <div className="div-7">
                <div className="text-wrapper-6">Location:</div>

                <p className="text-wrapper-8">
                  6391 Elgin St. Celina, Delaware 10299
                </p>
              </div>

              <div className="text-wrapper-10">location-dot</div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="message">
            <button className="div-wrapper">
              <div className="div">Send Message</div>
            </button>

            <div className="overlap-group">
              <div className="text-wrapper-2">Your Address</div>

              {/* <div className="text-wrapper-3">location-dot</div> */}
            </div>

            <div className="text-wrapper-4">Your Address</div>

            <div className="overlap-2">
              <div className="text-wrapper-2">Your Email</div>

              {/* <div className="text-wrapper-5">paper-plane</div> */}
            </div>

            <div className="overlap-3">
              <div className="text-wrapper-2">Your Phone</div>

              {/* <div className="text-wrapper-5">phone</div> */}
            </div>

            <div className="email-field">Your Email</div>

            <div className="text-wrapper-7">Your Phone</div>
          </div>
        </div>
      </div>

      <footer className="footer">

        <div className="element-4">
          <img loading="lazy"
            className="social-media-icon"
            alt="Social media icon"
            src="https://c.animaapp.com/mbg35a3lsFgGqz/img/social-media-icon-.png"
          />

          <p className="lorem-ipsum-is-5">
            Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry&#39;s Standard Dummy
            Text Ever Since The 1500s, When An Unknown Printer Took A Galley
          </p>
        </div>


        <div className="element-3">
          <p className="lorem-ipsum-is-4">
            Lorem Ipsum 
            <br />
            is Simply Dum
            <br />
            text Of The <br />
            printing
          </p>

          <div className="text-wrapper-16">Lorem Ipsum</div>
        </div>

        <div className="element-2">
          <p className="lorem-ipsum-is-3">
            Lorem Ipsum is Simply <br />
            dummy Text Of The Printing <br />
            and Typesetting Industry
            <br />
            lorem Ipsum Has Been
          </p>

          <div className="text-wrapper-15">Lorem Has</div>
        </div>

        <div className="element">
          <button className="button-2">
            <div className="butto-n">
              <div className="text-wrapper-11">Lorem Ipsum is</div>
            </div>

            <button className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-12">Lorem Ipsum is</div>
              </div>
            </button>
          </button>

          <p className="text-wrapper-13">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="text-wrapper-14">Lorem Has</div>
        </div>

        <img loading="lazy"
          className="divider"
          alt="Divider"
          src="https://c.animaapp.com/mbg35a3lsFgGqz/img/divider.svg"
        />
        <div className="text-box">
          <p className="p">Lorem Ipsum is Simply Dummy Text Of</p>

          <p className="lorem-ipsum-is-2">
            Lorem Ipsum is Simply Dummy Text Of The Printing And
          </p>
        </div>
      </footer>
    </div>
  );
};
