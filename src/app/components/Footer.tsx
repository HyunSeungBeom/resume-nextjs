import Payload from '@/payload';

const Footer = () => {
  const { githubNick } = Payload.info;

  return (
    <footer className="w-full h-10 flex items-center justify-center text-[16px] font-bold bg-gray-600">
      <span className="text-purple-400">v.1.0.0</span>
      <span className="mx-2 text-white">|</span>
      <a
        href={`https://github.com/${githubNick}/resume-nextjs`}
        target="_blank"
        rel="noreferrer"
        className="text-white"
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
