import React, { useRef } from 'react';
import styles from './InteractiveGradient.module.css';

const InteractiveGradient: React.FC = () => {
    const interBubbleRef = useRef<HTMLDivElement>(null);
  

    return (
        <div className={styles.gradientBg}>
            <div className={styles.gradientsContainer}>
                <div className={styles.g1}></div>
                <div className={styles.g2}></div>
                <div className={styles.g3}></div>
                <div className={styles.g4}></div>
                <div className={styles.g5}></div>
                <div ref={interBubbleRef} className={styles.interactive}></div>
            </div>
            <svg width="0" height="0">
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                    <feColorMatrix in="blur" mode="matrix" values="
                       1 0 0 0 0
                       0 1 0 0 0
                       0 0 1 0 0
                       0 0 0 30 -15" result="goo"/>
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>
        </div>
    );
};

export default InteractiveGradient;
