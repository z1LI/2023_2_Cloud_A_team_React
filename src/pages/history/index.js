import { Button, Input } from 'antd'
// import { useNavigate } from 'react-router-dom'
import './history.styl'
import Header from '@/components/header'
import { goto } from '@/api'

function history() {

    // const navigate = useNavigate()

    return (
        <div className="P-history">
            <Header title="history" info={()=>{console.log('info:history')}} />
            <h1>history Page</h1>
            <div className="ipt-con">
            <Button onClick={()=>{goto('/home')}}>jump1</Button>
            </div>
        </div>
    )
}

export default history
