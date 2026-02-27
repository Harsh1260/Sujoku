'use client';

import { Button } from '@/components/ui/button';
import { CheckCircleIcon, ArrowRight } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { FadeIn } from './Animations';

export function PricingWithChart() {
    return (
        <section id="price-list" className="relative w-full py-32 px-8 overflow-hidden bg-background">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)_0%,transparent_50%)] opacity-5 pointer-events-none" />

            <div className="mx-auto max-w-6xl relative z-10">
                {/* Heading */}
                <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
                        Transparent Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
                        Healing that Scales <span className="font-medium text-primary">with You</span>
                    </h2>
                    <p className="text-muted-foreground mt-6 text-lg md:text-xl font-light leading-relaxed">
                        Choose the right plan to unlock your body's natural healing potential.
                        Transparent pricing built for your physical and mental well-being.
                    </p>
                </FadeIn>

                {/* Pricing Grid */}
                <FadeIn delay={0.1} direction="up">
                    <div className="bg-card/80 backdrop-blur-2xl rounded-[2.5rem] border border-border/80 shadow-[0_20px_60px_-15px_rgba(74,58,52,0.15)] overflow-hidden md:grid md:grid-cols-6 relative">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                        {/* Basic Plan */}
                        <div className="flex flex-col justify-between border-b border-border/50 p-10 md:col-span-2 md:border-r md:border-b-0 relative z-10">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="inline rounded-[2px] text-2xl font-light">
                                        First Diagnosis
                                    </h3>
                                    <span className="my-4 block text-5xl font-medium text-primary">
                                        ₹1500
                                    </span>
                                    <p className="text-muted-foreground text-sm font-light">
                                        Best for initial assessment & understanding
                                    </p>
                                </div>

                                <Button asChild variant="outline" className="group w-full rounded-xl py-6 text-base font-light hover:bg-primary/10 hover:text-primary transition-colors border-border/50">
                                    <a href="#contacts" className="flex items-center justify-center gap-2">
                                        Book Assessment
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>

                                <div className="bg-border/50 my-8 h-px w-full" />

                                <ul className="text-muted-foreground space-y-4 text-sm font-light">
                                    {[
                                        'Comprehensive Symptom Analysis',
                                        'Initial Sujoku Treatment',
                                        'Dietary Recommendations',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-secondary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Comprehensive Plan */}
                        <div className="z-10 grid gap-10 overflow-hidden p-10 md:col-span-4 lg:grid-cols-2 relative h-full">

                            {/* Pricing + Chart */}
                            <div className="flex flex-col justify-between space-y-8">
                                <div>
                                    <h3 className="text-2xl font-light">Comprehensive Healing Plan</h3>
                                    <span className="my-4 block text-5xl font-medium text-primary">
                                        ₹8500
                                    </span>
                                    <p className="text-muted-foreground text-sm font-light">
                                        Perfect for chronic illness & deep recovery
                                    </p>
                                </div>
                                <div className="bg-background/50 h-fit w-full rounded-2xl border border-border/50 p-4 shadow-inner">
                                    <WellnessChart />
                                </div>
                            </div>

                            {/* Features */}
                            <div className="relative w-full flex flex-col justify-between">
                                <div>
                                    <div className="text-sm font-medium tracking-wide text-primary uppercase mb-6">Everything in First Diagnosis plus:</div>
                                    <ul className="text-muted-foreground space-y-4 text-sm font-light">
                                        {[
                                            '5 Full Sujoku Sessions',
                                            'Advanced Meridian Therapy',
                                            'Customized Wellness Path',
                                            'Priority Booking Slots',
                                            'Progress Tracking Dashboard',
                                            'Ongoing Lifestyle Coaching',
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircleIcon className="h-5 w-5 text-secondary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Call to Action */}
                                <div className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button
                                        asChild
                                        className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 font-medium shadow-[0_8px_30px_rgba(117,85,75,0.25)] hover:shadow-[0_8px_40px_rgba(117,85,75,0.35)] shrink-0 transition-all border-none"
                                    >
                                        <a href="#contacts" className="flex items-center justify-center gap-2">
                                            Start Healing
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="group rounded-xl py-6 font-light hover:bg-secondary/10 hover:text-secondary border-border/50 transition-colors">
                                        <a href="#contacts" className="flex items-center justify-center gap-2">
                                            Learn More
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function WellnessChart() {
    const chartData = [
        { month: 'Week 1', recovery: 20 },
        { month: 'Week 2', recovery: 35 },
        { month: 'Week 3', recovery: 55 },
        { month: 'Week 4', recovery: 70 },
        { month: 'Week 5', recovery: 95 },
    ];

    const chartConfig = {
        recovery: {
            label: 'Recovery Rate',
            color: 'var(--color-secondary)',
        },
    } satisfies ChartConfig;

    return (
        <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="space-y-1 pb-4 px-2 pt-2 border-b border-border/30">
                <CardTitle className="text-lg font-medium text-foreground">Healing Progress</CardTitle>
                <CardDescription className="text-xs font-light">
                    Average recovery timeline with the 5-session plan.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-4">
                <ChartContainer config={chartConfig}>
                    <LineChart data={chartData} margin={{ left: 12, right: 12, top: 12 }}>
                        <CartesianGrid vertical={false} stroke="var(--color-border)" strokeOpacity={0.5} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={12}
                            tickFormatter={(value) => value.slice(0, 3)}
                            stroke="var(--foreground)"
                            opacity={0.5}
                            fontSize={11}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="recovery"
                            type="monotone"
                            stroke="var(--color-primary)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--color-primary)', r: 4, strokeWidth: 0 }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
