import React from 'react'
import { Navbar ,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 

function Header() {
  return (
    <div>
        <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className='fw-bolder fs-5'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}} >
              <i className="fa-solid fa-cloud-arrow-up fa-bounce "></i>{' '}
                Media Player
                </Link>
              </Navbar.Brand>
        
        </Container>
      </Navbar>
    </div>
  )
}

export default Header