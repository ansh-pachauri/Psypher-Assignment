import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Page (){
    return (
        <div>
        <div>
            Welcome to filer page
        </div>
        <div>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
                <SignedIn>
                    <UserButton showName/>
                </SignedIn>
            </header>
        </div>
        </div>
    )
}