import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-white to-gray-50 
                 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-extrabold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          {title}
        </h2>
        <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
