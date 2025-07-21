import React, { useEffect, useState } from "react";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { getAllProblemas } from "../../services/ProblemasService";
import { Problemas } from "../../models/Problemas";
import {
  getProblemaPorIntegrante,
  getProblemasByIntegrante,
} from "../../services/IntegrantesHasProblemasService";

interface Props {
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const IntegrantesProblemasForm: React.FC<Props> = ({
  values,
  setFieldValue,
}) => {
  const [problemas, setproblemas] = useState<Problemas[]>([]);


  useEffect(() => {
    getAllProblemas()
      .then((resp) => {
        console.log(resp.data);
        setproblemas(resp.data.data);
        getProblemasByIntegrante(values.idIntegrantes)
          .then((res) => {
            console.log("Problemas",res.data.data)
            
            const seleccionadas =
              res.data.data?.map((item: any) => item.problemasIdProblemas) ||
              [];
            setFieldValue("problemasseleccionados", seleccionadas);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [values.idIntegrantes]);
  console.log(values.problemasseleccionados);
  return (
    <>
      <IonCard>
        <IonCardHeader color={"violeta"}>
          <IonCardTitle>Algún otro problema que le preocupa </IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonSelect
            style={{
              whiteSpace: "normal",
              overflow: "visible",
              textOverflow: "unset",
            }}
            name="problemasseleccionados"
            value={values.problemasseleccionados}
            multiple
            onIonChange={(e) =>
              setFieldValue("problemasseleccionados", e.detail.value)
            }
          >
            {problemas.map((data, i) => {
                console.log("Opción:", data.idProblemas, data.nombre);
              return (
                <IonSelectOption key={i} value={data.idProblemas}>
                  {data.nombre}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      </IonCard>
    </>
  );
};
export default IntegrantesProblemasForm;
