import { IonButton, IonInput, IonItem } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

export const BasicInfo: React.FC<any> = ({ next }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <div className="slide-main ion-padding">
      <div className="form-content">
        <h1>Basic Information</h1>
        <IonItem lines="none">
          <IonInput
            autocomplete="new-password"
            placeholder="First Name"
            type="text"
            {...register("first", { required: "First Name Is Required" })}
          ></IonInput>
        </IonItem>
        <ErrorMessage errors={errors} name="first" />

        <IonItem lines="none" style={{ marginTop: 8 }}>
          <IonInput
            autocomplete="new-password"
            placeholder="Last Name"
            type="text"
            {...register("last", { required: "Last Name Is Required" })}
          ></IonInput>
        </IonItem>
        <ErrorMessage errors={errors} name="last" />
      </div>
      <div className="form-footer">
        <IonButton onClick={() => next(["first", "last"])}>Next</IonButton>
      </div>
    </div>
  );
};

export default BasicInfo;
