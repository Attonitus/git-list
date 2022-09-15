import styled from 'styled-components'
import props from './profile-data'
import Button from './button'

const ProfileStyled = styled.div`
    grid-area: profile;
    .avatar {
        border: 1px solid var(--grey-2);
        border-radius: 50%;
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }
    .name {
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }
    .username{
        margin-block-start: .5rem;
        font: var(--headline2-ligth);
        margin-block-end: 1.5rem;
    }

    .info {
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-self: center;
        gap: .5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
        
    }

    a:hover {
        text-decoration: underline;
    }

    .buttons {
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }


`

function Profile() {
    const {name, login, avatar_url, bio, followers, following, location, twitter_username, blog} = props
    return (
        <ProfileStyled>
            <img src={avatar_url} className='avatar' width="278" height="278" alt="Placeholder Puppy"/>
            <p className="name">{name}</p>
            <p className="username">{login}</p>
            <div className="buttons">
                <Button
                    text="Follow"
                    className="custom"
                />
                <Button
                    text="Sponsor"
                    icon={<i>🎂</i>}
                />
            </div>
            <p className="bio info">
                {bio}
            </p>
            <p className="followers info">
                • {followers} <span>Followers</span> <span>•</span> {following} <span>Following</span>
            </p>
            {/* <p className="stars info">
                • 81
            </p> */}
            <p className="location info">
                • {location}
            </p>
            <a className="info" href={blog} target="_blank" rel='noreferrer'>
                {blog}
            </a>
            <a className="info" href={`https://twitter.com/${twitter_username}`} target="_blank" rel='noreferrer'>
                {twitter_username}
            </a>
        </ProfileStyled>
    )
}

export default Profile
