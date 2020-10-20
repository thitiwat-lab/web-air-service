import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../../../styles/main.scss'

export const LinkActive = (props) => {
  const r = useRouter()
  const to = typeof props.to === 'object' ? props.to.pathname : props.to
  return (
    <li className={classnames({active: r.pathname === to },'click')}>
      <Link href={to}>
        <a className="navbar-brand" style={{fontSize:'18px'}} >
          <button className="bntclick clicks">
            {props.icon ? <i className={props.icon} /> : ''} <span>{props.title}</span>
          </button>
        </a>
      </Link>
    </li>
  )
}

LinkActive.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}