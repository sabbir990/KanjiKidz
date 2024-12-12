import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';

export default function User_profile() {
    const {role} = useRole()
    const {user} = useAuth()

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-full"
          src={user?.photoURL}
          alt="User Profile"
        />
        <div>
          <h1 className="text-3xl font-bold">{user?.displayName}</h1>
          <p className="text-lg text-gray-600">{user?.email}</p>
          <p className="text-sm text-gray-400">
            {user?.emailVerified ? "Email Verified" : "Email Not Verified"}
          </p>
          <p>Role : <span className='font-semibold'>{role}</span></p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Account Information</h2>
        <div className="mt-4">
          <p><strong>UID:</strong> {user?.uid}</p>
          <p><strong>Phone Number:</strong> {user?.phoneNumber ? user?.phoneNumber : "N/A"}</p>
          <p><strong>Account Created At:</strong> {new Date(parseInt(user?.metadata?.createdAt)).toLocaleString()}</p>
          <p><strong>Last Login:</strong> {new Date(parseInt(user?.metadata?.lastLoginAt)).toLocaleString()}</p>
          <p><strong>Last Sign-In:</strong> {user?.metadata?.lastSignInTime}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Other Information</h2>
        <p><strong>Anonymous User:</strong> {user?.isAnonymous ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
