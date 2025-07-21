import React,{ useEffect, useState } from "react";

import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { getAllPension } from "../../services/PensionService";
import { Pension } from "../../models/Pension";
import { EsquemaVacunacion } from "../../models/Esquemavacunacion";
import { getAllEsquemaVacunacion } from "../../services/EsquemaVacunacionService";

interface IntegrantesEsquemaVacunacionProps {
  values: any;
  handleChange: any;
  setFieldValue: (field: string, value: any) => void;
}

const IntegrantesEsquemaVacunacionForm: React.FC<IntegrantesEsquemaVacunacionProps> = ({
  values,
  setFieldValue
}) => {
  const [esquemavacunacion, setesquemavacunacion] = useState<EsquemaVacunacion[]>([]);

  useEffect(() => {
    getAllEsquemaVacunacion().then((resp) => {
      //console.log(resp.data);
      setesquemavacunacion(resp.data.data)
    });
  }, []);
  return (
    <IonCard>
      <IonCardHeader color={"violeta"}>
        <IonCardTitle>Esquema vacunación</IonCardTitle>
      </IonCardHeader>
      <IonItem>
        <IonSelect
        name="esquemaVacunacionIdEsquemaVacunacion"
        value={values.esquemaVacunacionIdEsquemaVacunacion}
            onIonChange={(e) =>
              setFieldValue("esquemaVacunacionIdEsquemaVacunacion", parseInt(e.detail.value))
            }
        >
          {esquemavacunacion.map((data,i)=>{
            return(
              <IonSelectOption key={i} value={data.idEsquemaVacunacion}>{data.nombre}</IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
    </IonCard>
  )
};
export default IntegrantesEsquemaVacunacionForm;