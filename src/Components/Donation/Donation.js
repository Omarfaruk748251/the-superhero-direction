import React from "react";
import Country from "../Country/Country";

import "./Donation.css";

const Donation = (props) => {
  // console.log(props.donation);
  const { donation } = props;
  let total = 0;
  for (const donate of donation) {
    total = total + donate.proposedFund;
  }
  return (
    <div className="donation-fund">
      <h4>UNDP targets: {donation.length} </h4>
      <h4>Total amount: $ {total} </h4>
      <h4>
        {donation.map((country) => (
          <Country country={country}></Country>
        ))}
      </h4>
    </div>
  );
};

export default Donation;
