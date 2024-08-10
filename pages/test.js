import Link from 'next/link';

const Test = () => (
  <div>
    <header className="header">
      <nav className="navigation">
        <Link href="/" className="navLink">Home</Link>
      </nav>
    </header>
    <h1>Test Page</h1>
  </div>
);

export default Test;