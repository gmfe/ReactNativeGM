import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, RefreshControl } from 'react-native'
import Variable from '../variable'

class Page extends React.Component {
  render () {
    const {
      style,
      white,
      noScrollContent,
      scrollViewProps,
      top,
      bottom,

      enableRefresh, refreshing, onRefresh,

      children,
      ...rest
    } = this.props

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
            refreshControl={enableRefresh ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[Variable.warnColor, Variable.primaryColor]}
              />
            ) : null}
            {...scrollViewProps}
            style={[{ flex: 1 }, scrollViewProps.style]}
          >
            {children}
          </ScrollView>
        )}
        {bottom || undefined}
      </View>
    )
  }
}

Page.propTypes = {
  top: PropTypes.node,
  bottom: PropTypes.node,
  white: PropTypes.bool,
  children: PropTypes.node,
  noScrollContent: PropTypes.bool,
  scrollViewProps: PropTypes.object,

  enableRefresh: PropTypes.bool,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func
}

Page.defaultProps = {
  scrollViewProps: {}
}

export default Page
