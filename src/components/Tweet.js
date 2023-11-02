import ProfileImage from './ProfileImage'; // Import the ProfileImage component
import User from "./User"
import Message from './Message'; 
import Actions from './Actions'
import Timestamp from './Timestamp';


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} /> {/* Rendering the components */}

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />   
        
        <Actions />
        <div>
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
