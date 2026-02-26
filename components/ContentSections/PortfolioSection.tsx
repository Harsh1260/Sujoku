import { FadeIn } from '../Animations';
import { ArrowRight } from 'lucide-react';

export function PortfolioSection() {
    // Array of premium, themed images for the portfolio
    const portfolioItems = [
        { id: 1, title: 'Serene Treatment Rooms', category: 'Environment', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
        { id: 2, title: 'Precision Tools', category: 'Equipment', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
        { id: 3, title: 'Detailed Diagnosis', category: 'Process', img: 'https://images.unsplash.com/photo-1631556097152-c3bfcb00c822?q=80&w=800&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
        { id: 4, title: 'Energy Mapping', category: 'Therapy', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
    ];

    return (
        <section id="portfolio" className="bg-card text-card-foreground w-full py-24 px-8 border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <FadeIn className="w-full text-center space-y-6 mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                        Our Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">Glimpses of healing</h2>
                    <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                        A visual journey through our clinic, precision techniques, and the tranquil environments we curate for your recovery.
                    </p>
                </FadeIn>

                {/* Asymmetric Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 w-full h-[800px] max-h-[120vh]">
                    {portfolioItems.map((item, idx) => (
                        <FadeIn
                            key={item.id}
                            delay={idx * 0.1}
                            direction="up"
                            className={`relative group rounded-3xl overflow-hidden cursor-pointer ${item.colSpan} ${item.rowSpan} bg-background border border-border/50 shadow-sm`}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                            />
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Hover Content */}
                            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-white text-2xl font-light">
                                    {item.title}
                                </h3>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-16">
                    <button className="group flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary/10 hover:border-secondary transition-all duration-300">
                        View Full Gallery
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
}
