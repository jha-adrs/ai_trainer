"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function SocialSignInButton({
  provider,
}:{
  provider:string
}) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() =>
        signIn(provider, { callbackUrl: "/dashboard" })
      }
    >
      {
        provider === "github" ? (
          <Icons.gitHub className="w-5 h-5 mr-2" />
        ) : provider === "twitter" ? (<Icons.twitter className="w-5 h-5 mr-2" />) : provider === "google" ? (<Icons.google className="w-5 h-5 mr-2" />) : null
      }
      Continue with {
        provider === 'github' ? 'GitHub' : provider === 'twitter' ? 'Twitter' : provider === 'google' ? 'Google' : 'Provider'
      }
    </Button>
  );
}
