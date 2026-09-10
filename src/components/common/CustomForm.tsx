import { PROJECT_CATEGORY_OPTIONS } from "../../constants/projectCategory.constants";
import { PrimaryButton } from "../ui/PrimaryButton";

interface Props {
    className?: string;
}

export const CustomForm = ({ className }: Props) => {
    return (
        <form className={className}>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-small text-muted uppercase tracking-widest">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-gray-500 "
                        placeholder="Your name"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-small text-muted uppercase tracking-widest">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-gray-500 "
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="category" className="text-small text-muted uppercase tracking-widest">
                    Project category
                </label>
                <select
                    id="category"
                    name="category"
                    required
                    defaultValue=""
                    className="border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors "
                >
                    <option value="" disabled >
                        Select a category
                    </option>
                    {
                        PROJECT_CATEGORY_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        )
                        )
                    }
                </select>
            </div>

            <div className="mt-6 flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-small text-muted uppercase tracking-widest">
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
            <PrimaryButton
                bgColor='bg-shert/70'
                onClick={() => { }}
                content="Send form"
                variant="default"
                contentColor=""
            />
        </form>
    );
};
