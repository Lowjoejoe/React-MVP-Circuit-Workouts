import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AboutUs = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 

  return (
    <div>
      <a className='AboutUs' onClick={()=>setShow(!show)}>about the WCW</a>
      <Modal show={show} onHide={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>All about the WCW</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>The Warrior Circuit Workout out was brought about do to the need to be able to develop and populate circuit workouts on the fly. 
                To be able to get you inspired when you need it most. Here's how to get started </p>
            <p>1. Browses through our workout list.</p>
            <p>2. Select exercises that you would like to add to your circuit.</p>
            <p>3. Get to working out! </p>
            <p>4. If you have a workout that you love and we don't have it go ahead and add it.</p>
            <p>Have a Great Workout</p>
        </Modal.Body>
      </Modal>
      </div>
   
  )
}

export default AboutUs 
