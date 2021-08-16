import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <h1>Oooooops....</h1>
            <h2>That page cannot be found</h2>
            <Link href="/">
                <a>Home Page</a>
            </Link>
        </div>
    );
};

export default NotFound;
