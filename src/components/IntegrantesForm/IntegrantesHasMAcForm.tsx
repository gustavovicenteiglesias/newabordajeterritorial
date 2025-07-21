import React, { useEffect, useState } from "react";

import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { Mac } from "../../models/Mac";
import { getAllIntegrantesHasMacByIntegrante } from "../../services/IntegrantesHasMacService";
import { getAllMac } from "../../services/macService";




interface Props {
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}


const IntegrantesHasMacForm:React.FC<Props>=({values,setFieldValue})=>{
    const [mac,setmac]=useState<Mac []>([])

    useEffect(()=>{
        getAllMac()
        .then((resp)=>{
            console.log(resp.data)
            setmac(resp.data.data)
         
        })
        .catch((error)=>console.log(error)) 
        
    },[])
    console.log(values.macsseleccionados)
    return(
        <>
         <IonCard>
              <IonCardHeader color={"violeta"}>
                <IonCardTitle>Método Anticonceptivo</IonCardTitle>
              </IonCardHeader>
              <IonItem>
                <IonSelect
                style={{
                whiteSpace: "normal",
                overflow: "visible",
                textOverflow: "unset",
              }}
                name="macIdMac"
                value={values.macIdMac}
                
                    onIonChange={(e) =>
                      setFieldValue("macIdMac", e.detail.value)
                    }
                >
                  {mac.map((data,i)=>{
                    return(
                      <IonSelectOption key={i} value={data.idMac}>{data.nombre}</IonSelectOption>
                    )
                  })}
                </IonSelect>
              </IonItem>
            </IonCard>
        </>
    )
}
export default IntegrantesHasMacForm;