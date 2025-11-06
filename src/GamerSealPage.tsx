import { Shield, CheckCircle, Users, Trophy, ArrowRight, X, Mail, User, Building2, MessageSquare, Zap, Link2, Code } from "lucide-react";
import { useState } from "react";

export default function GamerSealPage() {
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
                <p className="text-slate-600">Discuss GamerSeal integration for your platform</p>
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Platform / Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your platform name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your platform and integration needs..."
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

      {/* Hero Section - Exposition */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100 font-medium">Behavioral Trust Layer for Esports</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              GamerSeal
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Verifiable player identity without KYC friction.<br />
              Powered by gameplay behavior, not documents.
            </p>
          </div>

          {/* Three Proof Paths */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Peer Proof",
                desc: "Community validation by teammates and organizers.",
                color: "from-blue-500 to-cyan-500",
                icon: Users
              },
              {
                title: "Pay Proof",
                desc: "Verified participation in paid events or prize transactions.",
                color: "from-green-500 to-emerald-500",
                icon: Trophy
              },
              {
                title: "Pair Proof",
                desc: "Cross-platform linkage of accounts proving consistency.",
                color: "from-purple-500 to-pink-500",
                icon: Link2
              }
            ].map((proof, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${proof.color} rounded-lg flex items-center justify-center mb-4`}>
                  <proof.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{proof.title}</h3>
                <p className="text-sm text-slate-300">{proof.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400">
            Each Seal evolves as players accumulate verifiable actions across these paths.
          </p>
        </div>
      </section>

      {/* Demonstration Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              See How Trust Grows Through Behavior
            </h2>
            <p className="text-lg text-slate-600">
              Interactive demonstration of GamerSeal in action
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

          {/* Browser Frame Demo */}
          <div className="bg-slate-200 rounded-xl p-4 shadow-2xl">
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
                    ? "platform.example/tournament/settings"
                    : "platform.example/tournament/register"
                  }
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 min-h-[400px]">
              {demoView === "organizer" ? (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Tournament Settings</h3>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">GamerSeal Integration</h4>
                        <p className="text-sm text-slate-700 mb-4">
                          Enable verified player tournaments with behavioral trust
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id="enable-gseal"
                              className="w-5 h-5 text-purple-600 rounded"
                              defaultChecked
                            />
                            <label htmlFor="enable-gseal" className="font-medium text-slate-900">
                              Enable GamerSeal for this tournament
                            </label>
                          </div>

                          <div className="ml-8 bg-white rounded-lg p-4 border border-purple-200">
                            <div className="text-xs text-slate-600 mb-2">Expected Benefits:</div>
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="text-lg font-bold text-purple-600">Verified</div>
                                <div className="text-xs text-slate-600">Player Identity</div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-purple-600">Auto</div>
                                <div className="text-xs text-slate-600">Skill Matching</div>
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
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Tournament Registration</h3>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-slate-900 text-lg">GamerSeal Required</h4>
                          <div className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full">
                            VERIFIED ONLY
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-4">
                          This tournament requires a GamerSeal for fair competition.
                        </p>

                        <div className="bg-white rounded-lg p-4 border border-cyan-200 mb-4">
                          <div className="text-xs font-semibold text-slate-700 mb-3">How to Get Your Seal:</div>
                          <div className="space-y-2">
                            {[
                              "Visit seal.gseal.gg and link your game account",
                              "Build trust through Peer/Pay/Pair proofs",
                              "Receive your Seal tier (Bronze/Silver/Gold)",
                              "Return and register - you're now eligible"
                            ].map((step, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 text-cyan-700 font-bold">
                                  {i + 1}
                                </div>
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-cyan-200">
                          <div className="text-xs text-slate-600 mb-2">Your Seal Status:</div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl">
                              🥇
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-sm">Gold Seal</div>
                              <div className="text-xs text-slate-600">Verified through Peer + Pay + Pair proofs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Proof Points */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col gap-2 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <div className="text-sm font-semibold text-slate-900 mb-2">Proof Points:</div>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>GameScrobbler: 5K+ organic installs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Prototype integrations: Toornament, Battlefy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Live demo: dataport.games/gseal/demo</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-600 mt-6">
            <strong>This is not anti-cheat.</strong> GamerSeal looks for <em>positive proof</em> of legitimate behavior.
          </p>
        </div>
      </section>

      {/* Integration Section - Procedure */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Integration Made Simple
            </h2>
            <p className="text-lg text-slate-600">
              API-First. Read-Only. No Core Changes Required.
            </p>
          </div>

          {/* Three Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Connect",
                desc: "Webhook or public tournament API integration",
                icon: Link2,
                color: "blue"
              },
              {
                step: "2",
                title: "Embed",
                desc: "Widget delivers Seal status to your UI",
                icon: Code,
                color: "green"
              },
              {
                step: "3",
                title: "Deploy",
                desc: "2-week pilot with select organizers",
                icon: Zap,
                color: "purple"
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <div className="text-sm font-bold text-slate-500 mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Technical Attributes */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "API-first add-on model",
              "Read-only by default",
              "Embeddable widgets or REST endpoints",
              "No platform modifications needed"
            ].map((attr, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{attr}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600 mt-8">
            We handle verification logic. Your team focuses on core platform.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Add Behavioral Trust to Your Platform?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            30-minute call • Technical spec review • Pilot structure discussion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.app.google/fZsRh6ZViBYLHfUBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Download One-Pager
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 text-white/80 text-sm">
            <div className="font-semibold mb-1">Ebrahim Eskandari</div>
            <div>
              <a href="mailto:ebrahim@gaescrobbler.com" className="underline hover:text-white">ebrahim@gaescrobbler.com</a>
              {" • "}
              <a href="https://dataport.games/gseal" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">dataport.games/gseal</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-indigo-400" />
          <span className="text-white font-semibold">GamerSeal</span>
          <span>•</span>
          <span>Behavioral Trust Layer for Esports</span>
        </div>
      </footer>
    </div>
  );
}
