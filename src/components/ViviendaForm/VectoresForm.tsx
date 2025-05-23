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

interface VectoresFormProps {
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const  VectoresForm: React.FC<VectoresFormProps> = ({
  values,
  setFieldValue,
}) => {
  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Vectores</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>
              Existencia de roedores en la vivienda y/o peridomicilio
            </IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="vectoresExixteRoedores"
              value={values.vectoresExixteRoedores}
              onIonChange={(e) =>
                setFieldValue("vectoresExixteRoedores", parseInt(e.detail.value))
              }
            >
              <IonSelectOption value={1}>Sí</IonSelectOption>
              <IonSelectOption value={0}>No</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>
              Existencia de materiales inservibles
            </IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="vectoresExistenMateriales"
              value={values.vectoresExistenMateriales}
              onIonChange={(e) =>
                setFieldValue("vectoresExistenMateriales", parseInt(e.detail.value))
              }
            >
              <IonSelectOption value={1}>Sí</IonSelectOption>
              <IonSelectOption value={0}>No</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};

export default VectoresForm;
