import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  const [uploadVideoServerRespnse,setuploadVideoServerRespnse] =useState({});
  return (
    <>
    <div className="container mb-5 mt-5 d-flex justify-content-between align-items-center">
      <Add setuploadVideoServerRespnse={setuploadVideoServerRespnse}/>
      <Link to={'/watch-history'} className='fs-5' style={{textDecoration:'none',color:'white'}}> Watch History
      </Link>
    </div>
    <div className="mt-5 mb-5 container-fluid d-flex justify-content-between">
      <div className="allVideos col-lg-8">
        <h3>All videos</h3>
       <View uploadVideoServerRespnse={uploadVideoServerRespnse}/>
      </div>
      <div className='col-lg-1'></div>
     <div className='col-lg-3'> <Category/></div>
    </div>

    </>
  )
}

export default Home