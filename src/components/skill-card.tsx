"use client";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="group flex flex-col items-center text-center p-8 border-b border-r border-gray-100
                    hover:bg-blue-50/50 transition-colors duration-300 last:border-b-0">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl
                      bg-gray-900 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-2.5 text-[14px] font-bold text-gray-900 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-gray-500">
        {children}
      </p>
    </div>
  );
}

export default SkillCard;