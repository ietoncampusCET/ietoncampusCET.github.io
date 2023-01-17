import "../assets/css/component.css";
import { members20, witteam20 } from "../assets/js/team_2020";
import { members21, witteam21 } from "../assets/js/team_2021";
import { members22, witteam22 } from "../assets/js/team_2022";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Member({ profile }) {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-out-quart" });
  }, []);

  return (
    <div className="col-md-4 col-lg-3 col-sm-8" id="crew" data-aos="fade-up">
      <div className="row justify-content-center">
        <img
          src={require(`../assets/img/team/${profile.img}`)}
          alt="eren-yeager"
          // style={{ width: 250, height: 200 }}
          // style={{ width: "100%", height: "100%"}}
          loading="lazy"
        />
      </div>
      <div className="row">
        <div className="col">
          <h5>{profile.name}</h5>
          <h6>{profile.position}</h6>
        </div>
      </div>
    </div>
  );
}

function Team() {
  // data for execom 2022 - 23
  const memberList22 = members22.map((member) => <Member profile={member} />);
  const witList22 = witteam22.map((member) => <Member profile={member} />);

  // data for execom 2021 - 22
  const memberList21 = members21.map((member) => <Member profile={member} />);
  const witList21 = witteam21.map((member) => <Member profile={member} />);

  // data for execom 2020 - 21
  const memberList20 = members20.map((member) => <Member profile={member} />);
  const witList20 = witteam20.map((member) => <Member profile={member} />);

  return (
    <div id="team">
      <div className="container">
        <div className="row row-header align-items-center justify-content-start">
          <div className="col-12">
            <p>The Team</p>
          </div>
        </div>
        <div className="row align-items-start justify-content-center">
          <svg
            width="75px"
            height="75px"
            viewBox="0 0 16 16"
            class="bi bi-people"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
            />
          </svg>
        </div>

        <div>
          <Tabs className="centered-tabs" defaultActiveKey="execom_22">
            <Tab eventKey="execom_20" title="Execom 2020-2021">
              <div className="row align-items-center justify-content-center">
                {memberList20}
              </div>
              <div className="row align-items-center justify-content-center">
                <h2>Women In Technology</h2>
              </div>
              <div className="row align-items-center justify-content-center">
                {witList20}
              </div>
            </Tab>
            <Tab
              className="centered-tabs"
              eventKey="execom_21"
              title="Execom 2021-2022"
            >
              <div
                className="row align-items-center justify-content-center"
                data-aos="fade-up"
              >
                {memberList21}
              </div>
              <div className="row align-items-center justify-content-center">
                <h2>Women In Technology</h2>
              </div>
              <div
                className="row align-items-center justify-content-center"
                data-aos="fade-up"
              >
                {witList21}
              </div>
            </Tab>
            <Tab
              className="centered-tabs"
              eventKey="execom_22"
              title="Execom 2022-2023"
            >
              <div className="row align-items-center justify-content-center">
                {memberList22}
              </div>
              <div className="row align-items-center justify-content-center">
                <h2>Women In Technology</h2>
              </div>
              <div className="row align-items-center justify-content-center">
                {witList22}
              </div>
            </Tab>
            {/* to add new execom duplicate the above <Tab></Tab> block add update the data
                            - also change the defaultActiveKey to the latest execom
                            - also update the function with the data of new execom
                        */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Team;
