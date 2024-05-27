import { useEffect, useState } from 'react';
import styles from './AccordionView.module.css';
import arrowRightImg from '../../assets/arrowRight.png';
import plusImg from '../../assets/plus.png';

import createAcc1 from '../../assets/invest/createacc1.png';
import createAcc2 from '../../assets/invest/createacc2.png';
import disOpp from '../../assets/invest/disopp1.png';
import iandf1 from '../../assets/invest/iandf1.png';
import iandf2 from '../../assets/invest/iandf2.png';
import iandf3 from '../../assets/invest/iandf3.png';







const AccordionView = () => {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        if (expandedIndex !== index) {
            setExpandedIndex(index);
        }
    };

    const [acc1visibilty, setAcc1visibilty] = useState(false)
    const [acc2visibilty, setAcc2visibilty] = useState(false)

    useEffect(() => {
        if (expandedIndex == 0) {
            setAcc1visibilty(false)
            setAcc2visibilty(false)
        }
        else if (expandedIndex == 1) {
            setAcc1visibilty(true)
            setAcc2visibilty(false)
        } else if (expandedIndex == 2) {
            setAcc1visibilty(true)
            setAcc2visibilty(true)
        }

    }, [expandedIndex])

    return (
        <section className={styles.container6}>
            <div className={styles.leftContainer6}>
                <div className={styles.headerContainer6}>
                    <p>How to</p>
                    <p>Invest <img src={arrowRightImg} alt="go" /></p>
                </div>
                <div className={styles.accordionMainContainer}>

                    <div className={styles.accordionContainer}>
                        <div className={styles.accordionContainerIndicatore}></div>
                        <div className={styles.accordionContainerRight}>
                            <div className={`${styles.accordionTitle} ${expandedIndex === 0 && styles.activeBold}`} onClick={() => toggleAccordion(0)}>
                                <p>Create Account</p>
                                <img src={plusImg} alt="open" />
                            </div>
                            <div className={`${styles.accordionData} ${expandedIndex === 0 ? styles.expanded : ''}`}>
                                <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets.</p>
                                <button>Start Now <img src={arrowRightImg} alt="go" /></button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.accordionContainer}>
                        <div className={`${styles.accordionContainerIndicatore} ${!acc1visibilty && styles.opacity0}`}></div>
                        <div className={styles.accordionContainerRight}>
                            <div className={`${styles.accordionTitle} ${expandedIndex === 1 && styles.activeBold}`} onClick={() => toggleAccordion(1)}>
                                <p>Discover Opportunities</p>
                                <img src={plusImg} alt="open" />
                            </div>
                            <div className={`${styles.accordionData} ${expandedIndex === 1 ? styles.expanded : ''}`}>
                                <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.accordionContainer}>
                        <div className={`${styles.accordionContainerIndicatore} ${!acc2visibilty && styles.opacity0}`}></div>
                        <div className={styles.accordionContainerRight}>
                            <div className={`${styles.accordionTitle} ${expandedIndex === 2 && styles.activeBold}`} onClick={() => toggleAccordion(2)}>
                                <p>Invest with Flexibility</p>
                                <img src={plusImg} alt="open" />
                            </div>
                            <div className={`${styles.accordionData} ${expandedIndex === 2 ? styles.expanded : ''}`}>
                                <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.rightContainer6}>
                {
                    expandedIndex === 0 &&
                    <div className={`${styles.imgContainer1}`}>
                        <img src={createAcc1} alt="123" />
                        <img src={createAcc2} alt="12" />
                    </div>
                }
                {
                    expandedIndex === 1 &&
                    <div className={`${styles.imgContainer1}`}>
                        <img src={disOpp} alt="123" />
                    </div>
                }
                {
                    expandedIndex === 2 &&
                    <div className={`${styles.imgContainer2}`}>
                        <img src={iandf1} alt="123" />
                        <img src={iandf3} alt="1" />
                        <img src={iandf2} alt="12" />

                    </div>
                }
            </div>

        </section>
    );
};

export default AccordionView;
