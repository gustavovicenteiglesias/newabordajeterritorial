import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
} from "@ionic/react";
import * as Yup from "yup";
import moment from "moment";

interface IntegrantesHeaderProps {
  values: any;
  handleChange: any;
  setFieldValue: (field: string, value: any) => void;
}

const IntegantesHeader: React.FC<IntegrantesHeaderProps> = ({
  values,
  handleChange,
  setFieldValue,
}) => {
  useEffect(() => {
    console.log("n");
  }, []);

  return (
    <>
    <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Geolocalizacíon</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              labelPlacement="start"
              label="Latitud"
              name="latitud"
              onIonChange={handleChange}
              value={values.latitud}
              
            />
          </IonItem>
          <IonItem>
            <IonInput
              labelPlacement="start"
              label="Longitud"
              name="longitud"
              onIonChange={handleChange}
              value={values.longitud}
              
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Apellido</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              name="apellido"
              onIonChange={handleChange}
              value={values.apellido}
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Nombre</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              name="nombre"
              onIonChange={handleChange}
              value={values.nombre}
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>DNI</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              name="dni"
              onIonChange={handleChange}
              value={values.dni}
              type="number"
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Edad</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              name="edad"
              onIonChange={handleChange}
              value={values.edad}
              type="number"
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Genero</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="genero"
              value={values.genero}
              onIonChange={(e) => setFieldValue("genero", e.detail.value)}
            >
              <IonSelectOption value={"M"}>Masculino</IonSelectOption>
              <IonSelectOption value={"F"}>Femenino</IonSelectOption>
              <IonSelectOption value={"X"}>Otro</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Edad</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              name="edad"
              onIonChange={handleChange}
              value={values.edad}
              type="number"
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
            <IonCardHeader color="violeta">
              <IonCardTitle>Fecha de nacimiento</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonDatetimeButton datetime="fechanacimiento" />
                <IonModal keepContentsMounted={true}>
                  <IonDatetime
                    id="fechanacimiento"
                    name="fechanacimiento"
                    presentation="date"
                    value={values.fechanacimiento}
                    onIonChange={(e) => {
                      setFieldValue("fechanacimiento", e.detail.value)
                      console.log(moment(e.detail.value).format("YYYY-MM-DD"))
                    }}
                  />
                </IonModal>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Fuma</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="fumador"
              value={values.fumador}
              onIonChange={(e) => setFieldValue("fumador", e.detail.value)}
            >
              <IonSelectOption value={0}>SI</IonSelectOption>
              <IonSelectOption value={1}>NO</IonSelectOption>
            
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default IntegantesHeader;
