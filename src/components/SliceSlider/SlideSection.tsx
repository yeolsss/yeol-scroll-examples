interface SlideSectionProps {
  children: React.ReactNode;
}

const SlideSection = ({ children }: SlideSectionProps) => {
  return (
    <section className="slide absolute h-[80vh] top-1/2 -translate-y-1/2 flex">
      <h2 className="flex flex-col my-auto gap-2">{children}</h2>
    </section>
  );
};

export default SlideSection;
