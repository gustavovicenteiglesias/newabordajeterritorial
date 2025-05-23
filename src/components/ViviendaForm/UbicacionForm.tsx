import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonInput,
} from "@ionic/react";

interface UbicacionFormProps {
  values: any;
  handleChange: (e: CustomEvent) => void;
}

const UbicacionForm: React.FC<UbicacionFormProps> = ({ values, handleChange }) => {
  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Ubicación GPS</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <div style={{ flex: 1 }}>Latitud</div>
            <IonInput
              name="latitud"
              type="number"
              value={values.latitud}
              onIonChange={handleChange}
              style={{ flex: 1 }}
            />
          </IonItem>
          <IonItem>
            <div style={{ flex: 1 }}>Longitud</div>
            <IonInput
              name="longitud"
              type="number"
              value={values.longitud}
              onIonChange={handleChange}
              style={{ flex: 1 }}
            />
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default UbicacionForm;
