import React, { Component } from 'react'
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import { GREEN_PRIMARY_COLOR, AVATAR_BORDER } from '../../assets/colors'
import initials from 'initials'

const defaultImage = require('../../assets/images/img_default.png')

// from https://flatuicolors.com/
const defaultColors = [
  '#2ecc71', // emerald
  '#3498db', // peter river
  '#8e44ad', // wisteria
  '#e67e22', // carrot
  '#e74c3c', // alizarin
  '#1abc9c', // turquoise
  '#2c3e50' // midnight blue
]

function sumChars (str) {
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i)
  }

  return sum
}

class CircleAvatar extends Component {
  constructor (props) {
    super(props)
    const defaultStyles = {
      size: 50,
      borderWidth: 3,
      borderColor: AVATAR_BORDER
    }
    this.customStyles = { ...defaultStyles, ...props.customStyles }
    this.state = { failed: false }
    this.defaultImage =
      props.defaultImage !== undefined ? this.props.defaultImage : defaultImage
  }

  _onError = () => {
    this.setState({
      failed: true
    })
  }

  isHasAvatar (source) {
    if (
      (source && typeof source === 'object' && source.uri) ||
      typeof source === 'number'
    ) {
      return true
    }
    return false
  }

  getAvatar (source) {
    if (!this.isHasAvatar(source)) return this.defaultImage
    return source
  }

  renderText () {
    const name = this.props.name
    var isHasName = !!name
    var isHasImage = this.isHasAvatar(this.props.image) && !this.state.failed
    var innerText = null
    if (!isHasImage && isHasName) {
      var shortName = initials(name)
        .substring(0, 2)
        .toUpperCase()
      var style = StyleSheet.flatten(this.props.style)
      var size = style ? style.width : this.customStyles.size

      const innerStyle = {
        borderColor: '#E8E4E5',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8E4E5'
      }
      var colors = defaultColors
      var textColor = '#fff'
      var fontDecrease = 2.5
      let i = sumChars(name) % colors.length
      textColor = colors[i]

      var fontSize = size / fontDecrease

      innerText = (
        <View
          style={[
            {
              width: this.customStyles.size,
              height: this.customStyles.size,
              borderColor: this.customStyles.borderColor,
              borderWidth: this.customStyles.borderWidth,
              borderRadius: this.customStyles.size / 2
            },
            innerStyle,
            this.props.style
          ]}
        >
          <Text style={{ fontSize: fontSize, color: textColor }}>
            {shortName.toUpperCase()}
          </Text>
        </View>
      )
    }

    return innerText
  }

  renderImage () {
    const source = this.state.failed
      ? this.defaultImage
      : this.getAvatar(this.props.image)
    const style =
      this.isHasAvatar(this.props.image) && !this.state.failed
        ? [
          {
            width: this.customStyles.size,
            height: this.customStyles.size,
            borderColor: this.customStyles.borderColor,
            borderWidth: this.customStyles.borderWidth,
            borderRadius: this.customStyles.size / 2
          },
          this.props.style
        ]
        : [
          {
            width: this.customStyles.size,
            height: this.customStyles.size,
            borderColor: this.customStyles.borderColor,
            borderWidth: this.customStyles.borderWidth,
            borderRadius: this.customStyles.size / 2
          },
          this.props.style
        ]
    var innerImage = (
      <Image style={style} source={source} onError={this._onError} />
    )
    return innerImage
  }

  render () {
    var innerText = this.renderText()
    var innerImage = this.renderImage()
    var innerView = innerText || innerImage

    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={this.props.onPress}
      >
        {innerView}
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  greenBorder: {
    borderColor: GREEN_PRIMARY_COLOR,
    borderWidth: 2
  },
  grayBorder: {
    borderColor: AVATAR_BORDER,
    borderWidth: 3
  }
})

CircleAvatar.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  customStyles: PropTypes.object
}

export default CircleAvatar
