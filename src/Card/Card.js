import React from 'react';
import styles from './Card.module.scss';

const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <div
          key={id}
          className={`${styles.card} d-flex flex-column justify-content-center align-items-center position-relative`}
        >
          {/* Status Badge */}
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}

          <img className={`${styles.img} img-fluid`} src={image} alt={name} />
          <div className={`${styles.content}`}>
            <div className="fs-5 fw-bold mb-4">{name}</div>
            <div className="text-muted">
              <div className="fs-6 fw-normal">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = <div className="text-center">No Characters Found</div>;
  }

  return <>{display}</>;
};

export default Card;
