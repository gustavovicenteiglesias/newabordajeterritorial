import React, { useEffect, useState } from "react";
import { Ecnt } from "../../models/Ecnt";
import { getAllEcnt } from "../../services/EcntService";
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { getByIntegrante } from "../../services/IntegrantesHasEcntService";


interface Props {
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}


const IntegrantesEcntForm:React.FC<Props>=({values,setFieldValue})=>{
    const [ecnt,setecnt]=useState<Ecnt []>([])

    useEffect(()=>{
        getAllEcnt()
        .then((resp)=>{
            console.log(resp.data)
            setecnt(resp.data.data)
        })
        .catch((error)=>console.log(error)) 
        getByIntegrante(values.idIntegrantes)
        .then((res=>{
          const seleccionadas =
        res.data.data?.map(
          (item: any) => item.ecntIdEcnt
        ) || [];
      setFieldValue("ecntseleccionados", seleccionadas);
        }))
        .catch((error)=>console.log(error))  
    },[values.idIntegrantes])
    console.log(values.ecntseleccionados)
    return(
        <>
         <IonCard>
              <IonCardHeader color={"violeta"}>
                <IonCardTitle>ECNT</IonCardTitle>
              </IonCardHeader>
              <IonItem>
                <IonSelect
                style={{
                whiteSpace: "normal",
                overflow: "visible",
                textOverflow: "unset",
              }}
                name="ecntseleccionados"
                value={values.ecntseleccionados}
                multiple
                    onIonChange={(e) =>
                      setFieldValue("ecntseleccionados", e.detail.value)
                    }
                >
                  {ecnt.map((data,i)=>{
                    return(
                      <IonSelectOption key={i} value={data.idEcnt}>{data.nombre}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
            </IonCard>
        </>
    )
}
export default IntegrantesEcntForm;