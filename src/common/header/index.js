import React, { Fragment } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux';
import { actionCreators }  from './store'
import 'antd/dist/antd.css'
import './style.css'
import '../../statics/iconfont/iconfont.css'

// UI组件
function Header(props) {
    return (
        <Fragment>
            <div className={"HeaderWrapper"}>
                <a className={"Logo"} href={"/"}> </a>
                <div className={"Nav"}>
                    <div className={"NavItem"} style={{color: "green"}}>首页</div>
                    <div className={"NavItem"}>下载APP</div>
                    <div className={"NavItem"} style={{float: "right", color: "#969696"}}>登录</div>
                    <div className={"NavItem"} style={{float: "right", color: "#969696"}}>Aa</div>
                    <div className={props.inputfocus ? "NavWrapper_focus" : "NavWrapper"}>
                        <Input className={"NavSearch"}  placeholder={"搜索"} onFocus={props.focusInput} onBlur={props.blurInput}/>
                        <span className={"iconfont"} id={"SearchIcon"}>&#xe60c;</span>
                    </div>
                </div>
                <div className={"Addition"}>
                    <Button className={"RightBtn"}>注册</Button>
                    <Button className={"RightBtn"}>
                        <span className={"iconfont"}>&#xe708;</span>
                        写文章
                    </Button>
                </div>

            </div>

        </Fragment>
    )
}

const mapStateProps = (state) => {
    return {
        inputfocus: state.header.inputfocus
    }
};

const mapDispatchProps = (dispatch) => {
    return {
        focusInput(){
            dispatch(actionCreators.focusInput());
        },

        blurInput(){
            dispatch(actionCreators.blurInput());
        }
    }
};

// connect方法相当于返回一个容器组件
export default connect(mapStateProps, mapDispatchProps)(Header);