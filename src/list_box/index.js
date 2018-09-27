import React from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import Text from '../text'
import Button from '../button'
import S from '../styles'
import V from '../variable'

class ListBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  // 暴露给外面用
  doFirstRequest = (params) => {
    this.setState({
      loading: false
    }, () => this.handleRequest(params))
  }

  handleRequest = (params) => {
    const { loading } = this.state

    if (loading) {
      return
    }

    this.setState({
      loading: true
    })

    const result = this.props.onRequest(params)
    result.then(() => {
      this.setState({
        loading: false
      })
    }).catch(() => {
      this.setState({
        loading: false
      })
    })
  }

  handleReload = () => {
    this.handleRequest()
  }

  render () {
    const {
      children,
      showEmpty,
      onRefresh, enableRefresh
    } = this.props
    const { loading } = this.state

    return (
      <ScrollView
        style={[S.flex]}
        refreshControl={enableRefresh ? (
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
            colors={[V.warnColor, V.primaryColor]}
          />
        ) : null}
      >
        {loading && (
          <View style={[S.flexAlignCenter, {
            paddingTop: 100
          }]}>
            <Text>加载中...</Text>
          </View>
        )}
        {showEmpty && (!loading) && (
          <View style={[S.flexAlignCenter, {
            paddingTop: 100
          }]}>
            <Text>没有数据</Text>
            <View style={S.padding10}/>
            <Button
              onPress={this.handleReload}
              type='default'
              mini
            >点击重新加载</Button>
          </View>
        )}
        {children}
      </ScrollView>
    )
  }
}

ListBox.propTypes = {
  // 提供 page_obj，要返回 promise，且 resolve json
  onRequest: PropTypes.func.isRequired,
  showEmpty: PropTypes.bool,
  enableRefresh: PropTypes.bool,
  onRefresh: PropTypes.func
}

ListBox.defaultProps = {
  showEmpty: false,
  enableRefresh: false
}

export default ListBox
