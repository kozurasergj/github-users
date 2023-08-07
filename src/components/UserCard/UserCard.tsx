import { User } from "../../interfaces";
import styles from './UserCard.module.css';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={user.avatar_url} alt={user.login} />
            <h2 className={styles.login} >{user.login}</h2>
            <p className={styles.bio} >{user.bio}</p>
            <a href={user.html_url}
                target="_blank"
                className={styles.html_url} >
                View Profile
            </a>
        </div>
    );
};

export default UserCard;


