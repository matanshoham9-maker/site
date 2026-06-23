/* Course It — Landing page entry point (v5). */

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useScrollReveal();

  return (
    <>
      <Header />
      <Hero accent={t.heroAccent} />
      <Marquee />
      <About />
      <Services />
      <Creators />
      <SlotPlaceholder num="06" name="IN EVERY WORLD" />
      <Team />
      <CTA />
      <Form />
      <Journal />
      <Foot />

      <TweaksPanel title="Tweaks">
        <CourseItTweaks tweaks={t} setTweak={setTweak} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
