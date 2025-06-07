"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Code, Zap, Star, Sparkles, Cpu, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function CyberpunkPortfolio() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [currentTime, setCurrentTime] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const fullText = "@jinbao4"

  useEffect(() => {
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100)

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        // Blink cursor for a bit then hide it
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  // Update UK time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format time in UK format (GMT/BST)
      const ukTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      setCurrentTime(ukTime)
    }

    // Update immediately
    updateTime()

    // Then update every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="grid grid-cols-2 h-screen">
        {/* Left Side - Fixed Otto Section (No Scroll) */}
        <div
          className={`h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900/20 flex items-center justify-center p-8 relative border-r border-green-500/30 transition-all duration-1500 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-green-500/20"></div>
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float-particle ${8 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Centered Content */}
          <div
            className={`relative z-10 text-center space-y-8 transition-all duration-2000 delay-500 ${isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
          >
            {/* Avatar with Multiple Glow Layers */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-150"></div>
              <div className="absolute inset-0 bg-green-300/15 rounded-full blur-2xl scale-125"></div>
              <div className="absolute inset-0 bg-green-500/25 rounded-full blur-xl"></div>
              <Avatar className="w-56 h-56 border-4 border-green-400 shadow-2xl shadow-green-400/60 relative animate-float hover:shadow-green-400/80 hover:border-green-300 transition-all duration-300 transform hover:scale-105">
                <AvatarImage src="/otto.jpeg?height=224&width=224" alt="Otto the cat" />
                <AvatarFallback className="bg-green-900 text-green-400 text-7xl">🐱</AvatarFallback>
              </Avatar>
            </div>

            {/* Otto Info */}
            <div className="space-y-6">
              <div className="text-green-500/60 text-sm">^ otto</div>
              <div className="text-green-300 text-2xl font-mono glow-text-strong">
                {displayText}
                {showCursor && <span className="animate-pulse">|</span>}
              </div>
              <div className="text-green-300/80 text-xl max-w-sm mx-auto leading-relaxed space-y-2">
                <div className="hover-glow">im a junior developer</div>
                <div className="hover-glow">i love my cat</div>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="space-y-3 text-green-500/60 text-sm">
              <div className="flex items-center justify-center gap-2 hover-glow">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>just chillin</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover-glow">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>coding stuff</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover-glow">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>otto approved™</span>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 right-4 text-green-500/30 text-xs hover-glow">[OTTO.CAT]</div>
          <div className="absolute bottom-4 left-4 text-green-500/30 text-xs hover-glow">v2.0.24</div>
          <div className="absolute top-4 left-4 text-green-500/30 text-xs hover-glow">
            <Star className="w-4 h-4" />
          </div>
          <div className="absolute bottom-4 right-4 text-green-500/30 text-xs flex items-center gap-1 hover-glow">
            <Clock className="w-3 h-3" />
            <span className="font-mono">{currentTime}</span>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div
          className={`h-screen overflow-y-auto bg-black transition-all duration-1500 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="min-h-screen bg-gradient-to-b from-black via-gray-900/90 to-black p-8 space-y-8 pb-24">
            {/* Header */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="text-green-300 text-sm">{">"} hey</div>
              <h1 className="text-5xl font-bold text-green-400 glitch-text glow-text-strong">wassup</h1>
              <div className="text-green-300/70 hover-glow">{">"} this is my website i guess</div>
            </div>

            {/* What I Do */}
            <Card
              className={`bg-black/50 border-green-500/30 backdrop-blur hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/20 cyber-card duration-1000 delay-1200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3 glow-text">
                  <Code className="w-6 h-6" />
                  what i doo
                </h2>
                <div className="space-y-4 text-green-300/80 text-lg">
                  <p className="hover-glow">{">"} mostly python stuff</p>
                  <p className="hover-glow">{">"} make bots for discord and other platforms</p>
                  <p className="hover-glow">{">"} random projects when im bored</p>
                  <p className="hover-glow">{">"} otto sits next to me and judges my code</p>
                  <p className="hover-glow">{">"} idk just making stuff</p>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card
              className={`bg-black/50 border-green-500/30 backdrop-blur hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/20 cyber-card duration-1000 delay-1400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3 glow-text">
                  <Zap className="w-6 h-6" />
                  stuff i use
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Python", primary: true },
                    { name: "Discord.py", primary: true },
                    { name: "Flask", primary: true },
                    { name: "Django", primary: true },
                    { name: "React", primary: false },
                    { name: "Next.js", primary: false },
                    { name: "TypeScript", primary: false },
                    { name: "Node.js", primary: false },
                    { name: "Git", primary: false },
                    { name: "Pandas", primary: true },
                    { name: "MongoDB", primary: false },
                    { name: "PostgreSQL", primary: false },
                  ].map((skill, i) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className={`${
                        skill.primary
                          ? "border-green-500 text-green-300 bg-green-900/20"
                          : "border-green-500/50 text-green-400"
                      } hover:bg-green-500/10 hover:border-green-400 transition-all py-2 px-4 text-sm hover:shadow-md hover:shadow-green-400/30 animate-fade-in hover-glow transform hover:scale-105`}
                      style={{ animationDelay: `${1600 + i * 100}ms` }}
                    >
                      {skill.name}
                      {skill.primary && <Cpu className="ml-1 w-3 h-3 inline" />}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Random Stuff */}
            <Card
              className={`bg-black/50 border-green-500/30 backdrop-blur hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/20 cyber-card duration-1000 delay-1600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3 glow-text">
                  <Sparkles className="w-6 h-6" />
                  other stuff i doo
                </h2>
                <div className="space-y-3 text-green-300/80">
                  <p className="hover-glow">{">"} write python stuff at like 3am</p>
                  <p className="hover-glow">{">"} break things a lot</p>
                  <p className="hover-glow">{">"} pet otto probably too much</p>
                  <p className="hover-glow">{">"} try to automate random things</p>
                  <p className="hover-glow">{">"} make bots that doo weird stuff</p>
                  <p className="hover-glow">{">"} play games until my eyes hurt</p>
                  <p className="hover-glow">{">"} have way too many unfinished projects</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card
              className={`bg-black/50 border-green-500/30 backdrop-blur hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/20 cyber-card duration-1000 delay-1800 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-6 glow-text">contact me i guess</h2>
                <div className="space-y-4">
                  <p className="text-green-300/80 mb-6 hover-glow">idk maybe we can make something cool together</p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all hover:shadow-md hover:shadow-green-400/30 transform hover:scale-105"
                      onClick={() => window.open("https://github.com/jinbao4", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      github
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all hover:shadow-md hover:shadow-green-400/30 transform hover:scale-105"
                      onClick={() => window.open("https://x.com/jinbao4s", "_blank")}
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      twitter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card
              className={`bg-black/50 border-green-500/30 backdrop-blur hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/20 cyber-card duration-1000 delay-2000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-6 glow-text">random facts</h2>
                <div className="space-y-3 text-green-300/80">
                  <p className="hover-glow">{">"} my first python thing literally did nothing lol</p>
                  <p className="hover-glow">{">"} otto deleted my code once by walking on my keyboard</p>
                  <p className="hover-glow">{">"} i debug with print statements and idc what anyone says</p>
                  <p className="hover-glow">{">"} i have like 50 projects that i never finished</p>
                  <p className="hover-glow">{">"} my github looks like a mess but whatever</p>
                  <p className="hover-glow">{">"} i probably break more stuff than i fix</p>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-center text-green-500/30 text-xs pt-8 pb-16">
              <p>made with loads of pepsi cherry and loads of ottos</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
          animation: glitch 8s infinite;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-10px) translateX(5px); opacity: 0.4; }
          50% { transform: translateY(-5px) translateX(-3px); opacity: 0.3; }
          75% { transform: translateY(-15px) translateX(8px); opacity: 0.5; }
        }

        .glow-text {
          text-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e;
        }

        .glow-text-strong {
          text-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 15px #22c55e, 0 0 20px #22c55e;
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          text-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 15px #22c55e;
          color: #4ade80;
          transform: translateX(3px);
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .cyber-card {
          position: relative;
          overflow: hidden;
        }

        .cyber-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #22c55e, transparent, #22c55e, transparent);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cyber-card:hover::before {
          opacity: 0.2;
        }
      `}</style>
    </div>
  )
}
