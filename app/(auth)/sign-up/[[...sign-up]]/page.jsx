
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton, SignUp
} from '@clerk/nextjs'
const signuppage = () => {
  return (
     <div>
         <SignedOut>
             <SignUp/>

          </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      
    </div>
  );
}

export default signuppage;
