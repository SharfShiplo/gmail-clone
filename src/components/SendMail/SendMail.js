import React from "react";
import "./SendMail.css";
import { IconButton, Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase";
import firebase from "firebase";
function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const sendMail = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <Typography variant="body2">New Mail</Typography>
        <IconButton onClick={() => dispatch(closeSendMessage())}>
          <CloseIcon />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(sendMail)}>
        <div className="sendMail__body">
          <input
            name="to"
            type="email"
            placeholder="To"
            ref={register({ required: true })}
          />
          {errors.to && (
            <small className="sendMail__error">Recipient is required</small>
          )}
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <small className="sendMail__error">Subject is required</small>
          )}
          <textarea name="message" ref={register({ required: true })} />
          {errors.message && (
            <small className="sendMail__error">Message is required</small>
          )}
        </div>
        <div className="sendMail__footer">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
