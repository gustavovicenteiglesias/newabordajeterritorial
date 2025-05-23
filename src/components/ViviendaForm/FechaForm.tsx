import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
} from "@ionic/react";

interface FechaFormProps {
  value: string;
  setFieldValue: (field: string, value: any) => void;
}

const FechaForm: React.FC<FechaFormProps> = ({ value, setFieldValue }) => {
  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Fecha de visita</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonDatetimeButton datetime="fecha" />
          <IonModal keepContentsMounted={true}>
            <IonDatetime
              id="fecha"
              name="fecha"
              presentation="date"
              value={value}
              onIonChange={(e) => setFieldValue("fecha", e.detail.value)}
            />
          </IonModal>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default FechaForm;
