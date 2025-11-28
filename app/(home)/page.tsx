'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CopyBlock } from '@/app/components/copy-block';

export default function HomePage() {
  const [diagramMode, setDiagramMode] = useState<'Production' | 'Development'>('Production');

  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)]">

      {/* Hero Section - Dark Theme */}
      <section className="relative w-full bg-[#0f172a] text-white overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-sky-900/20 to-slate-900/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 relative z-10 text-center">

          {/* React Atom Animation Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-40 pointer-events-none">
            <div className="w-[600px] h-[600px] border border-cyan-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse] rotate-45" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite] -rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400/20 rounded-full blur-md animate-pulse" />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-medium text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              The Ultimate Vibe Coding Stack
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight pb-2 leading-tight text-white drop-shadow-lg">
              React + .NET
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 animate-gradient-x pb-2">
                Templates
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
              These React + .NET Templates are ideal for <span className="text-cyan-400 font-bold">Vibe Coded UIs</span>
              <br className="hidden md:block" />
              and <span className="text-sky-400 font-bold">fast and scalable .NET backends</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <Link
                href="/docs"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-cyan-400 rounded-full hover:bg-cyan-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                Start Building
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </Link>
              <Link
                href="https://github.com/NetCoreTemplates"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-slate-600 hover:border-cyan-400/50 rounded-full hover:bg-slate-800 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 shadow-sm"
              >
                Explore Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body Content - Light/Default Theme */}
      <div className="flex-1 w-full bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 py-24 space-y-24">

          {/* Architecture Benefits */}
          <div className="grid md:grid-cols-2 gap-12 text-left items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                The Best of Both Worlds
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                React .NET Templates unite <strong>React, Tailwind CSS & TypeScript</strong> with ServiceStack's powerful .NET backend—creating the ultimate
                environment for building sophisticated UIs at lightning speed. Experience true full-stack type safety with APIs that flow
                seamlessly from C# to TypeScript.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { label: "Type-Safe End-to-End", desc: "Shared DTOs between C# and TypeScript." },
                  { label: "AI-Friendly", desc: "Clean, declarative code that LLMs understand perfectly." },
                  { label: "Production Ready", desc: "Docker, Auth, and AutoQuery out of the box." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <strong className="text-foreground block">{item.label}</strong>
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 p-8 text-center transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12">
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#512BD4] flex items-center justify-center shadow-lg ring-1 ring-white/10">
                    <span className="text-white font-bold text-2xl">.NET</span>
                  </div>
                  <div className="w-1 h-12 bg-slate-700 rounded-full" />
                  <div className="w-20 h-20 rounded-full bg-[#282c34] flex items-center justify-center shadow-lg ring-1 ring-white/10">
                    <span className="text-[#61DAFB] font-bold text-xl">React</span>
                  </div>
                </div>
                <p className="text-2xl font-mono font-bold text-white">Seamlessly Integrated</p>
                <p className="text-sm text-slate-400 mt-2">Hot Reload • Typed APIs • AutoQuery</p>
              </div>
            </div>
          </div>

          {/* Template Showcase */}
          <div className="space-y-32">
            <TemplateSection
              title="Next.js RSC"
              description="The cutting edge of React. Leverage full Next.js React Server Components to fetch data directly on the server, reducing bundle size and improving performance."
              href="/docs/templates/next-rsc"
              screenshot="https://raw.githubusercontent.com/ServiceStack/docs.servicestack.net/main/MyApp/wwwroot/img/pages/react/next-rsc.webp"
              diagram="https://raw.githubusercontent.com/ServiceStack/docs.servicestack.net/refs/heads/main/MyApp/wwwroot/img/pages/react/info/next-rsc-prod.svg"
              features={[
                "Server Components",
                "Hybrid Rendering",
                "Unified Proxy Architecture"
              ]}
              command="npx create-net next-rsc ProjectName"
              githubTemplate="https://github.com/new?template_name=nextjs&template_owner=NetCoreTemplates"
              diagramMode={diagramMode}
              setDiagramMode={setDiagramMode}
            />

            <TemplateSection
              title="Next.js Static"
              description="The ultimate solution for public-facing websites. Combines the SEO and performance of Static Site Generation (SSG) with a dynamic .NET API."
              href="/docs/templates/next-static"
              screenshot="https://raw.githubusercontent.com/ServiceStack/docs.servicestack.net/main/MyApp/wwwroot/img/pages/react/next-static.webp"
              diagram="https://raw.githubusercontent.com/ServiceStack/docs.servicestack.net/refs/heads/main/MyApp/wwwroot/img/pages/react/info/next-static-prod.svg"
              features={[
                "Static Export to /dist",
                "Served by ASP.NET Core Kestrel",
                "Zero Node.js in Production"
              ]}
              command="npx create-net next-static ProjectName"
              githubTemplate="https://github.com/new?template_name=nextjs-static&template_owner=NetCoreTemplates"
              reversed
              diagramMode={diagramMode}
              setDiagramMode={setDiagramMode}
            />

            <TemplateSection
              title="React Static"
              description="A classic Single Page Application (SPA) experience powered by Vite. Perfect for dashboards, internal tools, and highly interactive apps."
              href="/docs/templates/react-static"
              screenshot="https://raw.githubusercontent.com/ServiceStack/docs.servicestack.net/main/MyApp/wwwroot/img/pages/react/react-static.webp"
              diagram="https://raw.githubusercontent.com/ServiceStack/docs.servicestack.net/refs/heads/main/MyApp/wwwroot/img/pages/react/info/react-static-prod.svg"
              features={[
                "Client-side Routing",
                "Lightning Fast Vite Dev Server",
                "Simple Deployment"
              ]}
              command="npx create-net react-static ProjectName"
              githubTemplate="https://github.com/new?template_name=react-static&template_owner=NetCoreTemplates"
              diagramMode={diagramMode}
              setDiagramMode={setDiagramMode}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function TemplateSection({ title, description, href, screenshot, diagram, features, command, githubTemplate, reversed = false, diagramMode, setDiagramMode }: any) {
  const currentDiagram = diagram.replace('-prod.svg', diagramMode === 'Production' ? '-prod.svg' : '-dev.svg');

  return (
    <div className={`flex flex-col gap-16 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
      <div className="flex-1 space-y-8 text-left">
        <Link href={href} className="group inline-block">
          <h3 className="text-4xl font-bold group-hover:text-primary transition-colors flex items-center gap-3">
            {title}
            <svg className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </h3>
        </Link>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>

        <div className="bg-[#f9f9fb] border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Architecture
            </h4>
            <div className="flex bg-muted rounded-lg p-0.5 border border-border/50">
              <button
                onClick={() => setDiagramMode('Development')}
                className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${diagramMode === 'Development' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Development
              </button>
              <button
                onClick={() => setDiagramMode('Production')}
                className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${diagramMode === 'Production' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Production
              </button>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={currentDiagram} alt={`${title} Architecture`} className="w-full h-auto rounded dark:invert opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        <ul className="space-y-3">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-base font-medium text-foreground/80">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Link
            href={href}
            className="inline-flex items-center text-primary font-bold hover:underline decoration-2 underline-offset-4"
          >
            Read Documentation
          </Link>
        </div>
      </div>

      <div className="flex-1 w-full space-y-6">
        {command && (
          <CopyBlock className="w-full">
            {command}
          </CopyBlock>
        )}
        <Link href={href} className="block relative rounded-2xl overflow-hidden shadow-2xl border-4 border-muted/20 bg-muted group hover:border-primary/30 transition-colors duration-300">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshot}
            alt={`${title} Screenshot`}
            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
          />
        </Link>
        {githubTemplate && (
          <div className="mt-4 p-4 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Jumpstart with Copilot</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Instantly scaffold a new App with this template using GitHub Copilot</p>
                <a
                  href={githubTemplate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#24292f] hover:bg-[#1b1f23] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-md transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Create from Template
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
