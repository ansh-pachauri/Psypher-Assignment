"use client"


import { useRouter } from "next/navigation"

export default function Hero() {
    const router = useRouter();
    
    const handleSignin = () => {
        router.push('/signin')
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">
                Welcome to event/show booking place
            </h1>
            
            <button 
                onClick={handleSignin}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Sign in for book
            </button>   
        </div>
    )
} 