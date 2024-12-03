import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">현승범</h1>
        <p className="text-lg">Front Engineer</p>
        <p className="text-lg">ghfk100@naver.com | 010-2436-0982</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">경력</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">ABC 회사</h3>
          <p className="text-md">Software Engineer | 2020.01 - 현재</p>
          <ul className="list-disc list-inside">
            <li>웹 애플리케이션 개발 및 유지보수</li>
            <li>React와 Next.js를 사용한 프론트엔드 개발</li>
            <li>Node.js와 Express를 사용한 백엔드 개발</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">XYZ 회사</h3>
          <p className="text-md">Frontend Developer | 2018.06 - 2019.12</p>
          <ul className="list-disc list-inside">
            <li>Vue.js를 사용한 프론트엔드 개발</li>
            <li>UI/UX 디자인 협��</li>
            <li>웹사이트 성능 최적화</li>
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
