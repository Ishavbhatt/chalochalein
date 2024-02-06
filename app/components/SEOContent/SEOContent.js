import styles from '../../styles/pages/destination.module.scss'

const SEOContent = (props) => {
    return (
        <div className='container'>
            <div className={styles.seo_content}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default SEOContent;
