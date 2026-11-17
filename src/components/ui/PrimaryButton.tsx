import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'outlet' | 'default';
    content: string;
    contentColor?: string;
    bgColor: string
}

export const PrimaryButton = (
    {
        content,
        contentColor,
        bgColor
    }: Props) => (
    <button
        className={`w-full rounded-2xl border border-title ${bgColor} text-gray-200 flex flex-row justify-center items-center py-4 px-2 my-6`}
        style={{ color: contentColor }}
    >
        {content}
    </button>
)
