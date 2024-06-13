import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PostModal = ({ setOpen, open, data }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div id='carouselExampleIndicators' className='carousel slide'>
            <div className='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='0'
                className='active'
                aria-current='true'
                aria-label='Slide 1'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'
              ></button>
            </div>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src='https://images.unsplash.com/photo-1599110364762-eba33ec21988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='img-fluid'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://images.unsplash.com/photo-1599110364762-eba33ec21988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='d-block w-100'
                  alt='...'
                />{" "}
              </div>
              <div className='carousel-item'>
                <img
                  src='https://images.unsplash.com/photo-1599110364762-eba33ec21988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='d-block w-100'
                  alt='...'
                />{" "}
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PostModal;
