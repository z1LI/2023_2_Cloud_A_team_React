import { Button, Card } from 'antd'
import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
import './header.styl'

function Header(props) {

    // 接收来自父组件的数据
    const { title, info } = props
    // 如果info存在，则执行info()
    info && info()

    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">Header:{title}</div>
                <div className="opt-con">
                    <Button icon={<MoonOutlined />} shape="circle"></Button>
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}

export default Header
