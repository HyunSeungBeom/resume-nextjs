import { Divider } from '@/Components/Base';
import { BodyFrame } from './BodyFrame';
import SkillSection from './SkillSection';

export const Body = () => {
  const SkillSectionProps = (props: any) => {
    title: '';
    skills: [];
  };

  const title: string = 'INTRODUCE';

  return (
    <section className="my-15">
      <BodyFrame title="INTRODUCE" className="mb-10">
        <div className="ml-[70px] leading-7">
          <div className="mb-4">
            저는 코드에 항상 "왜?"라는 질문을 던지며 더 나은 솔루션을 찾아가는
            프론트엔드 개발자입니다. 개발 과정에서 단순히 작동하는 코드를 넘어,
            코드의 구조와 선택이 가지는 의미를 깊이 고민합니다. 이러한 자세는
            효율적이고 확장 가능한 코드를 작성하는 데 큰 힘이 된다고 생각합니다.
          </div>
          <div className="mb-4">
            저는 커뮤니티와의 원활한 의사소통이 얼마나 중요한지 깊이 이해하고
            있습니다. 협업에서의 명확한 커뮤니케이션은 프로젝트의 성공을
            좌우하는 중요한 요소라고 믿습니다. 개발자, 디자이너, 그리고 다른
            이해 관계자들과의 협업 경험을 통해 다양한 관점을 이해하고 통합하는
            능력을 키웠습니다.
          </div>
          <div className="mb-4">
            또한, 스타트업에서의 다양한 경험은 제 성장에 큰 자양분이 되었습니다.
            제한된 리소스와 빠르게 변화하는 환경 속에서 문제를 해결하고, 새로운
            기술을 배우며, 사용자의 니즈를 만족시키는 제품을 만드는 법을
            배웠습니다. 이런 경험은 저를 도전적이고 유연한 개발자로 성장하게
            했습니다.
          </div>
          <div className="mb-4">
            앞으로도 저는 지속적으로 배우고 성장하며, 사용자와 팀 모두에게
            가치를 전달하는 개발자가 되고자 합니다.
          </div>
        </div>
      </BodyFrame>
      <div className="text-purple500 text-[36px] font-bold">Skill</div>
      <SkillSection
      // title="Languages"
      // skills={['Javascript', 'Typescript', 'HTML/CSS', 'Dart']}
      />
      <Divider />
      <SkillSection
        title="Frameworks & Librarys"
        skills={[
          'React.js',
          'Next.js',
          'Flutter',
          'Styled-components',
          'Tailwind css',
          'Recoil',
          'Redux',
          'Jotai',
          'Tanstack-Query',
        ]}
      />
      <Divider />
    </section>
  );
};
