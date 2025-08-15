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

  



interface SignInFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}


    // return (
    //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //     <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
    //       <h1 className="mb-6 text-2xl font-bold text-center">{t("signIn.title")}</h1>
    //       <SignInForm onSubmit={handleSignIn} />
    //     </div>)

}
