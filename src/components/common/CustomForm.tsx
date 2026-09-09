import { PROJECT_CATEGORIES } from "../../constants/projectCategory.constants";

interface Props {
  className?: string;
}

export const CustomForm = ({ className }: Props) => {
  return (
    <form className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-small uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="category" className="text-xs uppercase tracking-widest text-muted">
          Project category
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue=""
          className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-accent"
        >
          <option value="" disabled>
            Select a category
          </option>
          {Object.entries(PROJECT_CATEGORIES).map(([label, value]) => (
            <option key={value} value={value}>
              {label.replaceAll("_", " ")}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="resize-y border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
          placeholder="Tell me about your project"
        />
      </div>

      <button
        type="submit"
        className="mt-8 border border-accent px-6 py-3 text-sm uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-background"
      >
        Send message
      </button>
    </form>
  );
};
