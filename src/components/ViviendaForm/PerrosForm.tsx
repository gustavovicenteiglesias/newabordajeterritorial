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
import ZoonosisForm from "./ZoonosisForm";

interface PerrosFormProps {
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const PerrosForm: React.FC<PerrosFormProps> = ({ values, setFieldValue }) => {
  return (
    <>
      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>¿Tiene perros?</IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonSelect
            name="perros"
            value={values.perros}
            onIonChange={(e) =>
              setFieldValue("perros", parseInt(e.detail.value))
            }
          >
            <IonSelectOption value={1}>Sí</IonSelectOption>
            <IonSelectOption value={0}>No</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonCard>

      {values.perros === 1 && (
        <ZoonosisForm
          idZoonosis={values.zoonosisIdZoonosis}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
    </>
  );
};

export default PerrosForm;
