import React, { Component } from "react";
import "../../styles/DashboardRef.css";

function vanillaLoop(props) {
  console.log(props);
  let epCard = document.createElement("div");
  epCard.className = "employee-card";
  let epName = document.createElement("h2");
  epName.innerHTML = props.data.name[0];
  epCard.appendChild(epName);
  let epEmail = document.createElement("h2");
  epEmail.innerHTML = props.data.email[0];
  epCard.appendChild(epEmail);
  let epPhone = document.createElement("h2");
  epPhone.innerHTML = props.data.phone[0]
  epCard.appendChild(epPhone);

  console.log(epCard);
  return epCard;
}

function Employee(props) {
  console.log(props.data)
  let keys = Object.keys(props.data);
  console.log(keys)
  return (
    vanillaLoop(props)
    //     <div>
    // <div className="employee-card">
    //   <h2>{props.data.name}</h2>
    //   <h2>{props.data.email[0]}</h2>
    //   <h2>{props.data.phone[0]}</h2>
    //   <div className="card-inner">
    //     <h1 className="card-title">Avability</h1>
    //     <h2>{props.data.workingDays[0]}</h2>
    //     <h2>{props.data.workingTime[0]}</h2>
    //   </div>
    //   <div className="card-inner">
    //     <h1 className="card-title">Requested Time Off</h1>
    //     <span>something</span>
    //   </div>
    // </div>
    //     )}</div>
  )
}

class Employees extends Component {
  constructor() {
    super()
    this.state = {
        name: ["John Smith"],
        email: ["johnsmith@mail.com"],
        phone: ["1231231234"],
        workingDays: ["Monday, Friday"],
        workingTime: ["2am - 5pm"],
    }
  }
  render() {
    return (
      <div className="container">
        <div className="top">
          <div className="navbar">
            <span>Dashboard </span>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <ul>
              <li>something 1</li>
              <li>something 2</li>
            </ul>
          </div>

            <Employee data={this.state} />

          </div>
        </div>

    )
  }
}

export default Employees;