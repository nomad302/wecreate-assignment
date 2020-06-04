import React from "react";
import "./process.css";
import research from "./img/research.svg";
import discovery from "./img/discovery-white.svg";
import wireframes from "./img/wireframe.svg";
import ui from "./img/ui.svg";
import ProcessBlock from "./ProcessBlock";

const Process = () => {
  return (
    <div className="process-container">
      <div className="process-header">
        <h2>Our Design Process</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, alias.
        </p>
      </div>
      <div className="process-components">
        <div className="top">
          <ProcessBlock name={"2. Research"} img={research} />
        </div>
        <div className="middle">
          <ProcessBlock
            name={"2. Discovery"}
            img={discovery}
            background="#4dd0e1"
          />
          <div className="process-mid">
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit.Accusantium vel animi <br />
                dignissimos eligendi explicabo incidunt <br />
                libero quam, quaerat magni cupiditate <br />
                consequatur aperiam voluptate soluta nam <br />
                ab exercitationem, tempore similique.
              </p>
            </div>
          </div>

          <ProcessBlock name={"3. WireFrames"} img={wireframes} />
        </div>
        <div className="bottom">
          <ProcessBlock name={"4. UI Applications"} img={ui} />
        </div>
      </div>
    </div>
  );
};

export default Process;
