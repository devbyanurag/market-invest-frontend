import Header from '../../components/Header/Header'
import { motion } from 'framer-motion'
import styles from './Landing.module.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import InteractiveGradient from '../InteractiveGradient/InteractiveGradient';
import ScrollRevealText from '../../components/ScrollRevealText/ScrollRevealText';
import asset1img from '../../assets/imgasset1.png'
import AccordionView from '../AccordionView/AccordionView';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const Landing = () => {


    const labels = ['2001', '‘04', '‘07', '‘10', '‘13', '‘16', '‘19’20'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Private Equity Index ',
                data: [12, 13, 20, 12, 41, 53, 60],
                borderColor: '#4375FB',
                backgroundColor: '#4375FB',
                pointRadius: 0,
                pointHoverRadius: 0,
            },
            {
                label: 'S&P 500 Index ',
                data: [10, 15, 10, 20, 45, 50, 65],
                borderColor: '#464EC750',
                backgroundColor: '#464EC750',
                pointRadius: 0,
                pointHoverRadius: 0,
            },
        ],
    };




    return (
        <>
            <div className={styles.landingConatiner}>
                <Header />
                <section className={styles.container1}>
                    <div>


                    </div>
                </section>
                <section className={styles.container2}>

                    <div className={styles.leftContainer2}>
                        <div className={styles.leftinnerContainer2}>
                            <Line options={
                                {
                                    plugins: {
                                        legend: {
                                            position: 'bottom' as const,
                                            align: 'start',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Private Equity Index vs S&P 500 Index -- Historical Performance',
                                        },
                                    },
                                    maintainAspectRatio: false,

                                }
                            } data={data} />
                        </div>

                    </div>
                    <div className={styles.rightContainer2}>
                        <motion.div
                            initial={{
                                opacity: 0,

                            }}
                            whileInView={{
                                opacity: 1,

                            }}
                            viewport={{
                                margin: '-150px'
                            }}
                        >
                            <div className={styles.headingRight}>
                                <p>Access</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alternative </p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Investments</p>
                            </div>
                            <br />

                            <br />

                            <div className={styles.dataRight}>

                                <p>Unleashing the untapped potential of the alternative  markets through Rooba.Finance - Your gateway to superior returns and exclusive opportunities</p>
                                <br />
                                <p>Discover the advantages of alternative market investments, unlock new horizons, and embark on a journey towards financial prosperity with our platform as your trusted partner. </p>
                            </div>
                        </motion.div>
                    </div>

                </section>
                <section className={styles.container3}>

                    <div className={styles.gradientContainer}>
                        <InteractiveGradient />
                    </div>

                    <div className={styles.textRevealContainer}>
                        <ScrollRevealText />
                        <p className={styles.para1}>How would you want to start creating your financial instrument?</p>
                        <div className={styles.btnContainer}>
                            <button>Talk to Us</button>
                            <button>Book a Demo</button>
                        </div>
                    </div>

                </section>




            </div>

            <div className={styles.investContainer}>
                <section className={styles.container4}>
                    <img src={asset1img} alt="hi" />
                    <h1>WHY
                        <br /><span></span>INVEST ?</h1>

                    <p>Putting your money in land may provide for better yield and returns making for a steady investment strategy. </p>
                </section>
                <section className={styles.container5}>
                    <div className={styles.leftContainer5}>
                        <div className={styles.cardcontainer}>
                            <div className={styles.aniContainer}>
                                <div className={styles.aniContainer1}>
                                    <div className={styles.firstBlock}>

                                    </div>
                                    <div className={styles.secondBlock}>

                                    </div>
                                    <div className={styles.thirdBlock}>

                                    </div>
                                </div>
                            </div>
                            <h1>The demand for land investments <span>
                                has never been higher.</span> </h1>

                            <p>As a collateral impact of Covid-19, weekend homes or a place to escape the bustle of the city are expanding rapidly.</p>

                        </div>
                        <div className={styles.cardcontainer}>
                            <div className={styles.aniContainer}>
                                <div className={styles.aniContainer3}>
                                    <div className={styles.firstBlock}>

                                    </div>
                                    <div className={styles.secondBlock}>

                                    </div>
                                    <div className={styles.thirdBlock}>

                                    </div>

                                </div>
                            </div>
                            <h1><span>Unlock Tax Benefits</span> with Smart Agricultural Land Investments.</h1>

                            <p>Gains from selling agricultural land in rural India is subject to tax exemption. Now is the time to seize the opportunity to invest in rural agricultural land and reap the benefits of tax advantages.</p>

                        </div>

                    </div>
                    <div className={styles.rightContainer5}>
                        <div className={styles.cardcontainer}>
                            <div className={styles.aniContainer}>
                                <div className={styles.aniContainer2}>
                                    <div className={styles.firstBlock}>

                                    </div>
                                    <div className={styles.secondBlock}>

                                    </div>
                                    <div className={styles.thirdBlock}>

                                    </div>
                                    <div className={styles.fourthBlock}>

                                    </div>
                                </div>
                            </div>
                            <h1><span>Prime Land Investment</span> is Your Time-Tested Path to Enduring Prosperity </h1>

                            <p>Seize the moment with a strategic investment choice — prime land. Historically valued for its enduring worth, land investment beckons as a cornerstone of prosperity.</p>

                        </div>
                        <div className={styles.cardcontainer}>
                            <div className={styles.aniContainer}>
                                <div className={styles.aniContainer4}>
                                    <div className={styles.firstBlock}>
                                        <div className={styles.innerfirstBlock}>


                                        </div>

                                    </div>
                                    <div className={styles.secondBlock}>
                                        <div className={styles.innersecondBlock1}>
                                        </div>
                                        <div className={styles.innersecondBlock2}>
                                        </div>
                                        <div className={styles.innersecondBlock3}>
                                        </div>

                                    </div>
                                    <div className={styles.thirdBlock}>
                                        <div className={styles.innerthirdBlock1}>
                                        </div>
                                        <div className={styles.innerthirdBlock2}>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <h1>Own plots along the thriving <span>
                                Delhi-Bombay Expressway</span> </h1>

                            <p>The Delhi NCR & Sohna have established themselves as crucial real estate markets. The Delhi-Mumbai Expressway is expected to provide a solid push to real estate development in areas towards Rajasthan, boosting demand for land, residential & commercial properties.</p>

                        </div>
                    </div>
                </section>
                <AccordionView/>
               
            </div>
        </>
    )
}

export default Landing

