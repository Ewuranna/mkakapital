"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { teamMembers } from './teamData';

export default function TeamGridClient() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setSelected(null);
    }
    if (selected) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <button
            key={member.slug}
            type="button"
            onClick={() => setSelected(member)}
            className="group text-left bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-secondary-teal/40"
          >
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5 bg-gray-100">
              <Image src={member.image} alt={member.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-300" />
              {/* Clickable indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-secondary-teal group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5h10M9 9h7M9 13h4M5 7h.01M5 11h.01M5 15h.01" /></svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-typography-black mb-1 group-hover:text-secondary-teal transition-colors duration-300">{member.name}</h3>
            <p className="text-sm text-text-secondary">{member.role}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)}></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-light-gray overflow-hidden my-8">
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white border border-light-gray flex items-center justify-center shadow-sm hover:bg-secondary-teal hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative md:col-span-1 h-56 md:h-full min-h-56">
                  <Image src={selected.image} alt={selected.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:hidden"></div>
                </div>
                <div className="md:col-span-2 p-6 sm:p-8 max-h-[70vh] md:max-h-none overflow-y-auto">
                  <div className="inline-block p-2 bg-secondary-cyan/10 rounded-lg mb-3">
                    <span className="text-secondary-cyan font-semibold text-xs uppercase tracking-wider">Team Profile</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-typography-black">{selected.name}</h2>
                  <p className="text-sm sm:text-base text-primary-red font-medium mb-4">{selected.role}</p>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">{selected.bio}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-light-gray">
                      <h3 className="text-sm font-bold text-typography-black mb-2">Focus Areas</h3>
                      <ul className="text-xs text-text-secondary space-y-1 list-disc pl-5">
                        <li>Client delivery and execution</li>
                        <li>Risk management and governance</li>
                        <li>Stakeholder engagement</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-light-gray">
                      <h3 className="text-sm font-bold text-typography-black mb-2">Experience</h3>
                      <p className="text-xs text-text-secondary">10+ years across trade solutions, financing and operations.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-light-gray">
                      <h3 className="text-sm font-bold text-typography-black mb-2">Contact</h3>
                      <p className="text-xs text-text-secondary">Reach out via our contact page and we will connect you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


