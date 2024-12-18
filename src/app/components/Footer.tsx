import Payload from '@/payload';
import Link from 'next/link';

const Footer = () => {
  const { githubNick } = Payload.info;

  return (
    <footer className="w-full h-10 flex items-center justify-center text-[16px] font-bold bg-gray-600">
      <span className="text-blue-400">v.1.0.0</span>
      <span className="mx-2 text-white">|</span>
      <Link
        href={`https://github.com/${githubNick}/resume-nextjs`}
        target="_blank"
        rel="noreferrer"
        className="text-white"
      >
        GitHub
      </Link>
    </footer>
  );
};

export default Footer;
