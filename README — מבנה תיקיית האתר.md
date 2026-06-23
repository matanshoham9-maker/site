# 🌐 site/ — תיקיית האתר לדיפלוי

> זאת התיקייה שעולה לאוויר (Netlify / Git). כל מה שבתוכה = האתר החי.

## מבנה
```
site/
├── index.html                              ← עמוד הבית (מתוך הייצוא של קלוד דסיין)
├── article-the-half-life-of-knowledge.html ← מאמר קיים (אמיתי)
├── article-creator-middle-class.html       ← מאמר קיים (אמיתי)
├── academia-is-outdated.html               ← מאמר חדש ★
├── your-knowledge-is-a-product.html        ← מאמר חדש ★
├── why-most-courses-fail.html              ← מאמר חדש ★
├── robots.txt
├── ds/                                     ← מערכת העיצוב: CSS + פונטים
│   ├── colors_and_type.css   (טוקנים + פונטים; נוספו טוקני Journal דארק)
│   ├── components.css · chrome.css · article.css
│   └── fonts/
└── assets/                                 ← תמונות אמיתיות, לוגואים, favicon
```

## איך הקבצים מדברים
- כל עמוד מושך עיצוב מ-`ds/` ותמונות מ-`assets/` (נתיבים יחסיים).
- המאמרים החדשים נבנו מ-`window.ARTICLE` (ב-Design System kit) → רונדרו לסטטי → הותאמו לנתיבי `ds/`.
- ה-header/footer חוזרים ל-`index.html`.

## עדכון מאמר/עמוד
1. גוני בונה את העמוד (סקיל course-it-journal / creator-page) → סטטי.
2. מתאים נתיבים ל-`ds/` ושם כאן ב-`site/`.
3. (כשתהיה אוטומציה) git push → Netlify מפרסם.

## הערות
- ⚠️ `creator-amos-shoham` (ועמוד היוצרים הפיקטיביים בעמוד הבית — Ayelet/Dolev/Yoni) הם **דמה לדוגמה**, לא יוצרים אמיתיים. לא לקשר ככה לציבור עד שיש יוצר אמיתי.
- עמוד הבית (`index.html`) הוא bundle של קלוד דסיין שרץ דרך JS — עובד כשמוגש משרת/Netlify, לא בדאבל-קליק מקומי.
- `assets/` מכיל גם גרסאות מקור כבדות (תמונות יוצרי-דמה ~12MB). אפשר לנקות אותן לפני העלאה כדי להקל על ה-repo.

♥ Course It Studio · courseit.studio
