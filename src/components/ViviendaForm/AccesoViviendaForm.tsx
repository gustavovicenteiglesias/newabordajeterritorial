import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

interface AccesoViviendaFormProps {
  value: number;
  setFieldValue: (field: string, value: any) => void;
}

const AccesoViviendaForm: React.FC<AccesoViviendaFormProps> = ({
  value,
  setFieldValue,
}) => {
  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>¿Accedió a la vivienda?</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonSelect
            name="accesoVivienda"
            value={value}
            onIonChange={(e) =>
              setFieldValue("accesoVivienda", parseInt(e.detail.value))
            }
          >
            <IonSelectOption value={1}>Sí</IonSelectOption>
            <IonSelectOption value={0}>No</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default AccesoViviendaForm;
