import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from "next/server";


export default authMiddleware({

  // afterAuth(auth, req, evt) {

  //   // handle users who aren't authenticated

  //   if (!auth.userId && !auth.isPublicRoute) {

  //     return redirectToSignIn({ returnBackUrl: req.url });

  //   }

  // }

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
