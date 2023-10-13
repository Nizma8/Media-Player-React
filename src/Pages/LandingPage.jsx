import React from 'react'
import{Row,Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  // rediredirection to home component-hook useParams
  const navigateByURl =useNavigate()
  const navigate=()=>{
      navigateByURl('/home')
  }
  return (
 




    <>
      <Row className='mt-5 mb-1 align-items-center justify-content-between'>
        <Col></Col>
        <Col lg={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content. Definitions of music vary depending on culture, though it is an aspect of all human societies and a cultural universal.</p>
          <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ps-5' lg={6}>
          <img className='img-fluid ms-5 ps-5' src="https://www.disqo.com/wp-content/uploads/2023/05/Illustration_Media_Dark-BG.png" alt="landing" />

        </Col>
      </Row>
      <div className='container  d-flex justify-content-center align-items-center flex-column'>
        <h3 className='mb-5'>Features</h3>
        <div className='cards d-flex justify-content-between w-75 align-items-center '>
          {/* The code of each Card gets from https://react-bootstrap.github.io/docs/components/cards/ */}
          <Card className='p-3 bg-black' style={{ width: '18rem' }}>
        <Card.Img height={'300px'}  variant="top" src="https://i.pinimg.com/originals/93/2f/d0/932fd00d9b43753061c47739f0cc777b.gif" className='  shadow-lg border border-light' />
        <Card.Body >
          <Card.Title>Managing Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
         </Card>
         <Card className='p-3 bg-black' style={{ width: '18rem' }}>
        <Card.Img height={'300px'}  variant="top" src="https://clipart-library.com/images/pc7reEGKi.gif" className=' shadow-lg border border-light'/>
        <Card.Body >
          <Card.Title>Categories videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
         </Card>
         <Card className='p-3 bg-black' style={{ width: '18rem' }}>
        <Card.Img height={'300px'}  variant="top" src="https://digitalsynopsis.com/wp-content/uploads/2015/10/gif-icons-menu-transition-animations-play.gif" className=' shadow-lg' />
        <Card.Body >
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
         </Card>
        </div>
        <div className='container main mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center'>
          <div className='content w-100'>
            <h3 className='text-warning mb-5'>Simple,Fast and Powerful</h3>
            <h6 className='lh-base'><span className='fs-5 fw-bolder mb-2'>Play Everything</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit eos incidunt sequi perspiciatis minus ipsa cupiditate deleniti velit voluptas vitae molestiae eum ducimus neque quo quia dolore, repellendus nam!</h6>
            <h6 className='lh-base'><span className='fs-5 fw-bolder mb-2'>Categorise Videos</span><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit eos incidunt sequi perspiciatis minus ipsa cupiditate deleniti velit voluptas vitae molestiae eum ducimus neque quo quia dolore, repellendus nam!</h6>
            <h6 className='lh-base'><span className='fs-5 fw-bolder mb-2'>Managing History</span > <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit eos incidunt sequi perspiciatis minus ipsa cupiditate deleniti velit voluptas vitae molestiae eum ducimus neque quo quia dolore, repellendus nam!</h6>

          </div>
          <div className='video ms-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ukgraQ-xkp4?si=gs9LbxlGDRtHdcM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>

      </div>

    </>

    
  )
}

export default LandingPage