import React from "react";
import s from "./Modal.module.css";
import imageSuccess from "../../common/images/success.png";
import imageFail from "../../common/images/unsuccess.svg";
import {connect} from "react-redux";

class  NotificationModal extends React.Component {
  render() {
    return (
      <div className={`${s.notificationModal} ${this.props.isActive ? s.active : ""}`}>
        <div className={s.notificationModal_image}>
          <div className={s.before}>
            <img src={this.props.status ? imageSuccess : imageFail} alt="notification_image"/>
          </div>
        </div>
        <div className={s.notificationModal_text}>
          {this.props.text}
        </div>
      </div>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    text: state.notification.text,
    status: state.notification.status,
    isActive: state.notification.isActive,
  }

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal);