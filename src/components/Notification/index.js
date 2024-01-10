/* eslint-disable react/no-unknown-property */
// Write your code here

import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="notifications-text">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}
export default Notification
