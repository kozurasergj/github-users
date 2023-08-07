import { User } from "../../interfaces";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
    return (
        <div className="UserCard">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
        </div>
    );
};

export default UserCard;


