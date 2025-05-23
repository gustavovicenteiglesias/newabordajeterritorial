import React, { useEffect } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { getZoonosisById } from "../../services/ZoonosisService";

interface ZoonosisFormProps {
  idZoonosis: number;
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ZoonosisForm: React.FC<ZoonosisFormProps> = ({
  idZoonosis,
  values,
  setFieldValue,
}) => {
  useEffect(() => {
    if (idZoonosis > 0) {
      getZoonosisById(idZoonosis).then((res) => {
        const z = res.data.data;
        setFieldValue("cantidadAnimales", z.cantidad);
        setFieldValue("vacunados", z.vacunados);
        setFieldValue("castrados", z.castrados);
      });
    }
  }, [idZoonosis, setFieldValue]);

  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Zoonosis</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>Cantidad de perros</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonInput
                name="cantidadAnimales"
                type="number"
                value={values.cantidadAnimales}
                onIonChange={(e) =>
                  setFieldValue("cantidadAnimales", e.detail.value)
                }
              />
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>¿Están vacunados?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonSelect
                value={values.vacunados}
                onIonChange={(e) =>
                  setFieldValue("vacunados", parseInt(e.detail.value))
                }
              >
                <IonSelectOption value={1}>Sí</IonSelectOption>
                <IonSelectOption value={0}>No</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>¿Están castrados?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonSelect
                value={values.castrados}
                onIonChange={(e) =>
                  setFieldValue("castrados", parseInt(e.detail.value))
                }
              >
                <IonSelectOption value={1}>Sí</IonSelectOption>
                <IonSelectOption value={0}>No</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};

export default ZoonosisForm;
