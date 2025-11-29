"use client";

import Templates, { Index } from "./templates"

export function ReactTemplates({ names, className }: { names: string[], className?: string }) {
    const templates = names.map(name => Index[name]);
    return <Templates templates={templates} className={className} />;
}

interface ReactTemplateProps {
    name: string;
    description: string;
}
export function ReactTemplate({ name, description }: ReactTemplateProps) {
    const template = Index[name];

    return (
        <div className="mb-24 not-prose">
            {/* Simple header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-between items-center">
                    <div>{template.name}</div>
                    <a className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        href={`https://github.com/NetCoreTemplates/${name}`}>
                        <svg className="size-5 group-hover:rotate-12 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
                        Source Code
                    </a>
                </h2>
                <p className="mt-3 text-xl text-gray-600 dark:text-gray-400 mb-8">
                    {description}
                </p>
            </div>

            {/* Templates section with enhanced styling */}
            <div className="my-10 transform transition-all duration-300 hover:scale-[1.02]">
                <Templates templates={[template]} />
            </div>

            {/* Screenshots with enhanced hover effects and layout */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 my-10">
                {/* light screenshot */}
                <a className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                    href={`https://${name}.react-templates.net`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <img className="w-80 h-80 md:w-96 md:h-96 object-cover ring-4 ring-gray-200 group-hover:ring-indigo-400 transition-all duration-300"
                        src={`/img/pages/react/${name}.webp`}
                        alt={`${template.name} light theme`} />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-base font-semibold">Light Theme</p>
                    </div>
                </a>

                {/* dark screenshot */}
                <a className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                    href={`https://${name}.react-templates.net`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <img className="w-80 h-80 md:w-96 md:h-96 object-cover ring-4 ring-gray-200 group-hover:ring-purple-400 transition-all duration-300"
                        src={`/img/pages/react/${name}-dark.webp`}
                        alt={`${template.name} dark theme`} />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-base font-semibold">Dark Theme</p>
                    </div>
                </a>
            </div>
        </div>
    );
}