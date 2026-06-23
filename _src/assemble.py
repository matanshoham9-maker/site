# -*- coding: utf-8 -*-
import re, io

src = "/sessions/keen-pensive-gates/mnt/outputs/cisrc"
out = "/sessions/keen-pensive-gates/mnt/Workspace/Course it/שיווק ומיתוג/אתר/site/index-preview.html"

def read(p):
    with io.open(p, "r", encoding="utf-8") as f: return f.read()

styles   = read(src + "/styles.css")
imagery  = read(src + "/imagery.jsx")
sections = read(src + "/sections.jsx")

# --- replace the JOURNAL array with the 5 real articles ---
new_journal = '''const JOURNAL = [
  { href: "article-the-half-life-of-knowledge.html",
    media: "PHOTO · THE HALF-LIFE OF KNOWLEDGE",
    kind: "OPINION", date: "JUNE 2026 · 9 MIN",
    title: "The knowledge you learned <em>has expired.</em>",
    lede: "The half-life of professional knowledge has fallen below the length of a degree. Only knowledge earned in motion stays fresh." },
  { href: "article-creator-middle-class.html",
    media: "PHOTO · THE CREATOR MIDDLE CLASS",
    kind: "ESSAY", date: "JUNE 2026 · 9 MIN",
    title: "The creator <em>middle class</em> is here.",
    lede: "For years the story was binary — superstar or amateur. The 2026 data reveals a quiet third thing: stable, real, paying a salary." },
  { href: "articles/academia-is-outdated.html",
    media: "PHOTO · ACADEMIA IS OUTDATED",
    kind: "OPINION", date: "JUNE 2026 · 8 MIN",
    title: "Academia is outdated. <em>Creators aren\\u2019t.</em>",
    lede: "Fewer than a third of Americans still believe a degree is worth the cost. But the hunger to learn just changed address." },
  { href: "articles/your-knowledge-is-a-product.html",
    media: "PHOTO · YOUR KNOWLEDGE IS A PRODUCT",
    kind: "ESSAY", date: "JUNE 2026 · 6 MIN",
    title: "Your knowledge is <em>a product.</em>",
    lede: "Every day you give away for free what people are willing to pay for. The only question is whether you\\u2019ll package it first." },
  { href: "articles/why-most-courses-fail.html",
    media: "PHOTO · WHY MOST COURSES FAIL",
    kind: "OPINION", date: "JUNE 2026 · 7 MIN",
    title: "Why most courses <em>fail.</em>",
    lede: "Most people who buy a course never finish it. It\\u2019s not a discipline problem — it\\u2019s a problem of form." },
];'''

sections_new, n = re.subn(r"const JOURNAL = \[.*?\n\];", lambda m: new_journal, sections, count=1, flags=re.DOTALL)
assert n == 1, "JOURNAL array not replaced (n=%d)" % n

app = '''function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <SlotPlaceholder num="06" name="IN EVERY WORLD" />
      <Team />
      <CTA />
      <Form />
      <Journal />
      <Foot />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);'''

html = u'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Course It · Course Building Studio for Creators</title>
<meta name="description" content="Every creator has a course. Course It is a studio in Tel Aviv — we turn what experts know into branded video courses that sound like them." />
<link rel="canonical" href="https://courseit.studio/" />
<meta property="og:title" content="Course It · Every creator has a course." />
<meta property="og:description" content="A studio for creators. We build branded video courses for experts." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://courseit.studio/" />
<meta property="og:image" content="https://courseit.studio/assets/hero-bg-web.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" type="image/svg+xml" href="assets/favicon-light.svg" media="(prefers-color-scheme: light)" />
<link rel="icon" type="image/svg+xml" href="assets/favicon-dark.svg" media="(prefers-color-scheme: dark)" />
<link rel="alternate icon" href="assets/favicon-light.svg" />
<link rel="stylesheet" href="ds/colors_and_type.css" />
<link rel="stylesheet" href="ds/components.css" />
<style>
''' + styles + u'''
</style>
</head>
<body>
<div id="root"></div>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin></script>
<script type="text/babel" data-presets="react">
''' + imagery + u'''
</script>
<script type="text/babel" data-presets="react">
''' + sections_new + u'''
</script>
<script type="text/babel" data-presets="react">
''' + app + u'''
</script>
</body>
</html>'''

with io.open(out, "w", encoding="utf-8") as f:
    f.write(html)
print("wrote", out, len(html), "bytes; JOURNAL replaced:", n)
