import React, { useEffect, useState } from "react";

import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { Actividad } from "../../models/Actividad";
import { getAllActividad } from "../../services/ActividadService";
import { getActividadByIntegrante } from "../../services/IntegrantesHasActividadService";



interface Props {
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}


const IntegrantesHasActividadForm:React.FC<Props>=({values,setFieldValue})=>{
    const [actividad,setactividad]=useState<Actividad []>([])

    useEffect(()=>{
        getAllActividad()
        .then((resp)=>{
            console.log(resp.data)
            setactividad(resp.data.data)
            getActividadByIntegrante(values.idIntegrantes)
        .then((res=>{
          console.log("Actividad ",res.data.data)
          const seleccionadas =
        res.data.data?.map(
          (item: any) => item.actividad_idActividad
        ) || [];
      setFieldValue("actividadseleccionados", seleccionadas);
        }))
        .catch((error)=>console.log(error))  
        })
        .catch((error)=>console.log(error)) 
        
    },[values.idIntegrantes])
    console.log(values.ecntseleccionados)
    return(
        <>
         <IonCard>
              <IonCardHeader color={"violeta"}>
                <IonCardTitle>Actividad</IonCardTitle>
              </IonCardHeader>
              <IonItem>
                <IonSelect
                style={{
                whiteSpace: "normal",
                overflow: "visible",
                textOverflow: "unset",
              }}
                name="actividadseleccionados"
                value={values.actividadseleccionados}
                multiple
                    onIonChange={(e) =>
                      setFieldValue("actividadseleccionados", e.detail.value)
                    }
                >
                  {actividad.map((data,i)=>{
                    return(
                      <IonSelectOption key={i} value={data.idActividad}>{data.nombre}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
            </IonCard>
        </>
    )
}
export default IntegrantesHasActividadForm;