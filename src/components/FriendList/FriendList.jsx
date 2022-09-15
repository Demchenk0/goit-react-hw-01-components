import PropTypes from 'prop-types';
import {FriendListUl, FriendItem, FriendStatus, FriendImg, FriendName} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ id, avatar, name, isOnline }) => { 
        return (
        <FriendItem key={id}>
        <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
        <FriendImg src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </FriendItem>)
      })}
      
    </FriendListUl>
  );
};

FriendList.propTypes = {
  FriendList: PropTypes.arrayOf(
        PropTypes.exact({
            friends: {
                id: PropTypes.number.isRequired, 
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
            },
        }),
    ),
}
