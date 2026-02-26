import { FadeIn } from '../Animations';
import { CalendarPlus } from 'lucide-react';

export function TeamSection() {
    const team = [
        {
            name: "Dr. Ananya Sharma",
            role: "Founder & Lead Sujoku Master",
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
            desc: "With over 15 years of dedicated practice in alternative medicine, Dr. Sharma brings unparalleled expertise to every session."
        },
        {
            name: "Rahul Verma",
            role: "Senior Acupressure Specialist",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
            desc: "Combining modern physiotherapy with traditional Sujoku, Rahul specializes in chronic pain management and rehabilitation."
        },
        {
            name: "Priya Patel",
            role: "Holistic Wellness Coach",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
            desc: "Priya guides patients through emotional and energetic healing, focusing on stress relief and mental clarity."
        }
    ];

    return (
        <section id="team" className="bg-background text-foreground w-full py-24 px-8 border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <FadeIn className="w-full text-center space-y-6 mb-20">
                    <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
                        Our Experts
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">Master healers at your service</h2>
                    <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                        Meet the dedicated professionals committed to restoring your body's natural balance.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                    {team.map((member, idx) => (
                        <FadeIn key={idx} delay={idx * 0.15} direction="up">
                            <div className="group relative flex flex-col h-full bg-card rounded-[2.5rem] overflow-hidden border border-border hover:border-primary/50 transition-colors duration-500 shadow-xl">

                                {/* Image Container */}
                                <div className="relative w-full aspect-4/5 overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    {/* Subtle gradient overlay to ensure text contrast if placed over image */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content Card */}
                                <div className="relative z-10 p-8 flex flex-col flex-grow bg-card transition-transform duration-500 group-hover:-translate-y-4">
                                    <h3 className="text-2xl font-medium mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-secondary font-medium text-sm mb-4 tracking-wide uppercase">{member.role}</p>
                                    <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                                        {member.desc}
                                    </p>

                                    <div className="mt-auto flex gap-4">
                                        <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </button>
                                        <button className="group flex-grow flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium hover:bg-secondary hover:text-secondary-foreground transition-all">
                                            Book with {member.name.split(' ')[0]}
                                            <CalendarPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
