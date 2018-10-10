import React from 'react'
import {
  Page,
  Button,
  ActionSheet
} from '../../src'

class Component extends React.Component {
  static navigationOptions = {
    title: 'ActionSheet'
  }

  render () {
    return (
      <Page>
        <Button
          onPress={() => {
            ActionSheet.render({
              list: [
                { value: 1, text: 1 },
                { value: 2, text: '你好啊' },
                { value: 3, text: '拟为阿斯顿发沙发斯蒂芬' }
              ]
            }).then(selected => console.log(selected)).catch(() => {
              console.log('cancel')
            })
          }}
        >request</Button>
      </Page>
    )
  }
}

export default Component
