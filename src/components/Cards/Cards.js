import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Cards.module.scss"

// 4:10:16
const Cards = ({results, page}) => {
  let display;
  //Characters Cards, la x nos ayudara a recorrer la api 
  if (results){
    display = results.map((x)  => {
      let {id, name, image, location,status} = x;
      return <Link
      style={{textDecoration: "none"}}
      to={`${page}${id}`}
      key={id} className="col-4 mb-4 position-relative text-dark"> 
        <div className={styles.cards}>
          <img src={image} alt="" className={`${styles.img} img-fluid`}/>
          <div style={{ padding: "10px"}} className='content'>
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className=''>
              <div className='fs-6'>Last Location</div>
              <div className='fs-5'>{location.name}</div>
            </div>
          </div>
        </div>

        
        {(() => {
          if(status === 'Dead'){
            return (
              <div className={`${styles.badge} position-absolute badge bg-danger`}>
          {status}
        </div>
            )
          }
          else if(status === 'Alive'){
            return (
              <div className={`${styles.badge} position-absolute badge bg-success`}>
          {status}
        </div>
            )
          }
          else{
            return (
              <div className={`${styles.badge} position-absolute badge bg-secondary`}>
          {status} 
        </div>
            );
          }
        })()}
      </Link>
  
    });
  } else{
    display = " No Characters Found"
  }


  return (
    <React.Fragment>{display}</React.Fragment>
  )
}

export { Cards}