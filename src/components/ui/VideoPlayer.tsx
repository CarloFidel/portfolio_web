import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface Props {
    videoUrl: string
}

export const VideoPlayer = ({ videoUrl }: Props) => {

    const [isScrolling, setIsScrolling] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrolling(true)
        })

    }, [])

    return (

        <ReactPlayer
            src={videoUrl}
            controls
            width="100%"
            height="auto"
            className='rounded-2xl'
            loop
            muted
            playing={isScrolling}

        />)
}
