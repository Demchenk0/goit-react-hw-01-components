import PropTypes from 'prop-types';
import {ProfileCard, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileList, ProfileItem, ProfileText, ProfileQuantity} from "./Profile.styled"


export const Card = props => {
  const { username, tag, location, avatar, followers, views, likes } =
    props;
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileImg
          src={avatar}
          alt="User avatar"
          width={100}
          height={100}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileTag>{location}</ProfileTag>
      </ProfileDescription>

      <ProfileList>
        <ProfileItem>
          <ProfileText>Followers</ProfileText>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileText>Views</ProfileText>
          <ProfileQuantity>{views}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileText>Likes</ProfileText>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </ProfileItem>
      </ProfileList>
    </ProfileCard>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
