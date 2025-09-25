"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(elementRef, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0.2 }
    );
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef, rootMargin]);

  return isIntersecting;
}

function Counter({
  end,
  duration = 1500,
  decimals = 0,
  prefix = "",
  suffix = "",
  start = 0,
}) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const elRef = useRef(null);
  const inView = useInView(elRef, "-80px");
  const [value, setValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(end);
      setHasAnimated(true);
      return;
    }
    if (!inView || hasAnimated) return;

    let animationFrame = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setValue(current);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setValue(end);
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, hasAnimated, duration, end, start, prefersReducedMotion]);

  const formatted = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return (
    <span ref={elRef} suppressHydrationWarning>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  // Reveal-on-scroll animations for columns (non-intrusive)
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, "-100px");
  const rightInView = useInView(rightRef, "-100px");
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Professional background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent z-10"></div>
        <div className="relative w-full h-full">
          <Image
            src="/pexels-henri-mathieu-8349428.jpg"
            alt="Professional business background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Modern geometric overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-red/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-navy/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100svh-6rem)] pt-24 sm:pt-28 lg:pt-32 pb-16">
            {/* Left Column - Content */}
            <div
              ref={leftRef}
              className={`text-white space-y-8 transform transition-all duration-700 ease-out ${
                leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              

              {/* Main headline */}
              <div className="space-y-6">
                <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  <span className="text-white">Empowering Growth, </span>
                  <br />
                  <span className="text-primary-red">Inspiring Dreams</span>
                </h1>
                <p className="text-base font-light max-w-2xl leading-relaxed text-gray-200">
                  Your complete financial partner for modern business. Transform operations with integrated solutions that move at the speed of commerce—from trade financing to supply chain management.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  aria-label="Explore Solutions"
                  className="group bg-primary-red text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-red/40"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center">
                    Explore Solutions
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button
                  aria-label="Request Financing"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-typography-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white/10"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center">
                    Request Financing
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative hidden lg:block">
              <div
                ref={rightRef}
                className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform transition-all duration-700 ease-out delay-150 ${
                  rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-red/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Fast & Reliable</h3>
                    <p className="text-gray-300">Decisions in days, not weeks</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-white mb-1">
                        <Counter end={500} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-300">Happy Clients</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary-red mb-1">
                        <Counter end={2.5} decimals={1} prefix="$" suffix="B+" />
                      </div>
                      <div className="text-sm text-gray-300">Assets Managed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
