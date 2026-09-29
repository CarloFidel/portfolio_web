import { Link } from "react-router";

interface Props {
    id: string
    title: string
    url: string
    description?: string
    size: 'large' | 'medium'
    type: 'horizontal' | 'vertical'
    border?: boolean
}

export const CustomCard = ({ id, title, url, description, type, size, border = false }: Props) => {
    return (
        <Link to={`/works/${id}`} aria-label={`View ${title} project`} className={`relative group block overflow-hidden ${type === 'vertical' ? 'aspect-10/14' : 'aspect-video'} ${size === 'large' ? 'w-md' : 'w-full'} max-w-2xs rounded-2xl shadow-gray-700/40 shadow-2xl mask-b-from-50% light:mask-none ${border ? 'border border-border' : ''}`}>
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
                {description && <p className="text-gray-500">{description}</p>}
            </div>

            <span className="absolute right-4 top-4 text-xs uppercase tracking-widest text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Details</span>
        </Link>)
}
