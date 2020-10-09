import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users } = githubContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

const userStyle = {
	margin: 'auto',
	display: 'grid',
	alignItems: 'center',
	gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
	maxWidth: '500px',
	gridGap: '1rem',
};

export default Users;
