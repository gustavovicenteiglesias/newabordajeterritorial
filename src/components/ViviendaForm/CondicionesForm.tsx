import React, { useEffect, useState } from "react";
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
import { getCondicionById } from "../../services/CondicionesSocioSanitariasService";
import { getAllTipoviviendas } from "../../services/TipoviviendasService";
import { getAllGas } from "../../services/GasService";
import { getAllRecoleccionResiduos } from "../../services/RecoleccionResiduosService";

interface CondicionesFormProps {
  idCondiciones: number;
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const CondicionesForm: React.FC<CondicionesFormProps> = ({
  idCondiciones,
  values,
  setFieldValue,
}) => {
  const [tiposVivienda, setTiposVivienda] = useState<any[]>([]);
  const [gases, setGases] = useState<any[]>([]);
  const [recolecciones, setRecolecciones] = useState<any[]>([]);

  

  useEffect(() => {
    getAllTipoviviendas().then((res) => setTiposVivienda(res.data.data));
    getAllGas().then((res) => setGases(res.data.data));
    getAllRecoleccionResiduos().then((res) => setRecolecciones(res.data.data));
  }, []);

  useEffect(() => {
    if (idCondiciones > 0) {
      getCondicionById(idCondiciones).then((res) => {
        const c = res.data.data;
        setFieldValue("nroIntegrantes", c.nroIntegrantes);
        setFieldValue("nroHabitaciones", c.nroHabitaciones);
        setFieldValue("tieneAguaCorriente", c.tieneAguaCorriente);
        setFieldValue("tieneCloaca", c.tieneCloaca);
        setFieldValue(
          "tipoViviendasIdTipoViviendas",
          c.tipoViviendasIdTipoViviendas?.idTipoViviendas ?? 0
        );
        setFieldValue("gasIdGas", c.gasIdGas?.idGas ?? 0);
        setFieldValue(
          "recoleccionReciduosIdRecoleccionReciduos",
          c.recoleccionReciduosIdRecoleccionReciduos?.idRecoleccionReciduos ?? 0
        );
      });
    }
  }, [idCondiciones, setFieldValue]);

  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Condiciones Sociosanitarias</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>Tipo de vivienda (según lo observado)</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="tipoViviendasIdTipoViviendas"
              value={values.tipoViviendasIdTipoViviendas}
              onIonChange={(e) =>
                setFieldValue(
                  "tipoViviendasIdTipoViviendas",
                  parseInt(e.detail.value)
                )
              }
            >
              {tiposVivienda.map((tipo) => (
                <IonSelectOption
                  key={tipo.idTipoViviendas}
                  value={tipo.idTipoViviendas}
                >
                  {tipo.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>N° de integrantes</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonInput
              name="nroIntegrantes"
              type="number"
              value={values.nroIntegrantes}
              onIonChange={(e) =>
                setFieldValue("nroIntegrantes", e.detail.value)
              }
            />
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>N° de habitaciones para dormir</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonInput
              name="nroHabitaciones"
              type="number"
              value={values.nroHabitaciones}
              onIonChange={(e) =>
                setFieldValue("nroHabitaciones", e.detail.value)
              }
            />
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>¿Tiene agua corriente?</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="tieneAguaCorriente"
              value={values.tieneAguaCorriente}
              onIonChange={(e) =>
                setFieldValue("tieneAguaCorriente", e.detail.value)
              }
            >
              <IonSelectOption value="SI">Sí</IonSelectOption>
              <IonSelectOption value="NO">No</IonSelectOption>
              <IonSelectOption value="NS_NC">NS_NC</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>¿Tiene cloaca?</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="tieneCloaca"
              value={values.tieneCloaca}
              onIonChange={(e) => setFieldValue("tieneCloaca", e.detail.value)}
            >
              <IonSelectOption value="SI_CONECTADAS">
                Sí, conectadas
              </IonSelectOption>
              <IonSelectOption value="SI_NO_CONECTADAS">
                Sí, no conectadas
              </IonSelectOption>
              <IonSelectOption value="NO">No</IonSelectOption>
              <IonSelectOption value="NS_NC">NS_NC</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>Tipo de gas</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="gasIdGas"
              value={values.gasIdGas}
              onIonChange={(e) =>
                setFieldValue("gasIdGas", parseInt(e.detail.value))
              }
            >
              {gases.map((gas) => (
                <IonSelectOption key={gas.idGas} value={gas.idGas}>
                  {gas.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color={"violeta"}>
            <IonCardTitle>Recolección de residuos</IonCardTitle>
          </IonCardHeader>
        <IonItem>
          <IonSelect
            name="recoleccionReciduosIdRecoleccionReciduos"
            value={values.recoleccionReciduosIdRecoleccionReciduos}
            onIonChange={(e) =>
              setFieldValue(
                "recoleccionReciduosIdRecoleccionReciduos",
                parseInt(e.detail.value)
              )
            }
          >
            <IonSelectOption value={0}>No especificado</IonSelectOption>
            {recolecciones.map((r: any) => (
              <IonSelectOption
                key={r.idRecoleccionReciduos}
                value={r.idRecoleccionReciduos}
              >
                {r.nombre}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};

export default CondicionesForm;
