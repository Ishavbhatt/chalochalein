import adventureActivitiesData from "../../Data/activitiesData";
import styles from "./activities.module.scss";
import Image from "next/image";

const Activities = () => {
  return (
    <div className={styles.activity_card_main}>
      {adventureActivitiesData.map((activity) => {
        return (
          <div className={styles.activity_card} key={activity.activity_name}>
            <div className={styles.card_image}>
              <Image src={activity.activity_image} fill={true} />
            </div>
            <div className={styles.card_content}>
              <h3>{activity.activity_name}</h3>
              <p>{activity.short_description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Activities;
