import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";
interface SaludFormProps {
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const SaludGeneralYSociedad: React.FC<SaludFormProps>=({
    values,
  setFieldValue,
})=>{
    return(
        <IonCard>
              <IonCardHeader color="violeta">
                <IonCardTitle>SALUD GENERAL Y SOCIEDAD</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCard>
                  <IonCardHeader color="violeta">
                    <IonCardTitle>
                      ¿Algún integrante de la familia asiste a comedores o merenderos comunitarios ?
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonItem>
                    <IonSelect
                      name="saludAsisteComedorl"
                      value={values.saludAsisteComedorl}
                      onIonChange={(e) =>
                        setFieldValue("saludAsisteComedorl", parseInt(e.detail.value))
                      }
                    >
                      <IonSelectOption value={1}>Sí</IonSelectOption>
                      <IonSelectOption value={0}>No</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCard>
        
                <IonCard>
                  <IonCardHeader color="violeta">
                    <IonCardTitle>
                      ¿Cultiva frutas y hortalizas para consumo propio?
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonItem>
                    <IonSelect
                      name="saludCultiva"
                      value={values.saludCultiva}
                      onIonChange={(e) =>
                        setFieldValue("saludCultiva", parseInt(e.detail.value))
                      }
                    >
                      <IonSelectOption value={1}>Sí</IonSelectOption>
                      <IonSelectOption value={0}>No</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCard>

                <IonCard>
                  <IonCardHeader color="violeta">
                    <IonCardTitle>
                      ¿Realiza compostaje casero?
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonItem>
                    <IonSelect
                      name="saludCompos"
                      value={values.saludCompos}
                      onIonChange={(e) =>
                        setFieldValue("saludCompos", parseInt(e.detail.value))
                      }
                    >
                      <IonSelectOption value={1}>Sí</IonSelectOption>
                      <IonSelectOption value={0}>No</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCard>

                <IonCard>
                  <IonCardHeader color="violeta">
                    <IonCardTitle>
                      ¿Realiza sepación de residuos en domicilio?
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonItem>
                    <IonSelect
                      name="saludSepara"
                      value={values.saludSepara}
                      onIonChange={(e) =>
                        setFieldValue("saludSepara", parseInt(e.detail.value))
                      }
                    >
                      <IonSelectOption value={1}>Sí</IonSelectOption>
                      <IonSelectOption value={0}>No</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCard>
              </IonCardContent>
            </IonCard>
    )
}

export default SaludGeneralYSociedad