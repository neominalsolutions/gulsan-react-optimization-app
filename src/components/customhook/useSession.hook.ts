import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

type SessionState = {
	name: string;
	sub: string;
};

function UseSession(refresh?: boolean) {
	const [session, setSession] = useState<SessionState | null>(null);

	useEffect(() => {
		const jwtToken: any = localStorage.getItem('x-secret-jwt');

		console.log('...decoding', refresh);

		if (jwtToken) {
			const decoded: any = jwtDecode(jwtToken);
			setSession({ name: decoded.name, sub: decoded.sub });
		} else {
			setSession(null);
		}
	}, [refresh]);

	return { session }; // arayüzden güncel session bilgisini yakalamak için yaptık.
}

export default UseSession;
