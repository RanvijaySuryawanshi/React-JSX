import React from "react";

function Cards() {
  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Fast</h5>
              <p>React is super fast</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Responsive</h5>
              <p>Bootstrap makes layouts responsive</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Modern</h5>
              <p>Clean UI design</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cards;
