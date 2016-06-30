import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames'

const propTypes = {
  active: PropTypes.bool,
  disable: PropTypes.bool,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string
}

const defaultProps = {
  color: 'primary',
  tag: 'button',
  size: 'default'
}

class Button extends Component {
  constructor(props) {
    super(props)
  }

  onClick = (e) => {
    if (this.props.disabled) {
      return e.preventDefault()
    }

    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    let { active, color, size, tag: Tag, ...attributes } = this.props

    const classes = classNames(
      className,
      'btn',
      'btn-' + color,
      size ? 'btn-' + size : false
    )

    if (attributes.href && Tag === 'button') {
      Tag = 'a'
    }

    return <Tag {...attributes} className={classes} onClick={this.onClick} />
  }
}

Button.propTypes =propTypes
Button.defaultProps = defaultProps

export default Button
