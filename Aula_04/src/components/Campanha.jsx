/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes){
        if (mes === "setembro"){
            return "Prevenção ao Suicidio"
        }else if (mes === 'outubro'){
            return "Prevenção e combate ao câncer de mama"
        }else{
            return "Prevenção e combate ao cancer de Prostata"
        }
    }

    function defineCorDeFundo(mes){
        if (mes === "setembro"){
            return styles.setembroClass
        }else if (mes === 'outubro'){
            return styles.outubroClass
        }else{
            return styles.novembroClass
        }
    }
  return (
    <div className = {defineCorDeFundo(props.mes)}>
        {defineMensagem(props.mes)}
    </div>
  )
}

export default Campanha