interface Props {
    title: string
    url: string


}

export const CustomCard = ({ title, url }: Props) => {
    return (
        <div className="relative group overflow-hidden aspect-10/14 rounded-2xl shadow-gray-700/40 light:shadow-black/60 shadow-2xl">
            <div className="overflow-hidden mask-b-from-25">
                <img
                    src={url}
                    alt={title}
                    className="block w-full object-cover
                        transition-transform duration-700
                         group-hover:scale-105"
                />
            </div>

            <div className="absolute bottom-0.5 p-4">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-gray-500">Descripción</p>
            </div>

        </div>)
}
