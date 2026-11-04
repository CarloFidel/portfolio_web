import ReactPlayer from 'react-player'

interface Props {
    videoUrl: string
}

export const VideoPlayer = ({ videoUrl }: Props) => {
    return (

        <ReactPlayer
            src={videoUrl}
            controls
            width="100%"
            height="auto"
            className='rounded-2xl'
        />)
}
