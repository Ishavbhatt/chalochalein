import destinationsData from '../../Data/destinationsData';
import styles from '../../styles/pages/destination.module.scss'

function getDestination(slug) {
    return destinationsData.find(destination => destination.slug === slug);
}

const page = ({ params }) => {
    const single_destination = getDestination(params?.slug)

    if (!single_destination) {
        return <div>Destination not found</div>;
    }

    return (
        <>
            <section className={`${styles.single_destination} common_margin`}>
                <div className='container'>
                    <div className={styles.single_destination_content}>
 <h1>{single_destination.destination_name}</h1>
                    </div>
                   
                </div>
            </section>
        </>
    );
};

export default page;
