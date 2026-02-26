import { CardStack, CardStackItem } from '@/components/ui/card-stack';

export function ServicesSection() {
    const services: CardStackItem[] = [
        {
            id: 1,
            title: "Acupressure (Physical Stimulation)",
            description: "Uses thumb pressure, massage rings, or mini-rollers to stimulate points on hands and feet to boost circulation, reduce pain, and manage stress.",
            imageSrc: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Massage therapy
            price: "From ₹150",
        },
        {
            id: 2,
            title: "Acupuncture (Miniature Needles)",
            description: "Uses very small needles to stimulate specific points for deeper, more acute, or chronic ailments.",
            imageSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Acupuncture
            price: "From ₹180",
        },
        {
            id: 3,
            title: "Seed Therapy (Seo-am Therapy)",
            description: "Applies natural seeds (like beans or peas) to specific points for continuous, gentle pressure and natural healing energy.",
            imageSrc: "https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Natural seeds/stones layout
            price: "From ₹130",
        },
        {
            id: 4,
            title: "Magnet Therapy",
            description: "Uses small magnets applied to the hands and feet to balance energy fields.",
            imageSrc: "https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Stones/balance
            price: "From ₹140",
        },
        {
            id: 5,
            title: "Color Therapy",
            description: "Applies colors to corresponding points on the hand/foot to rebalance energy.",
            imageSrc: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Colorful ethereal light
            price: "From ₹120",
        },
        {
            id: 6,
            title: "Moxibustion",
            description: "Applies heat to specific points to treat cold-related ailments and improve energy.",
            imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Yoga/Meditation/Therapy room
            price: "From ₹200",
        }
    ];

    return (
        <section id="services" className="bg-background text-foreground w-full py-24 px-8 border-t border-border overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="w-full text-center space-y-6 mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                        Our Services
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">Tailored therapeutic paths</h2>
                    <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                        Explore our precise Sujoku treatments designed to address your unique physiological and energetic needs through the body&apos;s natural mapping.
                    </p>
                </div>

                <div className="w-full max-w-5xl">
                    <CardStack
                        items={services}
                        initialIndex={0}
                        autoAdvance={true}
                        intervalMs={3500}
                        pauseOnHover={true}
                        showDots={true}
                        cardWidth={560}
                        cardHeight={360}
                        overlap={0.55}
                        perspectivePx={1200}
                        className="pb-10"
                    />
                </div>
            </div>
        </section>
    );
}
