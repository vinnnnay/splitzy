import React from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton, SignIn
} from '@clerk/nextjs'
const signinpage = () => {
  return (
    <div>
           <SignedOut>
                     <SignIn/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      
    </div>
  );
}

export default signinpage;

