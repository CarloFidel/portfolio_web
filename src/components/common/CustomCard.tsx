interface Props {
    title: string
    url: string
    size: 'large' | 'medium'
    type: 'horizontal' | 'vertical'


}

export const CustomCard = ({ title, url, type, size }: Props) => {
    return (
        <div className={`relative group overflow-hidden ${type === 'vertical' ? 'aspect-10/14' : 'aspect-video'} ${size === 'large' ? 'w-md' : 'w-full'} max-w-2xs rounded-2xl shadow-gray-700/40  shadow-2xl mask-b-from-50% light:mask-none`}>
            <div className="overflow-hidden mask-b-from-150">
                <img
                    src={url}
                    alt={title}
                    className="block w-full h-full object-cover
                        transition-transform duration-700
                         group-hover:scale-105"
                />
            </div>

            <div className="absolute bottom-0.5 p-4">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-gray-500">Descripción</p>
            </div>

            <p className="text-muted uppercase">detalles</p>

        </div>)
}
