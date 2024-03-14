import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "./Contacto.module.css";
import Swal from "sweetalert2";

const Contacto = () => {
  const [state, handleSubmit] = useForm("xrgnqgnz");
  const formRef = useRef(null); 

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (state.succeeded) {
      Swal.fire({
        title: t("Mensaje enviado"),
        text: t("Gracias por contactarnos"),
        icon: "success"
      });
      formRef.current.reset(); 
    }
  };

  return (
    <div className={style.containerContactUs}>
      <div className={style.flyerWebDevelop}>
        <div className={style.containerImage}>
          <img src="./images/logo-nav.png" alt="imagenLogo" />
          <span>Claudia Huertas Psicologa</span>
        </div>
      </div>
      <form ref={formRef} onSubmit={handleFormSubmit} className={style.form}>
        <div className={style.titleProject}>
          <h3>Contactenos</h3>
        </div>
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="text" errors={state.errors} />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Descripcion de su consulta..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className={style.containerButton}>
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;