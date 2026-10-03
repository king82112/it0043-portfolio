M3 Decisions
AI Defense
The AI CSS has 24 rules, while my CSS has 16 rules. The AI CSS includes more granular selectors for forms and layout components, so it appears more detailed on first inspection.
The AI uses ⁠:hover⁠ and ⁠:focus⁠ states for interactive links and form elements.
Both CSS files have 0 ⁠!important⁠ flags.
The AI CSS relies on custom CSS variables in ⁠:root⁠ to control spacing and core color tokens.
At 320px, the AI CSS relies on horizontal scrolling for table layouts and uses scoped form input sizing (⁠width: 100%⁠, ⁠box-sizing: border-box⁠).
The AI CSS has potential contrast concerns; for example, the muted body text (⁠#64748b⁠) yields a 4.6:1 contrast ratio, which barely meets the WCAG AA minimum threshold (4.5:1) with zero margin for glare or low brightness.
What I Accepted
I accepted the tokenization of colors using CSS variables in ⁠:root⁠ because it makes styling consistent across multiple pages.
I accepted adding explicit focus and active visual indicators to interactive navigation links for clear accessibility feedback.
What I Rejected
I did not accept the AI's complex, multi-level selectors (such as ⁠#contact form input[type="text"]⁠) because they create unnecessary specificity locks that make future style overrides difficult.
I rejected relying on horizontal scrollbars for simple data tables at 320px mobile viewports because it creates a poor mobile user experience.
I kept my simpler selector structure and direct layout rules to maintain cleaner, scalable code.
Improvements
I added ⁠flex-wrap: wrap;⁠ to the main navigation menu (⁠nav ul⁠) so links stack neatly on 320px mobile viewports without overflowing.
I added an explicit ⁠:active⁠ state rule (⁠nav a:active⁠) to ensure visual feedback when users tap or click navigation items.
I added responsive component styles for ⁠table⁠, ⁠th⁠, and ⁠td⁠ to keep tabular data legible across device sizes.
I made incremental, descriptive Git commits for each improvement before pushing to GitHub.