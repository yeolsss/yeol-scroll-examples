import ContentText from "../components/SliceSlider/ContentText.tsx";
import SlideSection from "../components/SliceSlider/SlideSection.tsx";
import SliceSlider from "../components/SliceSlider/SliceSlider.tsx";

const SliceSliderPage = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* SliceSlider 컴포넌트로 감싸기 */}
      <SliceSlider>
        <SlideSection>
          <ContentText>안녕하세요!</ContentText>
          <ContentText className="delay-300">반가워요!</ContentText>
        </SlideSection>

        <SlideSection>
          <ContentText>하나!</ContentText>
          <ContentText className="delay-300">Here Makes Three</ContentText>
        </SlideSection>

        <SlideSection>
          <ContentText>둘!</ContentText>
          <ContentText className="delay-300">For You</ContentText>
        </SlideSection>

        <SlideSection>
          <ContentText>셋!</ContentText>
          <ContentText className="delay-300">For You</ContentText>
        </SlideSection>

        <SlideSection>
          <ContentText>넷!</ContentText>
          <ContentText className="delay-300">For You</ContentText>
        </SlideSection>

        <SlideSection>
          <ContentText>다섯!</ContentText>
          <ContentText className="delay-300">For You</ContentText>
        </SlideSection>
      </SliceSlider>
    </section>
  );
};

export default SliceSliderPage;
