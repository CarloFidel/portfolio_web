import { STATS } from "../../constants/experience.constants";

export const StatsSection = () => {
    return (
        <section className='w-full justify-centerç items-center pt-6'>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-0">
                {STATS.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex justify-center items-center flex-col ${index === 1 && "border-x border-border"}`}
                    >
                        <p className="font-serif text-3xl md:text-4xl mb-1" style={{ color: "var(--color-foreground)" }}>{stat.value}</p>
                        <p className="text-xs text-muted light:text-shert uppercase font-light leading-5" >{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
