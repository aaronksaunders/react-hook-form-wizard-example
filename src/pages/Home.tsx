import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide,
} from "@ionic/react";

// react hook form
import { FormProvider, useForm } from "react-hook-form";


import React, { useEffect, useRef, useState } from "react";

import "./Home.css";
import BasicInfo from "./BasicInfo";
import PasswordInfo from "./PasswordInfo";
import ContactInfo from "./ContactInfo";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Home: React.FC = () => {
  const mySlides = useRef<any>(null);
  const [formData, setFormData] = useState<any>();

  const methods = useForm();
  const { handleSubmit, trigger } = methods;


  useEffect(() => {
    mySlides.current.lockSwipes(true);
  });

  const next = async (fields: any) => {
    const result = await trigger(fields);
    if (!result) return;
    await mySlides.current.lockSwipes(false);
    await mySlides.current.slideNext();
    await mySlides.current.lockSwipes(true);
  };

  const prev = async () => {
    await mySlides.current.lockSwipes(false);
    await mySlides.current.slidePrev();
    await mySlides.current.lockSwipes(true);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Hook Form Wizard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}  autoComplete="off">
            <IonSlides pager={true} options={slideOpts} ref={mySlides}>
              <IonSlide>
                <BasicInfo next={next} />
              </IonSlide>
              <IonSlide>
                <PasswordInfo next={next} prev={prev} />
              </IonSlide>
              <IonSlide>
                <ContactInfo prev={prev} />
              </IonSlide>
            </IonSlides>
          </form>
        </FormProvider>
        <div style={{ fontSize: "smaller" }}>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
