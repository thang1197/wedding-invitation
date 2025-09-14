"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Users,
  Camera,
  Plane,
  Car,
  Gift,
  Music,
  Utensils,
  Phone,
  Mail,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Header } from "./layout/header";
import { CountDown } from "./layout";
import { ParentInformation } from "./layout/parent-information";
import { BrideGroom } from "./layout/bride-groom";
import { WeddingInformation } from "./layout/wedding-information";

export function WeddingInvitation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .float-animation-delayed {
          animation: float 6s ease-in-out infinite 2s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      {/* Hero Section with Image Placeholder */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="text-center text-gray-800 p-8 bg-white/90 rounded-lg backdrop-blur-sm border border-gray-200">
              <Camera className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-lg font-medium">Your Hero Image Here</p>
              <p className="text-sm text-gray-600">Recommended: 1920x1080px</p>
            </div>
          </div>
        </div>

        {/* Overlay Content */}
        {/* Layout organized in slides */}
        <Header />

        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full float-animation"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full float-animation-delayed"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-rose-200/30 rounded-full float-animation"></div>
      </div>

      {/* CountDown */}
      <CountDown />

      {/* Parent Info */}
      <ParentInformation />

      {/* Bride Groom Info */}
      <BrideGroom />

      {/* Wedding Details */}
      <WeddingInformation />

      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Wedding Party
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Bridesmaids */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-light text-center text-gray-800 mb-8">
                Bridesmaids
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center">
                    <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-800">
                      Bridesmaid {i}
                    </h4>
                    <p className="text-sm text-gray-500">Best Friend</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div className="scroll-animate">
              <h3 className="text-2xl font-light text-center text-gray-800 mb-8">
                Groomsmen
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-800">Groomsman {i}</h4>
                    <p className="text-sm text-gray-500">Best Friend</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Travel & Stay
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-lg border-0 rounded-2xl scroll-animate hover:shadow-xl transition-all duration-300">
              <Plane className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Getting There
              </h3>
              <p className="text-gray-600 mb-4">
                Nearest Airport: JFK International
              </p>
              <p className="text-sm text-gray-500">30 minutes drive to venue</p>
            </Card>

            <Card className="p-8 text-center shadow-lg border-0 rounded-2xl scroll-animate hover:shadow-xl transition-all duration-300">
              <Car className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Parking
              </h3>
              <p className="text-gray-600 mb-4">Free valet parking available</p>
              <p className="text-sm text-gray-500">
                At both ceremony and reception
              </p>
            </Card>

            <Card className="p-8 text-center shadow-lg border-0 rounded-2xl scroll-animate hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Hotels
              </h3>
              <p className="text-gray-600 mb-4">Special rates available</p>
              <p className="text-sm text-gray-500">
                Contact us for booking codes
              </p>
            </Card>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Wedding Day Schedule
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                time: "3:30 PM",
                event: "Guest Arrival & Seating",
                icon: Users,
              },
              { time: "4:00 PM", event: "Wedding Ceremony", icon: Heart },
              {
                time: "4:30 PM",
                event: "Cocktail Hour & Photos",
                icon: Camera,
              },
              { time: "6:00 PM", event: "Reception Begins", icon: Music },
              { time: "7:00 PM", event: "Dinner Service", icon: Utensils },
              { time: "8:30 PM", event: "Dancing & Celebration", icon: Music },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg border-0 rounded-xl scroll-animate hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-800">
                      {item.event}
                    </div>
                    <div className="text-rose-500 font-medium">{item.time}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Memories</h2>
            <div className="w-24 h-px bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 scroll-animate hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-center text-gray-400">
                  <Camera className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-xs">Photo {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Gift Registry
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-8"></div>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Your presence is the greatest gift, but if you'd like to celebrate
              with us, we've registered at a few of our favorite places.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Target", color: "from-red-400 to-red-500" },
                { name: "Williams Sonoma", color: "from-blue-400 to-blue-500" },
                {
                  name: "Crate & Barrel",
                  color: "from-green-400 to-green-500",
                },
              ].map((store, index) => (
                <Card
                  key={store.name}
                  className="p-6 shadow-lg border-0 rounded-xl scroll-animate hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${store.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {store.name}
                  </h3>
                  <Button
                    variant="outline"
                    className="border-rose-300 text-rose-600 hover:bg-rose-50 bg-transparent"
                  >
                    View Registry
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-50">
        <div className="max-w-2xl mx-auto text-center scroll-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-6">
            Please RSVP
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-8"></div>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Your presence would make our special day even more meaningful.
            Please let us know if you can join us by{" "}
            <strong>May 1st, 2024</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Yes, I'll be there!
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-medium px-12 py-4 rounded-full bg-transparent hover:scale-105 transition-all"
            >
              Sorry, can't make it
            </Button>
          </div>

          <div className="text-gray-500 space-y-2">
            <p>Questions? Contact us:</p>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <p className="font-medium">sarah.michael.wedding@email.com</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <p className="font-medium">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="max-w-2xl mx-auto text-center scroll-animate">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400 float-animation" />
          </div>
          <p className="text-gray-300 mb-4">
            We can't wait to celebrate with our favorite people!
          </p>
          <p className="text-sm text-gray-400">#SarahAndMichael2024</p>
        </div>
      </footer>
    </div>
  );
}
