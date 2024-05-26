import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollRevealText.module.css';

gsap.registerPlugin(ScrollTrigger);


const ScrollRevealText= () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const string1="Empower your financing strategies with tomorrow’s revolutionary technology. Our user- friendly platform will give your investors the power to unlock de-fi capabilities hence boosting the liquidity of your fund by large margins. "

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const words = textElement.querySelectorAll(`.${styles.word}`);

    gsap.fromTo(
      words,
      { color: '#F2F2F2', opacity: 0.2 }, 
      {
        color: '#f2f2f2', 
        opacity: 1, 
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textElement,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={textRef} className={styles.container}>
      {string1.split(' ').map((word, index) => (
        <span key={index} className={styles.word}>
          {word}&nbsp;
        </span>
      ))}
      
    </div>
  );
};

export default ScrollRevealText;
