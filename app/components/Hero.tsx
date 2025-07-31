"use client"


import { useRouter } from "next/navigation"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, MapPin, Users, Clock, ArrowRight, Menu, Ticket, RefreshCw, Shield } from "lucide-react"

export default function Hero() {

    const router = useRouter();
    
    const handleSignin = () => {
        router.push('/sign-in')
    }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-black">Book Your Show</span>
          </div>

          <div className="flex items-center space-x-4">
            
            <Button className="bg-black hover:bg-gray-800" 
            onClick={handleSignin}
            >Book Now</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-gray-100 text-black">
                  🎭 Live Entertainment Platform
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Book Your
                  <span className="text-black"> Dream Show</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Discover and book amazing live shows, concerts, theater performances, and exclusive events. From free
                  community shows to platinum VIP experiences - we have something for everyone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-black hover:bg-gray-800">
                  Explore Shows
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
               
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Instant booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Easy upgrades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              What You Can Do
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Your Complete Show Experience</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              From discovery to post-show memories, we've got every aspect of your entertainment journey covered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <Calendar className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Browse & Book Shows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover thousands of live shows, concerts, theater performances, and events. Book instantly with our
                  secure platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                  <RefreshCw className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Upgrade Anytime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start with any tier and upgrade your experience later. Move from Free to Platinum seamlessly before
                  the show.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Find Local Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover shows near you with our location-based search. Never miss out on local entertainment again.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-400">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Group Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Book for friends and family with group discounts. Manage multiple tickets and seating preferences
                  easily.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple payment options with bank-level security. Get instant confirmation and digital tickets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Flexible Cancellation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Life happens. Cancel or reschedule your bookings with our flexible policies and get refunds when
                  eligible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready for Your Next Show?</h2>
            <p className="text-xl text-purple-100">
              Join thousands of entertainment lovers who discover, book, and upgrade their show experiences with us.
              Start with any tier and upgrade anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-black hover:bg-gray-100">
                Browse Shows Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={handleSignin}
              >
                Sign Up Free
              </Button>
            </div>
            <p className="text-sm text-purple-200">Free registration • Instant booking • Upgrade anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Book Your Show. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
