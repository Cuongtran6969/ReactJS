import video1 from './videos/video1.mp4'
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.play()
        }
    }))
    return (
        <video 
        ref={videoRef}
        width={300}
        src={video1}
        />
    )
}
export default forwardRef(Video)