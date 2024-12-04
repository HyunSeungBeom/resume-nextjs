import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaTools } from 'react-icons/fa';
import { CustomIconText } from '../Components/Base';
import { MyInfo } from '@/Static';

export default function Page() {
  return (
    <div className="w-full h-full py-20 px-52 font-sans">
      <header className="flex mb-8 items-center gap-x-10">
        <div>
          <img
            src={`https://avatars.githubusercontent.com/${MyInfo.githubNick}`}
            alt="avatar"
            className="w-60 h-60"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold p-5">{MyInfo.name} </h1>
          <CustomIconText icon={<FaTools />} text={MyInfo.role} link={false} />
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
            text="GitHub"
            href={`https://github.com/${MyInfo.githubNick}`}
          />
        </div>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">경력</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">BPMG</h3>
          <p className="text-md">Software Engineer | 2023.01.02 - 2024.11.30</p>
          <ul className="list-disc list-inside">
            <li>웹 애플리케이션 개발 및 유지보수</li>
            <li>React와 Next.js를 사용한 프론트엔드 개발</li>
            <li>Node.js와 Express를 사용한 백엔드 개발</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">학력</h2>
        <div>
          <h3 className="text-xl font-semibold">서울대학교</h3>
          <p className="text-md">컴퓨터공학과 | 2014.03 - 2018.02</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
        <ul className="list-disc list-inside">
          <li>프론트엔드: React, Next.js, Vue.js</li>
          <li>백엔드: Node.js, Express</li>
          <li>데이터베이스: MongoDB, MySQL</li>
          <li>기타: Git, Docker, AWS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">프로젝트</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">프로젝트 A</h3>
          <p className="text-md">프로젝트 설명 및 역할</p>
          <ul className="list-disc list-inside">
            <li>주요 기능 및 성과</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">프로젝트 B</h3>
          <p className="text-md">프로젝트 설명 및 역할</p>
          <ul className="list-disc list-inside">
            <li>주요 기능 및 성과</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
