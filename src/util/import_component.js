import React from 'react'

class ImportCom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Component: null
    }
  }

  componentWillMount () {
    const { __load, __options } = this.props

    this.setState({
      Component: null
    })

    __load().then(m => {
      this.setState({
        Component: m.default.default
      }, () => {
        if (__options.onLoad) {
          __options.onLoad()
        }
      })
    })
  }

  render () {
    const {
      __load, __options, // eslint-disable-line
      ...rest
    } = this.props

    const { Component } = this.state
    return Component && <Component {...rest}/>
  }
}

const importComponent = (load, options = {}) => {
  return (props) => {
    return <ImportCom {...props} __load={load} __options={options}/>
  }
}

export default importComponent
