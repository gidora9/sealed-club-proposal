import { Shield, CheckCircle, Users, Trophy, ArrowRight, X, Mail, User, Building2, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ProposalPage() {
  const [demoView, setDemoView] = useState<"organizer" | "player">("organizer");
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setShowContactForm(false);
      setFormSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Form Overlay */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Let's Connect</h2>
                <p className="text-slate-600">Schedule a 30-minute discovery call</p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Toornament (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your interest in Sealed Club..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Simplified Hero */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-100 font-medium">Partnership Proposal for Toornament</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Give Pro & Circuit Users<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              A Feature Competitors Can't Copy
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Player verification & fair bracketing that only works through tournament platforms. Give verified players a reason to choose your platform.
          </p>
        </div>
      </section>

      {/* The Value (Simplified) */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Why Sealed Club is Perfect for Toornament
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Feature Differentiation",
                desc: "Offer Sealed Club exclusively in Pro/Circuit tiers. Verified players get skill-matched brackets - a feature competitors can't easily replicate."
              },
              {
                title: "Attract Serious Competitors",
                desc: "Players who earn seals invest time in verification. They're more engaged, more likely to return, and value platforms that recognize their legitimacy."
              },
              {
                title: "Simple Integration",
                desc: "One API endpoint. We handle verification, seal assignment, and bracketing logic. Your team focuses on core platform features."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo - Toornament Native UI with Browser Frame */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              See How It Works in Your Platform
            </h2>
            <p className="text-slate-600">
              Sealed Club integrates seamlessly into Toornament's existing UI
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setDemoView("organizer")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                demoView === "organizer"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-300 hover:border-indigo-300"
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Organizer View
            </button>
            <button
              onClick={() => setDemoView("player")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                demoView === "player"
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-300 hover:border-cyan-300"
              }`}
            >
              <Trophy className="w-4 h-4 inline mr-2" />
              Player View
            </button>
          </div>

          {/* Browser Frame */}
          <div className="bg-slate-200 rounded-t-xl p-3 shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600 font-mono">
                  {demoView === "organizer" 
                    ? "toornament.com/organizer/game-scrub/settings/registration"
                    : "toornament.com/tournaments/game-scrub/register"
                  }
                </span>
              </div>
            </div>

            {/* Toornament-Style Demo */}
            <div className="bg-white rounded-lg overflow-hidden border border-slate-300">
              <div className="flex">
                {/* Sidebar (Toornament Style) */}
                <div className="w-64 bg-[#2B2D42] text-white p-6 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="font-bold">{demoView === "organizer" ? "Organizer" : "Player"}</span>
                  </div>

                  <div className="space-y-1">
                    {demoView === "organizer" ? (
                      <>
                        <div className="px-3 py-2 text-cyan-400 bg-cyan-400/10 rounded font-medium text-sm">
                          Overview
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Settings
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Structure
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Participants
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Placement
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Matches
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="px-3 py-2 text-cyan-400 bg-cyan-400/10 rounded font-medium text-sm">
                          My Tournaments
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Discover
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          My Profile
                        </div>
                        <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded cursor-pointer text-sm">
                          Settings
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    {demoView === "organizer" ? (
                      <>
                        <div className="text-xs text-slate-500 mb-2">Tournament</div>
                        <div className="font-semibold text-sm">Game Scrub</div>
                        <div className="text-xs text-slate-400">Rocket League</div>
                      </>
                    ) : (
                      <>
                        <div className="text-xs text-slate-500 mb-2">Player</div>
                        <div className="font-semibold text-sm">ProGamer_2024</div>
                        <div className="text-xs text-slate-400">Rocket League</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-slate-50 max-h-[600px] overflow-y-auto">
                  {demoView === "organizer" ? (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">Registration Settings</h2>
                      
                      {/* Tabs */}
                      <div className="flex gap-6 border-b border-slate-300 mb-6">
                        <div className="pb-3 border-b-2 border-cyan-500 text-cyan-600 font-medium cursor-pointer">
                          Configuration
                        </div>
                        <div className="pb-3 text-slate-500 cursor-pointer">Customization</div>
                        <div className="pb-3 text-slate-400 cursor-pointer">Payment</div>
                        <div className="pb-3 text-slate-500 cursor-pointer">Notification</div>
                      </div>

                      {/* Sealed Club Section (NEW!) */}
                      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="font-bold text-slate-900 text-lg">GSeal Sealed Club</h3>
                                <p className="text-sm text-slate-600">Verified player bracketing for fair competition</p>
                              </div>
                              <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                PRO FEATURE
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  id="enable-sealed"
                                  className="w-5 h-5 text-purple-600 rounded"
                                  defaultChecked
                                />
                                <label htmlFor="enable-sealed" className="font-medium text-slate-900 cursor-pointer">
                                  Enable Sealed Club for this tournament
                                </label>
                              </div>

                              <div className="ml-8 space-y-3">
                                <div className="flex items-center gap-3">
                                  <input
                                    type="checkbox"
                                    id="exclusive-mode"
                                    className="w-5 h-5 text-purple-600 rounded"
                                  />
                                  <label htmlFor="exclusive-mode" className="text-sm text-slate-700 cursor-pointer">
                                    Sealed Club Only (exclude non-verified players)
                                  </label>
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-purple-200">
                                  <div className="text-xs text-slate-600 mb-2">Expected Benefits:</div>
                                  <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                      <div className="text-lg font-bold text-purple-600">95%</div>
                                      <div className="text-xs text-slate-600">Player Join Rate</div>
                                    </div>
                                    <div>
                                      <div className="text-lg font-bold text-purple-600">Auto</div>
                                      <div className="text-xs text-slate-600">Bracket Generation</div>
                                    </div>
                                    <div>
                                      <div className="text-lg font-bold text-purple-600">Zero</div>
                                      <div className="text-xs text-slate-600">Manual Work</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Existing Toornament Settings */}
                      <div className="bg-white rounded-lg p-6 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-4">General</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-slate-700 mb-2">Enable tournament registration?</div>
                            <div className="flex gap-4">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="registration" className="w-4 h-4" defaultChecked />
                                <span className="text-sm">Yes</span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="registration" className="w-4 h-4" />
                                <span className="text-sm">No</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">Tournament Registration</h2>
                      
                      {/* Tournament Info */}
                      <div className="bg-white rounded-lg p-6 border border-slate-200 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold text-slate-900">Game Scrub Championship</h3>
                              <div className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                SEALED CLUB
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">Rocket League • 32 Players • Nov 15, 2025</div>
                          </div>
                        </div>
                      </div>

                      {/* Sealed Club Invitation (NEW!) */}
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-slate-900 text-lg">Join Sealed Club</h3>
                              <div className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full">
                                REQUIRES GSEAL
                              </div>
                            </div>
                            <p className="text-sm text-slate-700 mb-4">
                              This tournament uses Sealed Club for fair competition. <strong>You need a GSeal to participate.</strong>
                            </p>

                            <div className="bg-white rounded-lg p-4 border border-cyan-200 mb-4">
                              <div className="text-xs font-semibold text-slate-700 mb-3">How to Get Your GSeal:</div>
                              <div className="space-y-2">
                                <div className="flex items-start gap-2 text-xs text-slate-700">
                                  <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-700 font-bold">1</div>
                                  <span>Visit <strong>seal.gseal.gg</strong> and link your Rocket League account</span>
                                </div>
                                <div className="flex items-start gap-2 text-xs text-slate-700">
                                  <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-700 font-bold">2</div>
                                  <span>We verify your account age (24+ months) + skill rank</span>
                                </div>
                                <div className="flex items-start gap-2 text-xs text-slate-700">
                                  <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-700 font-bold">3</div>
                                  <span>Receive Bronze/Silver/Gold seal based on your rank</span>
                                </div>
                                <div className="flex items-start gap-2 text-xs text-slate-700">
                                  <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-700 font-bold">4</div>
                                  <span>Return here and register - you're now eligible for Sealed Club</span>
                                </div>
                              </div>
                              <div className="mt-3 pt-3 border-t border-cyan-100">
                                <a href="https://seal.gseal.gg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700">
                                  Get Your GSeal Now →
                                </a>
                              </div>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                              <div className="flex items-start gap-2">
                                <div className="text-amber-600 text-lg">⚠️</div>
                                <div className="text-xs text-amber-800">
                                  <strong>Don't have a GSeal yet?</strong> Get yours at seal.gseal.gg (takes 2 minutes). You'll need it to register for this Sealed Club tournament.
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 border border-cyan-200">
                              <div className="text-xs text-slate-600 mb-2">Your GSeal Status:</div>
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl">
                                  🥇
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900 text-sm">Gold Seal</div>
                                  <div className="text-xs text-slate-600">Account: 36 months • Rank: Diamond II</div>
                                </div>
                              </div>
                              <div className="text-xs text-slate-700 pt-2 border-t border-cyan-100">
                                ✓ Eligible for Sealed Club tournaments<br/>
                                ✓ Will be matched with Gold tier players
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Standard Registration Form */}
                      <div className="bg-white rounded-lg p-6 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-4">Player Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-slate-700 mb-1">In-game name</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                              placeholder="Enter your in-game name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-slate-700 mb-1">Email</label>
                            <input
                              type="email"
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-slate-600">
            ↑ This is how Sealed Club appears in your existing Toornament UI - no disruption, just enhancement
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Give Your Users a Competitive Advantage?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            30-minute call • No commitment • See the full integration
          </p>
          
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center gap-3 bg-white text-indigo-600 hover:bg-slate-50 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            <Mail className="w-6 h-6" />
            Schedule Discovery Call
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="mt-6 text-white/80 text-sm">
            Or email: <a href="mailto:partnerships@toornament.com" className="underline hover:text-white">partnerships@toornament.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-indigo-400" />
          <span className="text-white font-semibold">GSeal Sealed Club</span>
          <span>•</span>
          <span>Partnership Proposal for Toornament</span>
        </div>
      </footer>
    </div>
  );
}
