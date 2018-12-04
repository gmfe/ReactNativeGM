import React from 'react'
import { View } from 'react-native'

const TYPE = {
  POPUP: 'popup',
  DIALOG: 'dialog',
  TOAST: 'toast'
}

let setComponentFunc = null

class LayerRoot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      popup: null,
      dialog: null,
      toast: null
    }
  }

  componentDidMount () {
    setComponentFunc = (type, component) => {
      const s = {}
      s[type] = component
      this.setState(s)
    }
  }

  componentWillUnmount () {
    setComponentFunc = null
  }

  render () {
    const { popup, dialog, toast } = this.state
    if (!(popup || dialog || toast)) {
      return null
    }

    return (
      <View>
        <View>{popup}</View>
        <View>{dialog}</View>
        <View>{toast}</View>
      </View>
    )
  }
}

LayerRoot.setComponent = (type, com) => {
  if (setComponentFunc) {
    LayerRoot.removeComponent(type)
    // TODO modal 二次弹框暂时解决方式
    // !modal 的属性 transparent={true} 二次弹框不生效
    setTimeout(() => setComponentFunc(type, com), 50)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot.removeComponent = (type) => {
  if (setComponentFunc) {
    setComponentFunc(type, null)
  } else {
    console.warn('LayerRoot is uninitialized')
  }
}

LayerRoot.TYPE = TYPE

export default LayerRoot
