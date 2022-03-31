import {
  IonButton,
  IonInput,
  IonItem
} from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const ContactInfo: React.FC<any> = ({ prev }) => {
  const { register, formState: { errors }, } = useFormContext(); // retrieve all hook methods
  return (
    <div className="slide-main ion-padding">
      <div className="form-content">
        <h1>Contact Information</h1>
        <IonItem lines="none">
          <IonInput
            placeholder="Email Address"
            type="email"
            {...register("email", { required: "Email Is Required" })}
          ></IonInput>
        </IonItem>
        <ErrorMessage errors={errors} name="email" />

        <IonItem lines="none" style={{ marginTop: 8 }}>
          <IonInput
            placeholder="Phone Number"
            {...register("phone", { required: "Phone Number Is Required" })}
          ></IonInput>
        </IonItem>
        <ErrorMessage errors={errors} name="phone" />
      </div>
      <div className="form-footer">
        <IonButton onClick={() => prev()}>Prev</IonButton>
        <IonButton type="submit">SUBMIT</IonButton>
      </div>
    </div>
  );
};

export default ContactInfo;