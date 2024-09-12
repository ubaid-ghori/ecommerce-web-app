// AuthProvider.js
"use client"; // Add this directive to mark it as a client component

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
