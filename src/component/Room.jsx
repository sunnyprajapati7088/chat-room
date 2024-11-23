import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
function Room() {
  const { id } = useParams();
  const roomId = id;
  const Mymeeting = async (element) => {
    const appId = 386273121;
    const serverSecret = "cc4934455089f54f2c7a31bf130cdcdf";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "sunny"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      sharedLinks: [
        { name: "Copy Link" ,
        url: `http://localhost:5173/room${roomId}`}
      ],
      container: element,
      scenario: {
        mode:ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    })
   

  }
   return (
     <div>
       <div ref={Mymeeting} />
     </div>
   );
  
}

export default Room
