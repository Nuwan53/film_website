"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"  
import { SignInForm } from "@/components/SignInForm"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "react-i18next"


export default function SignIn() {
  const { t } = useTranslation()
  const router = useRouter()
  const { login } = useAuth()
  const { toast } = useToast()

  const handleSignIn = async (email: string, password: string) => {
    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: t("signIn.error.title"),
        description: t("signIn.error.description"),
        variant: "destructive",
      })
    }
  }
}

////////////////////////////////////////////////////////
function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Sign In Page</h1>
    </div>
  );
}

export default SignIn;
