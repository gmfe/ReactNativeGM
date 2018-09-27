import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { AsyncStorage } from 'react-native'

const prefix = '_react-native-gm_'

const StorageStatics = {
  set (key, value) {
    return AsyncStorage.setItem(prefix + key, JSON.stringify(value))
  },
  get (key) {
    return AsyncStorage.getItem(prefix + key).then(v => v ? JSON.parse(v) : v)
  },
  remove (key) {
    return AsyncStorage.removeItem(prefix + key)
  },
  clear () {
    return AsyncStorage.clear()
  },
  getAll () {
    return AsyncStorage.getAllKeys().then(keys => {
      return AsyncStorage.multiGet(keys).then(datas => {
        const result = {}
        _.each(datas, v => {
          result[v[0]] = v[1]
        })
        return result
      })
    })
  }
}

class Storage extends React.Component {
  componentWillUpdate (nextProps) {
    if (this.props.autoSave) {
      StorageStatics.set(nextProps.name, nextProps.value)
    }
  }

  componentWillMount () {
    StorageStatics.set(this.props.name, this.props.value)
  }

  componentWillUnMount () {
    StorageStatics.set(this.props.name, this.props.value)
  }

  render () {
    return null
  }
}

Object.assign(Storage, StorageStatics)

Storage.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any, // 请确保数据可JSON
  autoSave: PropTypes.bool
}
Storage.defaultProps = {
  autoSave: true
}

export default Storage
