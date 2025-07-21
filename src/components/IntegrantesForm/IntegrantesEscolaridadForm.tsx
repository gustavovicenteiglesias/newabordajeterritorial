import React,{ useEffect, useState } from "react";

import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { Escolaridad } from "../../models/Escolaridad";
import { getAllEscolaridad } from "../../services/EscolaridadService";

interface IntegrantesEscoaridadProps {
  values: any;
  handleChange: any;
  setFieldValue: (field: string, value: any) => void;
}

const IntegrantesEscolaridadForm: React.FC<IntegrantesEscoaridadProps> = ({
  values,
  setFieldValue
}) => {
  const [escolaridad, setescolaridad] = useState<Escolaridad[]>([]);

  useEffect(() => {
    getAllEscolaridad().then((resp) => {
      //console.log(resp.data);
      setescolaridad(resp.data.data)
    });
  }, []);
  return (
    <IonCard>
      <IonCardHeader color={"violeta"}>
        <IonCardTitle>Escolaridad</IonCardTitle>
      </IonCardHeader>
      <IonItem>
        <IonSelect
        name="escolaridadIdEscolaridad"
        value={values.escolaridadIdEscolaridad}
            onIonChange={(e) =>
              setFieldValue("escolaridadIdEscolaridad", parseInt(e.detail.value))
            }
        >
          {escolaridad.map((data,i)=>{
            return(
              <IonSelectOption key={i} value={data.idEscolaridad}>{data.nombre}</IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
    </IonCard>
  )
};
export default IntegrantesEscolaridadForm;