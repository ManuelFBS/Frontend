import style from "./Services.module.css";
import { FcConferenceCall } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";


const Servicios = () => {

  return (
    <div className={style.containerSkills}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>Servicios</h1>
      </div>
      <div className={style.containerCards}>
        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcConferenceCall style={{color : '6940ff'}}/>
          </div>
          <div className={style.titleCard}>
            <h4>Primer servicio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcIdea />
          </div>
          <div className={style.titleCard}>
          <h4>Segundo servicio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcVoicePresentation/>
          </div>
          <div className={style.titleCard}>
          <h4>Tercer servicio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcApproval />
          </div>
          <div className={style.titleCard}>
          <h4>Cuarto servicio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcTemplate />
          </div>
          <div className={style.titleCard}>
          <h4>Quinto servicio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcBullish />
          </div>
          <div className={style.titleCard}>
          <h4>Sexto servicio</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios;