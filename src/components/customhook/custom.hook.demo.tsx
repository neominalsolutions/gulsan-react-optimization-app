import React, { useState } from 'react';
import UseSession from './useSession.hook';
import { Button } from 'primereact/button';

function CustomHookDemo() {
	const [refresh, setRefresh] = useState<boolean>(false);

	const { session } = UseSession(refresh);

	const onLogin = () => {
		localStorage.setItem(
			'x-secret-jwt',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1lcnQgQWxwdGVraW4iLCJpYXQiOjE1MTYyMzkwMjJ9.FostkkOOjkOXDP0Rh7rlsNiI551NnYQvHikwHwGDWMI'
		);
		setRefresh(!refresh);
	};

	const onLogOut = () => {
		localStorage.removeItem('x-secret-jwt');
		setRefresh(!refresh);
		// UseSession();
	};

	if (session)
		return (
			<>
				{session && (
					<>
						<p>Hoşgeldiniz {session.name}</p>
						<Button onClick={onLogOut}>Oturum Kapat</Button>
					</>
				)}
			</>
		);

	return (
		<>
			<Button onClick={onLogin}>Oturum Aç</Button>
		</>
	);
}

export default CustomHookDemo;
