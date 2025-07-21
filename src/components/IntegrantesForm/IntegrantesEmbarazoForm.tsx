import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonDatetime,
  IonDatetimeButton,
  IonInput,
  IonItem,
  IonModal,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import moment from "moment";
import React, { useEffect, useState } from "react";

interface IntegrantesEmbarazoProps {
  values: any;
  handleChange: any;
  setFieldValue: (field: string, value: any) => void;
}

const IntegranteEmbarazoForm: React.FC<IntegrantesEmbarazoProps> = ({
  values,
  handleChange,
  setFieldValue,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader color={"violeta"}>
          <IonCardTitle>Control de salud en el último año</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="controlSalud"
              value={values.controlSalud}
              onIonChange={(e) => setFieldValue("controlSalud", e.detail.value)}
            >
              <IonSelectOption value={1}>SI</IonSelectOption>
              <IonSelectOption value={0}>NO</IonSelectOption>
              <IonSelectOption value={null}>NS/NC</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color={"violeta"}>
          <IonCardTitle>¿Realizó un PAP en los últimos dos años?</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="pap"
              value={values.pap}
              onIonChange={(e) => setFieldValue("pap", e.detail.value)}
            >
              <IonSelectOption value={"NA"}>NA</IonSelectOption>
              <IonSelectOption value={"NO"}>NO</IonSelectOption>
              <IonSelectOption value={"NS_NC"}>NS/NC</IonSelectOption>
              <IonSelectOption value={"SI"}>SI</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color={"violeta"}>
          <IonCardTitle>
            ¿Realizó una mamografía en los dos últimos años?
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="mamografia"
              value={values.mamografia}
              onIonChange={(e) => setFieldValue("mamografia", e.detail.value)}
            >
              <IonSelectOption value={"NA"}>NA</IonSelectOption>
              <IonSelectOption value={"NO"}>NO</IonSelectOption>
              <IonSelectOption value={"NS_NC"}>NS/NC</IonSelectOption>
              <IonSelectOption value={"SI"}>SI</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader color={"violeta"}>
          <IonCardTitle>Embarazo</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="embarazo"
              value={values.embarazo}
              onIonChange={(e) => setFieldValue("embarazo", e.detail.value)}
            >
              <IonSelectOption value={1}>SI</IonSelectOption>
              <IonSelectOption value={0}>NO</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>

      {values.embarazo === 1 ? (
        <>
          <IonCard>
            <IonCardHeader color="violeta">
              <IonCardTitle>F.P.P. (fecha probable de parto)</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonDatetimeButton datetime="fpp" />
                <IonModal keepContentsMounted={true}>
                  <IonDatetime
                    id="fpp"
                    name="fpp"
                    presentation="date"
                    value={values.fpp}
                    onIonChange={(e) => setFieldValue("fpp", e.detail.value)}
                  />
                </IonModal>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader color="violeta">
              <IonCardTitle>Controles prenatales</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonInput
                  name="controlesPrenatales"
                  onIonChange={handleChange}
                  value={values.controlesPrenatales}
                  type="number"
                />
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader color={"violeta"}>
              <IonCardTitle>Embarazo</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonSelect
                  name="embarazoRiesgo"
                  value={values.embarazoRiesgo}
                  onIonChange={(e) =>
                    setFieldValue("embarazoRiesgo", e.detail.value)
                  }
                >
                  <IonSelectOption value={1}>SI</IonSelectOption>
                  <IonSelectOption value={0}>NO</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCardContent>
          </IonCard>
         
        </>
      ) : null}
       
    </>
  );
};
export default IntegranteEmbarazoForm;
