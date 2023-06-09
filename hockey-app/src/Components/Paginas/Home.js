// Home.jsx
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>Bienvenido al mundo de la NHL</h1>
      <div className={styles.card}>
        <h2 className={styles.Subtitle}>Regla de las peleas en la NHL</h2>
        <p className={styles.info}>
          A diferencia de otras ligas deportivas, la NHL tiene una regla que permite a los jugadores pelearse en medio de un partido. Esta regla, conocida como "Regla 46", establece ciertas condiciones y sanciones para las peleas en el juego.
        </p>
        <p className={styles.info}>
          Según la Regla 46 de la NHL, los jugadores pueden pelearse siempre y cuando sea parte del juego y no sea considerado un acto peligroso. Sin embargo, las peleas excesivas o intencionales pueden llevar a sanciones disciplinarias por parte de la liga.
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.Subtitle}>El debate en torno a las peleas en la NHL</h2>
        <p className={styles.info}>
          La discusión sobre las peleas en la NHL ha llevado a reflexiones sobre la seguridad de los jugadores, el impacto en la imagen del deporte y la responsabilidad de la liga para promover un juego limpio y seguro.
        </p>
        <p className={styles.info}>
          Diversos argumentos a favor y en contra de las peleas en la NHL han surgido a lo largo de los años, y se han propuesto cambios en las reglas para reducir su frecuencia o eliminarlas por completo. Sin embargo, hasta el momento, la regla sigue vigente y las peleas continúan siendo parte del juego en la NHL.
        </p>
        <p className={styles.info}>
          Es importante tener en cuenta que la opinión sobre las peleas en la NHL puede variar, y cada persona puede tener su propia perspectiva al respecto.
        </p>
      </div>
    </div>
  );
};

export default Home;
