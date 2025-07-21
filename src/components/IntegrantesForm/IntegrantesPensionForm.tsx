import React,{ useEffect, useState } from "react";

import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { getAllPension } from "../../services/PensionService";
import { Pension } from "../../models/Pension";

interface IntegrantesPensionProps {
  values: any;
  handleChange: any;
  setFieldValue: (field: string, value: any) => void;
}

const IntegrantesPensionForm: React.FC<IntegrantesPensionProps> = ({
  values,
  setFieldValue
}) => {
  const [pension, setpension] = useState<Pension[]>([]);

  useEffect(() => {
    getAllPension().then((resp) => {
      //console.log(resp.data);
      setpension(resp.data.data)
    });
  }, []);
  return (
    <IonCard>
      <IonCardHeader color={"violeta"}>
        <IonCardTitle>Pensión</IonCardTitle>
      </IonCardHeader>
      <IonItem>
        <IonSelect
        name="pensionIdPension"
        value={values.pensionIdPension}
            onIonChange={(e) =>
              setFieldValue("pensionIdPension", parseInt(e.detail.value))
            }
        >
          {pension.map((data,i)=>{
            return(
              <IonSelectOption key={i} value={data.idPension}>{data.nombre}</IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
    </IonCard>
  )
};
export default IntegrantesPensionForm;