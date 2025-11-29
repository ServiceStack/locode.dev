import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface TemplateIntroProps {
    image: string;
    repo: string;
    demo: string;
    name?: string;
}

export default function TemplateIntro({ image, repo, demo, name }: TemplateIntroProps) {
    return (
        <div className="flex flex-col gap-6 my-8 not-prose">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                        src={image}
                        alt={name || "Template Screenshot"}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </a>
            </div>

            <div className="flex justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                    {demo.replace(/^https?:\/\//, '')}
                </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                </a>

                <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
                >
                    <Github className="w-4 h-4" />
                    View Source
                </a>
            </div>
        </div>
    );
}
