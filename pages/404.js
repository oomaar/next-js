import Link from 'next/link';

const NotFound = () => {
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
