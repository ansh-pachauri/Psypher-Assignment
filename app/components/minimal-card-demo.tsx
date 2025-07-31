
"use client"

import { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types';
import { getEvents } from '../actions/getEvents'
import { updateUserTier } from '../actions/updatetier';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Star, Crown, Award, Gem, User } from "lucide-react"
import Image from "next/image"


interface Event {
  id: string;
  title: string;
  description: string;
  image_url: string;
  event_date: string;
  tier: string;
}

export default function EventsPage() {
  const { user } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [tier, setTier] = useState('free');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.publicMetadata?.tier) {
      setTier(user.publicMetadata.tier as string);
    }
  }, [user]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (tier) {
        const eventsData = await getEvents(tier as ReferrerEnum);
        setEvents(eventsData);
      }
    };
    fetchEvents();
  }, [tier]);

  const handleUserTier = async () => {
    await updateUserTier("platinum");
    setTier("platinum");
  };

  const getTierIcon = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case "free":
        return <Star className="w-4 h-4" />
      case "silver":
        return <Award className="w-4 h-4" />
      case "gold":
        return <Crown className="w-4 h-4" />
      case "platinum":
        return <Gem className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const getTierBadgeVariant = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case "free":
        return "secondary" as const
      case "silver":
        return "outline" as const
      case "gold":
        return "default" as const
      case "platinum":
        return "destructive" as const
      default:
        return "secondary" as const
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
    <div>
    <div className="min-h-screen bg-white">
      {/* Header with User Info */}
      <div className="border-b border-gray-200 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-3xl font-bold">Book Your Show</h1>
              <p className="text-gray-300 mt-1">Discover amazing events</p>
            </div>

            {/* User Info in Top Right */}
            {user && (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{user.fullName || user.firstName}</p>
                  <div className="flex items-center justify-end space-x-1">
                    {getTierIcon(tier)}
                    <span className="text-xs text-gray-300 capitalize">{tier} Member</span>
                  </div>
                </div>
                <Avatar className="border-2 border-white">
                  <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
                  <AvatarFallback className="bg-gray-700 text-white">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tier Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-black">Events for</h2>
            <Badge variant={getTierBadgeVariant(tier)} className="text-sm px-3 py-1 flex items-center space-x-1">
              {getTierIcon(tier)}
              <span className="capitalize">{tier} Tier</span>
            </Badge>
          </div>

          <Button
            onClick={handleUserTier}
            className="bg-black hover:bg-gray-800 text-white border border-black hover:border-gray-800 transition-all duration-200"
            size="lg"
            disabled={tier === "platinum"}
          >
            <Crown className="w-4 h-4 mr-2" />
            {tier === "platinum" ? "Platinum Member" : "Upgrade to Platinum"}
          </Button>
        </div>

        {/* Events Grid */}
        {events.length === 0 ? (
          <div className="border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50">
            <div className="flex flex-col items-center justify-center py-16 px-6">
              <div className="text-gray-300 mb-6">
                <Calendar className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">No Events Available</h3>
              <p className="text-gray-600 text-center max-w-sm text-sm leading-relaxed">
                No events are currently available for your {tier} tier. Check back later or upgrade your membership for
                access to more events.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={event.image_url}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tier Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
                      {getTierIcon(event.tier)}
                      <span className="text-xs font-medium text-gray-700 capitalize">{event.tier}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {event.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Date */}
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {new Date(event.event_date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    </div>
    </div>
        
  )
}



