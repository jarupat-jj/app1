import React, {Component} from 'react'
export default class Button extends Component {

showAlert(msg) {
alert(msg)
}
onClickButtonOK() {
    this.showAlert('Hello') //ต่อไปก็ใช้ this ได้แล้ว
    }
    render() {
    return <button onClick={this.onClickButtonOK}>OK</button>
    }
    }
    