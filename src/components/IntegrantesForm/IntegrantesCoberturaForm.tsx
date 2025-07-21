import React,{ useEffect, useState } from "react";
import { Coberturasalud } from "../../models/Coberturasalud";
import { getAllCoberturasalud } from "../../services/CorberturaSaludService";
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonSelect, IonSelectOption } from "@ionic/react";

interface IntegrantesCoberturaProps {
  values: any;
  handleChange: any;
  setFieldValue: (field: string, value: any) => void;
}

const IntegrantesCoberturaForm: React.FC<IntegrantesCoberturaProps> = ({
  values,
  setFieldValue
}) => {
  const [coberturaSalud, setCoberturaSalud] = useState<Coberturasalud[]>([]);

  useEffect(() => {
    getAllCoberturasalud().then((resp) => {
      //console.log(resp.data);
      setCoberturaSalud(resp.data.data)
    });
  }, []);
  return (
    <IonCard>
      <IonCardHeader color={"violeta"}>
        <IonCardTitle>Cobertura de salud</IonCardTitle>
      </IonCardHeader>
      <IonItem>
        <IonSelect
        name="coberturaSaludIdCoberturaSalud"
        value={values.coberturaSaludIdCoberturaSalud}
            onIonChange={(e) =>
              setFieldValue("coberturaSaludIdCoberturaSalud", parseInt(e.detail.value))
            }
        >
          {coberturaSalud.map((data,i)=>{
            return(
              <IonSelectOption key={i} value={data.idCoberturaSalud}>{data.nombre}</IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
    </IonCard>
  )
};
export default IntegrantesCoberturaForm;
