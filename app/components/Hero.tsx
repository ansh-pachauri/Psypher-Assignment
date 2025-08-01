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
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-black">
              <Ticket className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Book Your Show</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              className="bg-black hover:bg-gray-800 text-sm sm:text-base px-3 sm:px-4" 
              onClick={handleSignin}
            >
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden">Book</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-gray-100 text-black text-xs sm:text-sm">
                  🎭 Live Entertainment Platform
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  Book Your
                  <span className="text-black block sm:inline"> Dream Show</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  Discover and book amazing live shows, concerts, theater performances, and exclusive events. From free
                  community shows to platinum VIP experiences - we have something for everyone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 bg-black hover:bg-gray-800">
                  Explore Shows
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span>Instant booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span>Easy upgrades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="secondary" className="w-fit mx-auto text-xs sm:text-sm">
              What You Can Do
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Your Complete Show Experience</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
              From discovery to post-show memories, we&apos;ve got every aspect of your entertainment journey covered.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-black text-white">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Ready for Your Next Show?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed">
              Join thousands of entertainment lovers who discover, book, and upgrade their show experiences with us.
              Start with any tier and upgrade anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 bg-white text-black hover:bg-gray-100">
                Browse Shows Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={handleSignin}
              >
                Sign Up Free
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-purple-200">Free registration • Instant booking • Upgrade anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 sm:py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">© {new Date().getFullYear()} Book Your Show. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
