import React from 'react'
import { Link } from 'react-router-dom'
import hockeyData from './APIs/hockey_API.json';
import styles from './Videos.module.css'

const Videos = () => {
  // Accede a los datos de la API para cada enfrentamiento
  const fight1 = hockeyData['fight 1'];
  const fight2 = hockeyData['fight 2'];
  const fight3 = hockeyData['fight 3'];
  const fight4 = hockeyData['fight 4'];
  const fight5 = hockeyData['fight 5'];

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title_videos}>Top 5 NHL Fights</h1>
      <h2 className={styles.num_Top}>Top 5</h2>
      <div className="card" style={{ width: '18rem', margin: 'auto', marginBottom: '2rem'}}>
        <img src="./Foto_Pelea5.jpeg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{fight1.fighter1} vs {fight1.fighter2}</h5>
          <p className="card-text">{fight1.date}</p>
          <Link to={fight1.video} className="btn btn-primary">Go to watch video</Link>
        </div>
      </div>
      <h2 className={styles.num_Top}>Top 4</h2>
      <div className="card" style={{ width: '18rem', margin: 'auto', marginBottom: '2rem'}}>
        <img src="./Foto_Pelea4.jpeg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{fight2.fighter1} vs {fight2.fighter2}</h5>
          <p className="card-text">{fight2.date}</p>
          <Link to={fight2.video} className="btn btn-primary">Go to watch video</Link>
        </div>
      </div>
      <h2 className={styles.num_Top}>Top 3</h2>
      <div className="card" style={{ width: '18rem', margin: 'auto', marginBottom: '2rem' }}>
        <img src="./Foto_Pelea3.jpeg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{fight3.fighter1} vs {fight3.fighter2}</h5>
          <p className="card-text">{fight3.date}</p>
          <Link to={fight3.video} className="btn btn-primary">Go to watch video</Link>
        </div>
      </div>
      <h2 className={styles.num_Top}>Top 2</h2>
      <div className="card" style={{ width: '18rem', margin: 'auto', marginBottom: '2rem' }}>
        <img src="./Foto_Pelea2.jpeg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{fight4.fighter1} vs {fight4.fighter2}</h5>
          <p className="card-text">{fight4.date}</p>
          <Link to={fight4.video} className="btn btn-primary">Go to watch video</Link>
        </div>
      </div>
      <h2 className={styles.num_Top}>Top 1</h2>
      <div className="card" style={{ width: '18rem', margin: 'auto', marginBottom: '2rem' }}>
        <img src="./Foto_Pelea1.jpeg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{fight5.fighter1} vs {fight5.fighter2}</h5>
          <p className="card-text">{fight5.date}</p>
          <Link to={fight5.video} className="btn btn-primary">Go to watch video</Link>
        </div>
      </div>
    </div>
  );

}

export default Videos