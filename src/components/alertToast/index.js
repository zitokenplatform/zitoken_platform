import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';
class AlertToast extends Component {
    notify = () => {
        const {type , messenger} = this.props;
        switch (type){
            case "S":
                toast.success(messenger, {
                    position: toast.POSITION.TOP_CENTER
                });
                break;
            case "E":
                toast.error(messenger, {
                    position: toast.POSITION.TOP_CENTER
                });
                break;
            case "W":
                toast.warn(messenger, {
                    position: toast.POSITION.TOP_CENTER
                });
                break;
            case "I":
                toast.info(messenger, {
                    position: toast.POSITION.TOP_CENTER
                });
                break;
            default:
                toast.info(messenger, {
                    position: toast.POSITION.TOP_CENTER
                });
                break;
        }       
        
      };

    render() {
        return (
            <div>
                {this.notify()}
                <ToastContainer />
            </div>
        );;
    }
}
AlertToast.propTypes = {
    type: PropTypes.string,
    messenger: PropTypes.string,

};
export default AlertToast;