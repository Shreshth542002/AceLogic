import React from 'react';
import { videoLinks } from '../video';
import video1 from '../videos/demo_video.mp4';
import '../Styles/videoComponent.css';

function Video() {
    return(
        <>
            {videoLinks.map((item) => {
                return(
                    <div key={item.id} >
                        <video src={video1} autoPlay={true} id='video'></video> 
                    </div>
                )
            })}
        </>
    )
}
export default Video;