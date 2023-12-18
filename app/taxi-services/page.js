import BookTaxiForm from '../components/Forms/BookTaxiForm';
import styles from '../styles/pages/taxiservices.module.scss';
import TaxiServiceContent from '../components/Taxis/TaxiServiceContent';
import Benefits from '../components/Taxis/Benifits';

export default function TaxiServices() {
    return (
        <section className={`${styles.taxi_services} common_margin`}>
            <div className="container">
                <div className={styles.taxi_services_top}>
                    <div className={styles.taxi_services_top_left}>
                        <TaxiServiceContent />
                    </div>

                    <div className={styles.taxi_services_top_right}>
                        <div className={styles.taxi_services_top_right_inner}>
                            <BookTaxiForm />
                        </div>
                    </div>
                </div>
                <Benefits />
            </div>
        </section>
    )
}
