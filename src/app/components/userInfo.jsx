"use client";
import React from 'react';
import { signOut } from 'next-auth/react';

const UserINfo = () => {
  return (
    <div>
      <h1>john</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default UserINfo;
