import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Button, Input } from 'antd'
import { goto } from '@/api'
import Header from '@/components/header'
import './account.styl'
import Webcam from 'react-webcam';
import axios from 'axios'

function Account() {
    const webcamRef = useRef(null);
    const [capturedText, setCapturedText] = useState('');

    useEffect(() => {
        const captureFrame = async () => {
          if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
    
            // 发送图像到后端API
            try {
              const response = await axios.post('http://localhost:3001/api/receiveImage', {
                image: imageSrc,
              });
    
              // 假设后端返回文本数据
              const receivedText = response.data.text;
              setCapturedText(receivedText);
            } catch (error) {
              console.error('Error sending image to API:', error);
            }
          }
        };
    
        // 设置每秒捕捉一次画面
        const captureInterval = setInterval(captureFrame, 1000);
    
        // 在组件卸载时清除定时器
        return () => clearInterval(captureInterval);
      }, []); // 空依赖数组确保只在组件挂载时设置定时器

      //复制功能
      const handleCopyClick = () => {
        // 使用 navigator.clipboard.writeText() 复制文本
        navigator.clipboard.writeText(capturedText)
          .then(() => {
            console.log('Text copied to clipboard');
          })
          .catch((err) => {
            console.error('Error copying text:', err);
          });
      };

//     const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     // 在这里可以使用imageSrc，比如上传到服务器或者显示在页面上
//     console.log(imageSrc);

//     const receivedText = 'Text received from API';
//     setCapturedText(receivedText);

//   }, [webcamRef]);    

    return (
        <div className="P-account">
            <Header title="translate" info={()=>{console.log('info:translate')}} />
            {/* <h1>translate Page</h1> */}
            <div className="ipt-con">
                {/* <Button onClick={capture} type="primary">Capture photo</Button> */}
                <Button onClick={()=>{goto('/home')}} type="primary">back</Button>
            </div>
            <div className="content-container">
            <div className="camera-container">
               <Webcam
                audio={false}
                height={600}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={800}
                />
            </div>
                <div className="display-container">
                <Input.TextArea
                    value={capturedText}
                    placeholder="Text received from API will be displayed here"
                    autoSize={{ minRows: 20, maxRows: 40 }}
                    readOnly
                />
                <Button onClick={handleCopyClick}>Copy Text</Button>
                </div>
            </div>
        </div>
    )
}

export default Account
