import Image from 'next/image';
import Payload from '@/payload';
import { FaEnvelope, FaGithub, FaPhone, FaTools } from 'react-icons/fa';
import { CustomIconText } from './base';

export const Info = () => {
  const { name, role, phone, email, githubNick } = Payload.info;

  return (
    <header className="flex flex-col md:flex-row mb-8 items-center gap-x-10 gap-y-4">
      <div className="flex-shrink-0">
        <Image src="/seungbeom.jpeg" alt="avatar" width={240} height={240} />
      </div>
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{name}</h1>
        <CustomIconText icon={<FaTools />} text={role} />
        <CustomIconText icon={<FaPhone />} text={phone} href={`tel:${phone}`} />
        <CustomIconText
          icon={<FaEnvelope />}
          text={email}
          href={`mailto:${email}`}
        />
        <CustomIconText
          icon={<FaGithub />}
          text={`https://github.com/${githubNick}`}
          href={`https://github.com/${githubNick}`}
        />
      </div>
    </header>
  );
};
