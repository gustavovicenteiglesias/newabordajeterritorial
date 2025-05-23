import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
} from "@ionic/react";

interface ViviendaHeaderProps {
  values: any;
  handleChange: any;
}

const ViviendaHeader: React.FC<ViviendaHeaderProps> = ({
  values,
  handleChange,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Agente Sanitario</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              name="agenteSanitario"
              onIonChange={handleChange}
              value={values.agenteSanitario}
            />
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Nro Manzana</IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonInput
            name="nroManzana"
            type="number"
            onIonChange={handleChange}
            value={values.nroManzana}
          />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>N° de casa</IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonInput
            name="nroCasa"
            onIonChange={handleChange}
            value={values.nroCasa}
          />
        </IonItem>
      </IonCard>

      <IonCard>
        <IonCardHeader color="violeta">
          <IonCardTitle>Domicilio (calle y nro) o catastro</IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonInput
            name="calle"
            onIonChange={handleChange}
            value={values.calle}
          />
        </IonItem>
      </IonCard>
    </>
  );
};

export default ViviendaHeader;
