// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const infoNotification = () => (
    <Notification>
      <div className="notifying-container">
        <MdInfo className="info icon" />
        <div className="message-container">
          <h1 className="message info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <div className="notifying-container">
        <MdWarning className="warning icon" />
        <div className="message-container">
          <h1 className="message warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <div className="notifying-container">
        <RiErrorWarningFill className="error icon" />
        <div className="message-container">
          <h1 className="message error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const successNotification = () => (
    <Notification>
      <div className="notifying-container">
        <AiFillCheckCircle className="success icon" />
        <div className="message-container">
          <h1 className="message success">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="heading">Alert Notifications</h1>
        {successNotification()}
        {errorNotification()}
        {warningNotification()}
        {infoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
