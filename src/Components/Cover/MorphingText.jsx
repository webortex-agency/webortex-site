import { useCallback, useEffect, useRef } from "react";

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback(
    (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts]
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;
    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];

    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;
      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

function Texts({ texts }) {
  const { text1Ref, text2Ref } = useMorphingText(texts);

  return (
    <>
      <span
        className="relative inset-x-0 top-0  inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 inline-block w-full"
        ref={text2Ref}
      />
    </>
  );
}

function SvgFilters() {
  return (
    <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="threshold">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140"
          />
        </filter>
      </defs>
    </svg>
  );
}

function MorphingText({ texts, className }) {
  const combinedClassName = [
    "relative inline-block  text-left text-[30px] xs:text-[40px] sm:text-[60px] md:text-[75px] lg:text-[88px] 2xl:text-[110px] leading-[36px] xs:leading-[46px] sm:leading-[66px] md:leading-[78px] lg:leading-[98px] 2xl:leading-[118px] font-outlet font-bold [filter:url(#threshold)_blur(0.6px)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClassName}>
      <Texts texts={texts} />
      <SvgFilters />
    </div>
  );
}

export { MorphingText };
