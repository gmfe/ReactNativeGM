import React from 'react'
import Dialog from './dialog'
import LayerRoot from '../layer_root'
import {Text } from 'react-native'
import S from '../styles'

const Confirm = (title, content, options = {}) => {
  return new Promise((resolve, reject) => {
    LayerRoot.setComponent(LayerRoot.TYPE.DIALOG,
      <Dialog
        title={title}
        buttons={[{
          text: options.cancelText || '取消',
          onPress: () => {
            reject(new Error())
            LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG)
          }
        }, {
          text: options.okText || '确定',
          onPress: () => {
            resolve()
            LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG)
          }
        }]}
        onCancel={() => {
          reject(new Error())
          LayerRoot.removeComponent(LayerRoot.TYPE.DIALOG)
        }}
        style={options.style}
      >
        <Text style={[S.text, S.textDesc, S.textCenter]}>{content}</Text>
      </Dialog>
    )
  })
}

export default Confirm
