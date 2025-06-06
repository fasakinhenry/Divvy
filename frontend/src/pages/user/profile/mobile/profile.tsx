import { LogOut, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Outlet, useNavigate } from 'react-router-dom';
import EditableImage from '@/ui/profile/editableImage/EditableImage';
import useAuthStore from '@/store/useAuthStore';
import { useEffect, useState } from 'react';

export default function MobileProfile() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [profileData, setProfileData] = useState({
    fullName: 'User Profile', // Default placeholder
    profileImage: '/animoji.svg', // Default placeholder image
  });

  // Fetch user details and initialize profile data
  useEffect(() => {
    if (user) {
      setProfileData({
        fullName: user.fullName || 'User Profile',
        profileImage: user.profileImage || '/animoji.svg',
      });
    } else if (!isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/auth/login');
    }
  }, [user, isAuthenticated, navigate]);

  return (
    <div className='w-full max-w-[96%] h-full bg-white dark:bg-ash-black p-6 rounded-lg shadow-sm mx-auto md:hidden'>
      <ArrowLeft
        type='button'
        role='button'
        className='cursor-pointer'
        onClick={() => navigate(-1)}
      />
      <div className='flex justify-center w-full mb-3'>
        <EditableImage
          src={profileData.profileImage}
          editable={false}
          onChange={() => {}}
        />
      </div>

      {/* Dynamically update the heading content with the user's name */}
      <h5 className='text-2xl font-medium text-center mb-6'>
        {profileData.fullName}
      </h5>

      <div className='space-y-4'>
        <Button
          variant='ghost'
          className='w-full border rounded-md justify-between px-4 py-6 hover:opacity-45'
          onClick={() => navigate('edit')}
        >
          <div className='flex items-center gap-3'>
            <span>Edit Profile Details</span>
          </div>
          <ArrowRight className='h-6 w-6' />
        </Button>

        <Button
          variant='ghost'
          className='w-full border rounded-md justify-between px-4 py-6 hover:opacity-45'
          onClick={() => navigate('change-password')}
        >
          <div className='flex items-center gap-3'>
            <span>Change Password</span>
          </div>
          <ArrowRight className='h-6 w-6' />
        </Button>

        <Button
          variant='ghost'
          className='w-full border border-light-red rounded-md justify-between px-4 py-6 text-light-red hover:bg-red-50'
        >
          <span>Log Out</span>
          <LogOut className='h-5 w-5' />
        </Button>
      </div>

      <Outlet />
    </div>
  );
}
