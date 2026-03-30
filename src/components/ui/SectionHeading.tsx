import type { HTMLAttributes, ReactNode } from "react";

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: "h2" | "h3";
};

export function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      data-scroll-heading
      className={`font-heading text-3xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-4xl ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
