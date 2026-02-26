import { FadeIn } from '../Animations';
import { Send, MapPin, Phone } from 'lucide-react';

export function CTASection() {
    return (
        <section id="contacts" className="relative w-full py-32 px-6 md:px-12 bg-background border-t border-border/50">
            {/* Ambient Animated Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

                {/* Header Sequence */}
                <FadeIn className="w-full text-center space-y-6 mb-16 md:mb-24">
                    <div className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-medium tracking-widest uppercase text-primary shadow-sm backdrop-blur-md">
                        Get In Touch
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-foreground">
                        Begin your journey to <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary/60">natural balance</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Whether you have questions about our methodology or are ready to schedule your first diagnostic session, we are here to support your holistic healing.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">

                    {/* Left: Contact Form (Takes up 7 cols) */}
                    <FadeIn delay={0.1} direction="up" className="lg:col-span-7 w-full h-full">
                        <form className="bg-card/80 backdrop-blur-2xl border border-border/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(74,58,52,0.15)] h-full flex flex-col justify-between group transition-all duration-500 hover:border-primary/30 relative overflow-hidden">
                            {/* Subtle Hover Gradient */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="space-y-8 relative z-10 w-full mb-12">
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-light text-foreground mb-2">Send a Message</h3>
                                    <p className="text-muted-foreground font-light text-sm md:text-base">We typically reply within 2 hours during business days.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground/80 ml-1">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe" className="w-full bg-background/50 border border-border/50 rounded-2xl px-5 py-4 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:bg-background focus:border-primary/50 transition-all font-light" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground/80 ml-1">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com" className="w-full bg-background/50 border border-border/50 rounded-2xl px-5 py-4 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:bg-background focus:border-primary/50 transition-all font-light" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-foreground/80 ml-1">Subject</label>
                                    <select id="subject" className="w-full bg-background/50 border border-border/50 rounded-2xl px-5 py-4 text-foreground/80 focus:outline-none focus:bg-background focus:border-primary/50 transition-all font-light appearance-none cursor-pointer">
                                        <option value="" className="bg-background text-foreground">Select an inquiry type</option>
                                        <option value="consultation" className="bg-background text-foreground">Request a Consultation</option>
                                        <option value="question" className="bg-background text-foreground">General Question</option>
                                        <option value="pricing" className="bg-background text-foreground">Pricing Details</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground/80 ml-1">Your Message</label>
                                    <textarea id="message" rows={5} placeholder="How can we help you heal today?" className="w-full bg-background/50 border border-border/50 rounded-2xl px-5 py-4 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:bg-background focus:border-primary/50 transition-all font-light resize-none" />
                                </div>
                            </div>

                            <button type="button" className="w-full bg-primary text-primary-foreground font-medium py-4 rounded-xl shadow-[0_8px_30px_rgba(117,85,75,0.25)] hover:shadow-[0_8px_40px_rgba(117,85,75,0.35)] hover:-translate-y-1 transition-all relative z-10 overflow-hidden group/btn flex items-center justify-center gap-3">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Send Inquiry
                                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </FadeIn>

                    {/* Right: Contact Details & Pricing (Takes up 5 cols) */}
                    <FadeIn delay={0.2} direction="up" className="lg:col-span-5 w-full h-full relative">

                        {/* Map & Address Card */}
                        <div className="sticky top-24 md:top-32 z-20 bg-card/80 backdrop-blur-2xl border border-border/80 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(74,58,52,0.15)] overflow-hidden flex flex-col group hover:border-primary/30 transition-all duration-500">
                            {/* Full-bleed map header */}
                            <div className="w-full h-64 relative border-b border-border/50 bg-muted/20">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.05596489437!2d80.8407727181639!3d26.84860432313364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9c1f6ddf31%3A0x6a0c0e7bc2616f7b!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709241951566!5m2!1sen!2sin"
                                    className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                                    style={{ filter: 'sepia(40%) hue-rotate(330deg) contrast(0.9) brightness(1.1)' }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                {/* Inner vignette so it fades beautifully */}
                                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.7)] pointer-events-none" />
                            </div>

                            {/* Text Details below map */}
                            <div className="p-8 md:p-10 flex flex-col gap-6 relative z-10 w-full bg-card/40">
                                <div className="flex items-start gap-5 text-foreground/80 group/item cursor-pointer">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-background/80 border border-border/50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:border-primary transition-all duration-300 shadow-md">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="font-medium text-foreground text-base">Clinic Location</p>
                                        <p className="text-sm font-light text-muted-foreground leading-relaxed">123 Healing Avenue, Wellness District, Lucknow, UP 226010</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-border/50" />

                                <div className="flex items-start gap-5 text-foreground/80 group/item cursor-pointer">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-background/80 border border-border/50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:border-primary transition-all duration-300 shadow-md">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="font-medium text-foreground text-base">Direct Line</p>
                                        <p className="text-sm font-light text-muted-foreground leading-relaxed">+91 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
