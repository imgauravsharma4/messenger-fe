import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostModal from "components/Models/PostModal";
import Post from "components/Posts/Post";
import React, { useState } from "react";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);

  const handleModalOpen = (data) => {
    console.log("item", data);
    setData(data);
    setOpen(true);
  };
  return (
    <div className='mt-5'>
      <div className='container profile-max-width'>
        <div className='row align-items-center'>
          <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 text-center'>
            <div className='profile-picture m-auto'>
              <img
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12'>
            <div className='profile-top-section'>
              <p className='username'>username</p>
              <button className='tertiary-button button'>Edit Profile</button>
              <span>
                <FontAwesomeIcon icon={faGear} />
              </span>
            </div>
            <div className='profile-middle-section my-3'>
              <p className='post'>
                <strong>3</strong> posts
              </p>
              <p className='post'>
                <strong>3</strong> follewers
              </p>
              <p className='post'>
                <strong>3</strong> followings
              </p>
            </div>
            <div className='profile-bottom-section'>
              <p className='fullname'>Fullname</p>
              <p className='bio'>bio</p>
            </div>
          </div>
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
            <div className='tab-wrapper'>
              <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                <li class='nav-item' role='presentation'>
                  <button
                    class='nav-link active'
                    id='pills-home-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-home'
                    type='button'
                    role='tab'
                    aria-controls='pills-home'
                    aria-selected='true'
                  >
                    Post
                  </button>
                </li>
                <li class='nav-item' role='presentation'>
                  <button
                    class='nav-link'
                    id='pills-profile-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-profile'
                    type='button'
                    role='tab'
                    aria-controls='pills-profile'
                    aria-selected='false'
                  >
                    Saved
                  </button>
                </li>
                <li class='nav-item' role='presentation'>
                  <button
                    class='nav-link'
                    id='pills-contact-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-contact'
                    type='button'
                    role='tab'
                    aria-controls='pills-contact'
                    aria-selected='false'
                  >
                    Tagged
                  </button>
                </li>
              </ul>
            </div>
            <div class='tab-content' id='pills-tabContent'>
              <div
                class='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
                tabindex='0'
              >
                <div className='row'>
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 p-0'>
                      <Post item={item} handleClick={handleModalOpen} />
                    </div>
                  ))}
                  <PostModal setOpen={setOpen} open={open} data={data}/>
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='pills-profile'
                role='tabpanel'
                aria-labelledby='pills-profile-tab'
                tabindex='0'
              >
                saved
              </div>
              <div
                class='tab-pane fade'
                id='pills-contact'
                role='tabpanel'
                aria-labelledby='pills-contact-tab'
                tabindex='0'
              >
                Tagged
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
