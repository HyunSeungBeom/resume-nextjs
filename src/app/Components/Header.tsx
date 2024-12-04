import { CustomIconText } from '@/Components/Base';
import { MyInfo } from '@/Static';
import { FaEnvelope, FaGithub, FaPhone, FaTools } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="flex mb-8 items-center gap-x-10">
      <div>
        <img
          src={`https://avatars.githubusercontent.com/${MyInfo.githubNick}`}
          alt="avatar"
          className="w-60 h-60"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=" text-4xl font-bold mb-3 ">{MyInfo.name}</h1>
        <CustomIconText icon={<FaTools />} text={MyInfo.role} />
        <CustomIconText
          icon={<FaPhone />}
          text={MyInfo.phone}
          href={`tel:${MyInfo.phone}`}
        />
        <CustomIconText
          icon={<FaEnvelope />}
          text={MyInfo.email}
          href={`mailto:${MyInfo.email}`}
        />
        <CustomIconText
          icon={<FaGithub />}
          text={`https://github.com/${MyInfo.githubNick}`}
          href={`https://github.com/${MyInfo.githubNick}`}
        />
      </div>
    </header>
  );
};
