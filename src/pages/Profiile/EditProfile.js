import SettingLayout from "components/Layout/SettingLayout";
import ProfilePictureCard from "components/User/ProfilePictureCard";
import React from "react";

const EditProfilePage = () => {
  return (
      <SettingLayout>
        <div className='container edit-profile-wrapper'>
          <form action=''>
            <div className='profile d-flex jusitify-content-between align-items-center'>
              <div className='profile-icon'>
                <div>
                  <ProfilePictureCard
                    size={80}
                    url={
                      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </SettingLayout>
  );
};

export default EditProfilePage;
