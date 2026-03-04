'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ArrowRight, Check, Send, Sparkles, Heart, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

const steps = ['Your Profile', 'Health Goals', 'Appointment', 'Confirm'];

const therapyTypes = [
    { id: 'acupressure', label: 'Acupressure', desc: 'Thumb & palm pressure therapy' },
    { id: 'acupuncture', label: 'Acupuncture', desc: 'Miniature needle stimulation' },
    { id: 'seed', label: 'Seed Therapy', desc: 'Natural seed point application' },
    { id: 'magnet', label: 'Magnet Therapy', desc: 'Magnetic field balancing' },
    { id: 'color', label: 'Color Therapy', desc: 'Chromotherapeutic healing' },
    { id: 'moxibustion', label: 'Moxibustion', desc: 'Thermal point stimulation' },
];

const concerns = ['Chronic Pain', 'Stress & Anxiety', 'Sleep Issues', 'Digestive Problems', 'Migraines', 'Energy & Fatigue', 'Immunity', 'Joint Pain'];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const trustBadges = [
    { icon: Heart, label: '2,400+ Healed' },
    { icon: Shield, label: 'Certified Experts' },
    { icon: Clock, label: '15+ Years Experience' },
    { icon: Sparkles, label: 'Holistic Approach' },
];

export default function StartHealingPage() {
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [direction, setDirection] = useState(1);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        therapies: [] as string[],
        concerns: [] as string[],
        date: '',
        time: '',
        notes: '',
    });

    const update = (field: string, val: string | string[]) =>
        setForm((prev) => ({ ...prev, [field]: val }));

    const toggleArray = (field: 'therapies' | 'concerns', val: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: prev[field].includes(val)
                ? prev[field].filter((v) => v !== val)
                : [...prev[field], val],
        }));
    };

    const go = (dir: 1 | -1) => {
        setDirection(dir);
        setStep((s) => s + dir);
    };

    const handleSubmit = () => { setSubmitted(true); };

    const stepVariants = {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
    };

    /* ── shared input class ── */
    const inputCls = "w-full bg-white/60 border border-[#C4C0AC] rounded-2xl px-5 py-4 text-[#2A3320] placeholder-[#5D6B4A]/50 focus:outline-none focus:border-primary/50 focus:bg-white transition-all font-light";

    return (
        <div className="min-h-screen bg-[#EDE8DC]">
            <Navbar />

            <div className="min-h-screen pt-24 grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT PANEL */}
                <div className="hidden lg:flex flex-col bg-[#343B2A] relative overflow-hidden">
                    {/* Subtle dot texture */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.035]"
                        style={{ backgroundImage: 'radial-gradient(#EDE8DC 1px, transparent 1px)', backgroundSize: '22px 22px' }}
                    />
                    {/* Ambient glows */}
                    <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#4BBF5A]/15 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[#4BBF5A]/8 rounded-full blur-[100px] pointer-events-none" />

                    {/* Top nav bar — back link LEFT, badge RIGHT */}
                    <div className="relative z-10 flex items-center justify-between px-12 pt-10">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#EDE8DC]/40 hover:text-[#EDE8DC]/80 transition-colors text-sm font-medium group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        <div className="px-3 py-1.5 rounded-full bg-[#4BBF5A]/12 border border-[#4BBF5A]/20 text-[#4BBF5A] text-[10px] font-bold tracking-widest uppercase">
                            New Patient
                        </div>
                    </div>

                    {/* Hero text block — vertically centered */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center px-12 py-8">
                        {/* Eyebrow line */}
                        <div className="flex items-center gap-3 mb-7">
                            <div className="h-px w-8 bg-[#4BBF5A]/50" />
                            <span className="text-[#4BBF5A] text-xs font-semibold tracking-[0.2em] uppercase">Your Healing Journey</span>
                        </div>

                        <h1 className="text-5xl xl:text-[3.25rem] font-light text-[#EDE8DC] tracking-tight leading-[1.1] mb-5">
                            Your path to<br />
                            <span className="italic text-[#4BBF5A]">natural balance</span><br />
                            starts here.
                        </h1>

                        <p className="text-[#EDE8DC]/55 text-base font-light leading-relaxed max-w-[340px] mb-10">
                            Fill in a few details and our specialists will craft a personalised healing plan tailored just for you.
                        </p>

                        {/* Compact trust pills */}
                        <div className="grid grid-cols-2 gap-2 mb-8">
                            {trustBadges.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-white/6 border border-white/8 rounded-xl px-3 py-2.5">
                                    <div className="w-6 h-6 rounded-lg bg-[#4BBF5A]/15 flex items-center justify-center shrink-0">
                                        <Icon className="w-3 h-3 text-[#4BBF5A]" />
                                    </div>
                                    <span className="text-xs font-medium text-[#EDE8DC]/65 leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Testimonial card */}
                        <div className="bg-white/5 border border-white/8 rounded-2xl p-5">
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3.5 h-3.5 fill-[#4BBF5A] text-[#4BBF5A]" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-[#EDE8DC]/65 text-sm font-light italic leading-relaxed mb-4">
                                &ldquo;After three sessions, my chronic back pain reduced by nearly 80%. The team truly understands the body&apos;s energy map.&rdquo;
                            </p>
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-[#4BBF5A]/20 border border-[#4BBF5A]/30 flex items-center justify-center text-[#4BBF5A] text-[10px] font-bold">PS</div>
                                <div>
                                    <p className="text-[#EDE8DC] text-sm font-medium leading-none mb-0.5">Priya Sharma</p>
                                    <p className="text-[#EDE8DC]/40 text-[11px]">Patient since 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="relative z-10 px-12 pb-8">
                        <div className="h-px bg-linear-to-r from-transparent via-[#4BBF5A]/25 to-transparent mb-4" />
                        <p className="text-[#EDE8DC]/20 text-[10px] text-center tracking-widest uppercase">Krishna Health Center · Est. 2009</p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="flex flex-col px-6 md:px-12 xl:px-16 py-12 overflow-y-auto relative">

                    <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-[#2A3320]/70 hover:text-[#2A3320] transition-colors mb-8 text-sm font-medium group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    {!submitted ? (
                        <>
                            {/* Step Indicator */}
                            <div className="mb-10">
                                <div className="flex items-center gap-2 mb-3">
                                    {steps.map((s, i) => (
                                        <div key={s} className="flex items-center gap-2">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${i < step ? 'bg-primary text-primary-foreground' :
                                                i === step ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' :
                                                    'bg-[#C4C0AC] text-[#5D6B4A]'
                                                }`}>
                                                {i < step ? <Check className="w-4 h-4" /> : i + 1}
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div className={`h-[2px] w-8 md:w-12 rounded-full transition-all duration-500 ${i < step ? 'bg-primary' : 'bg-[#C4C0AC]'}`} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-[#5D6B4A] font-medium mt-3">
                                    Step {step + 1} of {steps.length} — <span className="text-[#2A3320]">{steps[step]}</span>
                                </p>
                            </div>

                            {/* Step Content */}
                            <div className="flex-1 relative overflow-hidden">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={step}
                                        custom={direction}
                                        variants={stepVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full"
                                    >
                                        {/* Step 0 */}
                                        {step === 0 && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-light text-[#2A3320] mb-2">Tell us about yourself</h2>
                                                    <p className="text-[#5D6B4A] font-light">We&apos;ll use this to personalise your experience.</p>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-[#2A3320]/80 ml-1">Full Name *</label>
                                                        <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" className={inputCls} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-[#2A3320]/80 ml-1">Age</label>
                                                        <input type="number" value={form.age} onChange={(e) => update('age', e.target.value)} placeholder="Your age" className={inputCls} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-[#2A3320]/80 ml-1">Email Address *</label>
                                                        <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="your@email.com" className={inputCls} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-[#2A3320]/80 ml-1">Phone Number</label>
                                                        <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 00000 00000" className={inputCls} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 1 */}
                                        {step === 1 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-light text-[#2A3320] mb-2">Your healing goals</h2>
                                                    <p className="text-[#5D6B4A] font-light">Select therapy types and health concerns most relevant to you.</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-[#2A3320] mb-4 tracking-wide">Therapy Type</p>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                        {therapyTypes.map((t) => {
                                                            const sel = form.therapies.includes(t.id);
                                                            return (
                                                                <button key={t.id} type="button" onClick={() => toggleArray('therapies', t.id)}
                                                                    className={`text-left p-4 rounded-2xl border-2 transition-all duration-300 ${sel ? 'border-primary bg-primary/8 shadow-[0_4px_20px_rgba(75,191,90,0.15)]' : 'border-[#C4C0AC] bg-white/60 hover:border-primary/40'}`}>
                                                                    <div className={`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center transition-colors ${sel ? 'border-primary bg-primary' : 'border-[#C4C0AC]'}`}>
                                                                        {sel && <Check className="w-2.5 h-2.5 text-white" />}
                                                                    </div>
                                                                    <p className={`text-sm font-semibold ${sel ? 'text-primary' : 'text-[#2A3320]'}`}>{t.label}</p>
                                                                    <p className="text-[#5D6B4A] text-xs font-light mt-0.5">{t.desc}</p>
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-[#2A3320] mb-4 tracking-wide">Health Concerns</p>
                                                    <div className="flex flex-wrap gap-3">
                                                        {concerns.map((c) => {
                                                            const sel = form.concerns.includes(c);
                                                            return (
                                                                <button key={c} type="button" onClick={() => toggleArray('concerns', c)}
                                                                    className={`px-4 py-2.5 rounded-full text-sm font-medium border-2 transition-all duration-300 ${sel ? 'border-primary bg-primary text-primary-foreground shadow-[0_4px_15px_rgba(75,191,90,0.25)]' : 'border-[#C4C0AC] text-[#5D6B4A] bg-white/60 hover:border-primary/40 hover:text-primary'}`}>
                                                                    {c}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2 */}
                                        {step === 2 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-light text-[#2A3320] mb-2">Choose a time</h2>
                                                    <p className="text-[#5D6B4A] font-light">Pick a date and time for your first session.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-[#2A3320]/80 ml-1">Preferred Date</label>
                                                    <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)} min={new Date().toISOString().split('T')[0]} className={inputCls} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-[#2A3320]/80 mb-4 ml-1">Preferred Time</p>
                                                    <div className="grid grid-cols-4 gap-3">
                                                        {timeSlots.map((t) => (
                                                            <button key={t} type="button" onClick={() => update('time', t)}
                                                                className={`py-3 rounded-2xl text-sm font-medium border-2 transition-all duration-300 ${form.time === t ? 'border-primary bg-primary text-primary-foreground shadow-[0_4px_15px_rgba(75,191,90,0.25)]' : 'border-[#C4C0AC] text-[#5D6B4A] bg-white/60 hover:border-primary/40'}`}>
                                                                {t}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-[#2A3320]/80 ml-1">Additional Notes</label>
                                                    <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} placeholder="Any specific conditions or questions for our practitioner..." className={`${inputCls} resize-none`} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 3 */}
                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-light text-[#2A3320] mb-2">Review your request</h2>
                                                    <p className="text-[#5D6B4A] font-light">Everything look right? Submit to receive your confirmation.</p>
                                                </div>
                                                <div className="bg-white/60 border border-[#C4C0AC] rounded-3xl p-7 space-y-5 backdrop-blur-sm">
                                                    {[
                                                        { label: 'Name', value: form.name || '—' },
                                                        { label: 'Email', value: form.email || '—' },
                                                        { label: 'Phone', value: form.phone || '—' },
                                                        { label: 'Therapies', value: form.therapies.join(', ') || '—' },
                                                        { label: 'Concerns', value: form.concerns.join(', ') || '—' },
                                                        { label: 'Date', value: form.date || '—' },
                                                        { label: 'Time', value: form.time || '—' },
                                                    ].map(({ label, value }) => (
                                                        <div key={label} className="flex justify-between items-start gap-4 border-b border-[#C4C0AC]/50 pb-4 last:border-none last:pb-0">
                                                            <span className="text-sm font-semibold text-[#5D6B4A] w-24 shrink-0">{label}</span>
                                                            <span className="text-sm text-[#2A3320] font-light text-right">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {form.notes && (
                                                    <div className="bg-primary/8 border border-primary/20 rounded-2xl p-5">
                                                        <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Notes for practitioner</p>
                                                        <p className="text-sm text-[#2A3320]/80 font-light">{form.notes}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#C4C0AC]/60">
                                <button onClick={() => go(-1)} disabled={step === 0}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#C4C0AC] text-[#5D6B4A] text-sm font-medium hover:border-primary/40 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                                    <ArrowLeft className="w-4 h-4" />
                                    Previous
                                </button>
                                {step < steps.length - 1 ? (
                                    <button onClick={() => go(1)}
                                        className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(75,191,90,0.3)] hover:-translate-y-0.5 transition-all">
                                        Continue
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button onClick={handleSubmit}
                                        className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(75,191,90,0.3)] hover:-translate-y-0.5 transition-all">
                                        Submit Request
                                        <Send className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 flex flex-col items-center justify-center text-center py-20"
                        >
                            <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-8 mx-auto">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <Check className="w-10 h-10 text-primary" />
                                </motion.div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light text-[#2A3320] mb-4 tracking-tight">Request Received!</h2>
                            <p className="text-[#5D6B4A] font-light text-lg max-w-md leading-relaxed mb-10">
                                Thank you, <span className="text-primary font-medium">{form.name || 'friend'}</span>. Our team will reach out within 2 hours to confirm your appointment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-[0_8px_30px_rgba(75,191,90,0.25)]">
                                    Return Home
                                </Link>
                                <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#C4C0AC] text-[#2A3320] font-medium hover:border-primary/40 hover:text-primary transition-all">
                                    Explore Gallery
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
