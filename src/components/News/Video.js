import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class Video extends Component {
  render() {
    return (
        <div style={{display:"flex", marginLeft:"26px"}}>
        <ReactPlayer style={{    width: "410px", height: "273px"}}
        url='https://www.youtube.com/watch?v=hDusTVljDEM'
        className='react-player'
      />
              <ReactPlayer style={{    width: "410px", height: "273px"}}
        url='https://www.youtube.com/watch?v=Y2OLRP1RhPI'
        className='react-player'
      />
              <ReactPlayer style={{    width: "410px", height: "273px"}}
        url='https://www.youtube.com/watch?v=YqHUKsGqUeo'
        className='react-player'
      />
    </div>
    );
  }
  
}
export default Video;