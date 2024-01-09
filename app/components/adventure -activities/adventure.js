import adventureActivitiesData from "../../Data/adventure-activitiesData";
import styles from "./adventure.module.scss";
import Image from "next/image";
const AdventureActivities = () => {
  return (
    <div className={styles.card_parent}>
      {adventureActivitiesData.map((activity) => {
        return (
            <div className="container">
            <div className={styles.activity_card}>
              <div className={styles.card_image}>
                <Image src={activity.activity_image} width={100} height={100} />
              </div>
              <div className={styles.card_content}>
                <h1>{activity.activity_name}</h1>
                <p>{activity.short_description}</p>
              </div>
            </div>
            </div>
        );
      })}
    </div>
  );
};
export default AdventureActivities;
