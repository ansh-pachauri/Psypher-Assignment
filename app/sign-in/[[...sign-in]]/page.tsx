"use client"

import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn redirectUrl="/bookshow" />
    </div>
  )
} 