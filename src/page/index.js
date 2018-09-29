import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, RefreshControl } from 'react-native'
import Variable from '../variable'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  handleRefresh = () => {
    const { onRefresh } = this.props

    if (onRefresh) {
      this.setState({
        refreshing: true
      })
      onRefresh().then(() => {
        this.setState({
          refreshing: false
        })
      }, () => {
        this.setState({
          refreshing: false
        })
      })
    }
  }

  render () {
    const {
      style,
      white,
      noScrollContent,
      scrollViewProps,
      top,
      bottom,

      onRefresh, // eslint-disable-line

      children,
      ...rest
    } = this.props

    const { refreshing } = this.state

    return (
      <View {...rest} style={[{
        flex: 1,
        backgroundColor: white ? Variable.bgWhite : Variable.bgDefault
      }, style]}>
        {top && <View>{top}</View>}
        {noScrollContent ? (
          <View style={{ flex: 1 }}>
            {children}
          </View>
        ) : (
          <ScrollView
            keyboardShouldPersistTaps='always'
            keyboardDismissMode='on-drag'
            refreshControl={onRefresh ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.handleRefresh}
              />
            ) : null}
            {...scrollViewProps}
            style={[{ flex: 1 }, scrollViewProps.style]}
          >
            {children}
          </ScrollView>
        )}
        {bottom && <View>{bottom}</View>}
      </View>
    )
  }
}

Page.propTypes = {
  top: PropTypes.node,
  bottom: PropTypes.node,
  white: PropTypes.bool,
  noScrollContent: PropTypes.bool,
  scrollViewProps: PropTypes.object,

  onRefresh: PropTypes.func
}

Page.defaultProps = {
  scrollViewProps: {}
}

export default Page
