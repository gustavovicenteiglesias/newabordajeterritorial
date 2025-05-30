import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { getAllEfectores } from "../../services/EfectoresService";
import { getAllCausas } from "../../services/CausasSeleccionEfectoresService";
import { Efector } from "../../models/Efector";
import { CausaSeleccionEfector } from "../../models/CausaSeleccionEfector";
import { getEfectoresByVivienda } from "../../services/ViviendasHasEfectoresService";

import { ViviendasHasEfectores } from "../../models/ViviendasHasEfectores";
import { ViviendasHasCausas } from "../../models/ViviendasHasCausas";
import { getCausasByVivienda } from "../../services/ViviendasHasCausasSeleccionService";

interface Props {
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const AtencionEfectoresForm: React.FC<Props> = ({ values, setFieldValue }) => {
  const [efectores, setEfectores] = useState<Efector[]>([]);
  const [causas, setCausas] = useState<CausaSeleccionEfector[]>([]);
  //const [efectoresSeleccionados,setefectoresSeleccionados]=useState<ViviendasHasEfectores[]>([]);
  //const [causasSeleccionadas,setcausasSeleccionadas]=useState<ViviendasHasCausas[]>([]);

  useEffect(() => {
    getAllEfectores().then((res) => setEfectores(res.data.data));
    getAllCausas().then((res) => setCausas(res.data.data));

    getEfectoresByVivienda(values.idViviendas).then((res) => {
      const seleccionados =
        res.data.data?.map((item: any) => item.efectoresIdEfectores) || [];
      setFieldValue("efectoresSeleccionados", seleccionados);
    });

    getCausasByVivienda(values.idViviendas).then((res) => {
      const seleccionadas =
        res.data.data?.map(
          (item: any) => item.causasEleccionEfectoresIdCausasEleccionEfectores
        ) || [];
      setFieldValue("causasSeleccionadas", seleccionadas);
    });
  }, []);

  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Atención en Efectores de Salud</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>
              ¿Dónde concurre la familia ante un problema de salud?
            </IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              style={{
                whiteSpace: "normal",
                overflow: "visible",
                textOverflow: "unset",
              }}
              multiple
              value={values.efectoresSeleccionados}
              onIonChange={(e) =>
                setFieldValue("efectoresSeleccionados", e.detail.value)
              }
            >
              {efectores.map((ef) => (
                <IonSelectOption key={ef.idEfectores} value={ef.idEfectores}>
                  {ef.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>¿Por qué lo elige?</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              style={{
                whiteSpace: "normal",
                overflow: "visible",
                textOverflow: "unset",
              }}
              multiple
              value={values.causasSeleccionadas}
              onIonChange={(e) =>
                setFieldValue("causasSeleccionadas", e.detail.value)
              }
            >
              {causas.map((ca) => (
                <IonSelectOption
                  key={ca.idCausasEleccionEfectores}
                  value={ca.idCausasEleccionEfectores}
                >
                  {ca.causa}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};

export default AtencionEfectoresForm;
