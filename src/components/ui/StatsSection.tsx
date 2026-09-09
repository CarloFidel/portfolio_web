interface Props {
    className?: string;
}
export const StatsSection = ({ className }: Props) => {
    return (
        <section className={className}>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-0">
                {[
                    { value: "40+", label: "Films Scored" },
                    { value: "12", label: "Awards" },
                    { value: "9 yrs", label: "Experience" },
                ].map((stat, i) => (
                    <div
                        key={stat.label}
                        className="py-6 pr-8"
                        style={{ borderRight: i < 2 ? "1px solid var(--color-border)" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}
                    >
                        <p className="font-serif text-3xl md:text-4xl mb-1" style={{ color: "var(--color-foreground)" }}>{stat.value}</p>
                        <p className="text-xs tracking-widest uppercase font-light" style={{ color: "var(--color-muted)", letterSpacing: "0.15em" }}>{stat.label}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
