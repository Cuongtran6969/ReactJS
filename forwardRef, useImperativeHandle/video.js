import video1 from './videos/video1.mp4'
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
    const videoRef = useRef()
    //only access other class use these method to them don't access ref
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
//higher-order component to other class get ref
//because ref not pass by component
export default forwardRef(Video)
