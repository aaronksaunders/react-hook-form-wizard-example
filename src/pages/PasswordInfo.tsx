import { IonButton, IonInput, IonItem } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const PasswordInfo: React.FC<any> = ({ next, prev }) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext(); // retrieve all hook methods
  return (
    <div className="slide-main ion-padding">
      <div className="form-content">
        <h1>Password Information</h1>
        <IonItem lines="none">
          <IonInput
            autocomplete="new-password"
            placeholder="Password"
            type="password"
            {...register("password-1", { required: "Password Is Required" })}
          ></IonInput>
        </IonItem>
        <ErrorMessage errors={errors} name="password-1" />

        <IonItem lines="none" style={{ marginTop: 8 }}>
          <IonInput
            autocomplete="new-password"
            placeholder="Confirm Password"
            type="password"
            {...register("password-2", {
              validate: {
                noMatch: (value: string) => {
                  return value !== getValues("password-1")
                    ? "Passwords Do Not Match"
                    : undefined;
                },
              },
            })}
          ></IonInput>
        </IonItem>
        <ErrorMessage errors={errors} name="password-2" />
      </div>
      <div className="form-footer">
        <IonButton onClick={() => prev()}>Prev</IonButton>
        <IonButton onClick={() => next(["password-1", "password-2"])}>
          Next
        </IonButton>
      </div>
    </div>
  );
};

export default PasswordInfo;
