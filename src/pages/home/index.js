import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import Header from '@/components/header'
import { goto } from '@/api'
import './home.styl'

// 7. erji

function Home() {

    const navigate = useNavigate()

    return (
        <div className="P-home">
            <Header title="home" info={()=>{console.log('info:home')}} />
            <h1>Home Page</h1>
            <div className="ipt-con">
                <Button onClick={()=>{goto('/account')}}>sign language recognition</Button>
            </div>
            <div className="ipt-con">
                <Button onClick={()=>{goto('/history')}}>history</Button>
            </div>
            <div className="ipt-con">
                <Button type="primary">about</Button>
            </div>
            
        </div>
    )
}

export default Home
