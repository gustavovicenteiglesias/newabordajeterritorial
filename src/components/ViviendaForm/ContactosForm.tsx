import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonLabel,
} from "@ionic/react";
import { getContactoById } from "../../services/ContactosService";

interface ContactoFormProps {
  idContacto: number;
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ContactoForm: React.FC<ContactoFormProps> = ({
  idContacto,
  values,
  setFieldValue,
}) => {
  useEffect(() => {
    if (idContacto > 0) {
      getContactoById(idContacto).then((res) => {
        const contacto = res.data.data;
        setFieldValue("contactoApellido", contacto.apellido);
        setFieldValue("contactoTelefono", contacto.telefono);
        setFieldValue("contactoInfo", contacto.info);
      });
    }
  }, [idContacto, setFieldValue]);

  return (
    <IonCard>
      <IonCardHeader color="violeta">
        <IonCardTitle>Contacto</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>Teléfono</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonInput
              name="contactoTelefono"
              type="number"
              value={values.contactoTelefono}
              onIonChange={(e) =>
                setFieldValue("contactoTelefono", e.detail.value)
              }
            />
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>
              ¿Desea recibir información aobre salud a través de whatsapp?
            </IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonSelect
              name="contactoInfo"
              value={values.contactoInfo}
              onIonChange={(e) =>
                setFieldValue("contactoInfo", parseInt(e.detail.value))
              }
            >
              <IonSelectOption value={1}>Sí</IonSelectOption>
              <IonSelectOption value={0}>No</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader color="violeta">
            <IonCardTitle>Apellido</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonInput
              name="contactoApellido"
              value={values.contactoApellido}
              onIonChange={(e) =>
                setFieldValue("contactoApellido", e.detail.value)
              }
            />
          </IonItem>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};

export default ContactoForm;
