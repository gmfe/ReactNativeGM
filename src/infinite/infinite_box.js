import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Infinite from './infinite'
import Button from '../button'
import S from '../styles'

class InfiniteBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page_obj: null,
      limit: 10, // 后台默认10
      offset: 0,
      loading: false,
      done: false,
      isInitialized: false
    }
  }

  // 暴露给外面用
  doFirstRequest = (params) => {
    this.setState({
      page_obj: null,
      limit: 10,
      offset: 0,
      loading: false,
      done: false,
      isInitialized: false
    }, () => this.handleRequest(params))
  }

  handleRequest = (params = {}) => {
    const { loading, page_obj, isInitialized } = this.state

    if (loading) {
      return
    }

    this.setState({
      loading: true
    })

    const result = this.props.onRequest(Object.assign({
      page_obj
    }, params))
    result.then(json => {
      this.setState({
        loading: false,
        page_obj: json.pagination.page_obj,
        done: !json.pagination.more && json.data && json.data.length > 0, // 有数据切more false 才叫真正的没有更多数据
        isInitialized: true
      })
    }).catch(() => {
      this.setState({
        loading: false,
        isInitialized
      })
    })
  }

  handleReload = () => {
    this.setState({
      page_obj: null,
      isInitialized: false
    }, () => this.handleRequest(null, true))
  }

  render () {
    const {
      children,
      showEmpty,
      enableRefresh
    } = this.props
    const { loading, isInitialized } = this.state

    return (
      <Infinite
        onBottom={this.handleRequest}
        done={this.state.done}
        enableRefresh={enableRefresh}
        onRefresh={this.handleReload}
        refreshing={!isInitialized && loading}
      >
        {loading && (
          <View style={[S.flexAlignCenter, {
            paddingTop: 100
          }]}>
            <Text style={[S.text]}>加载中...</Text>
          </View>
        )}
        {showEmpty && (!loading) && (
          <View style={[S.flexAlignCenter, {
            paddingTop: 100
          }]}>
            <Text style={[S.text]}>没有数据</Text>
            <View style={S.padding10}/>
            <Button
              onPress={this.handleReload}
              type='default'
              mini
            >点击重新加载</Button>
          </View>
        )}
        {children}
      </Infinite>
    )
  }
}

InfiniteBox.propTypes = {
  // 提供 page_obj，要返回 promise，且 resolve json
  onRequest: PropTypes.func.isRequired,
  showEmpty: PropTypes.bool,
  enableRefresh: PropTypes.bool
}

InfiniteBox.defaultProps = {
  showEmpty: false,
  enableRefresh: false
}

export default InfiniteBox
