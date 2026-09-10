interface Props {
    variant: 'outlet' | 'default';
    content: string;
    contentColor?: string;
    bgColor: string

    onClick: () => void

}

export const PrimaryButton = (
    {
        content,
        contentColor,
        onClick,
        bgColor
    }: Props) => {

    return (
        <button
            className={`w-full rounded-2xl border border-title ${bgColor} text-gray-200 flex flex-row justify-center items-center py-4 px-2 my-6`}
            style={{ color: contentColor }}
            onClick={onClick}
            >
            {content}
        </button>
    )
}
