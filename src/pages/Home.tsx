import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide,
  setupIonicReact,
} from "@ionic/react";

// react hook form
import { FormProvider, useForm } from "react-hook-form";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';

import React, { useEffect, useRef, useState } from "react";

import "./Home.css";
import BasicInfo from "./BasicInfo";
import PasswordInfo from "./PasswordInfo";
import ContactInfo from "./ContactInfo";

setupIonicReact();

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Home: React.FC = () => {
  const [mySlides, setMySlides] = useState<any>(null)
  const [formData, setFormData] = useState<any>();

  const methods = useForm();
  const { handleSubmit, trigger } = methods;

  useEffect(() => {
    // mySlides?.lockSwipes(true);
  });

  const next = async (fields: any) => {
    const result = await trigger(fields);
    if (!result) return;
    // await mySlides?.lockSwipes(false);
    await mySlides?.slideNext();
    // await mySlides?.lockSwipes(true);
  };

  const prev = async () => {
    // await mySlides?.lockSwipes(false);
    await mySlides?.slidePrev();
    // await mySlides?.lockSwipes(true);
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
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              noSwiping={true}
              noSwipingClass="noSwipingClass"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setMySlides(swiper)}
            >
              <SwiperSlide  className="noSwipingClass">
                <BasicInfo next={next} className="noSwiping"/>
              </SwiperSlide>
              <SwiperSlide  className="noSwipingClass">
                <PasswordInfo next={next} prev={prev} />
              </SwiperSlide>
              <SwiperSlide className="noSwipingClass">
                <ContactInfo prev={prev} />
              </SwiperSlide>
            </Swiper>
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
