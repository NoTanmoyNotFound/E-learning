import React from 'react'

import BlogsContainer from '../BlogsContainer'
import Banner from './Banner/Banner'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'


const Homeblogs = () => {
  return (
    <div>
      <div className="blogsBody" style={{}}>
        <Header />
        <Banner />
        <BlogsContainer />
      </div>
      <Footer />
    </div>
  )
}

export default Homeblogs;
