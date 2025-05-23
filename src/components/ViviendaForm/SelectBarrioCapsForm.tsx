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

interface SelectBarrioCapsFormProps {
  values: any;
  handleChange: (e: CustomEvent) => void;
  barrios: any[];
  caps: any[];
}

const SelectBarrioCapsForm: React.FC<SelectBarrioCapsFormProps> = ({
  values,
  handleChange,
  barrios,
  caps,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>CAPS/US</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="capsIdCaps"
              onIonChange={handleChange}
              value={values.capsIdCaps}
            >
              {caps.map((item) => (
                <IonSelectOption key={item.idCaps} value={item.idCaps}>
                  {item.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Barrio</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonSelect
              name="barriosIdBarrios"
              onIonChange={handleChange}
              value={values.barriosIdBarrios}
            >
              {barrios.map((item) => (
                <IonSelectOption key={item.idBarrios} value={item.idBarrios}>
                  {item.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default SelectBarrioCapsForm;
