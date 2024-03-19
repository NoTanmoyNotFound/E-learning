import React from 'react';
import "./Company.css"

const Company = () => {
  return (
    // ---'Saklin'----------------------->
    <div className="section c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        {/* normal view----------------- */}
        <img className='companyImages' src="./byjus.png" alt="" />
        <img className='companyImages' src="./unAca.jpg" alt="" />
        <img className='companyImages' src="./relevel.jpg" alt="" />
        <img className='companyImages' src="./MasterClass.jpg" alt="" />
        <img className='companyImages' src="./coursera.jpg" alt="" />
        <img className='companyImages' src="./udacity.jpg" alt="" />


        {/* responcive view ------------ */}
      </div>
    </div>
  )
}

export default Company;
