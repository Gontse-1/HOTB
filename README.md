# Home of the Bean

Home of the Bean is a responsive static website for a Johannesburg coffee shop. Open `index2.html` in a browser. The menu search, daily special, gallery lightbox and contact-form validation run in `script.js`; the contact form is a front-end demo and needs a mail service to deliver messages.

## SEO notes

1. **SEO and its purpose:** Search engine optimization (SEO) improves how clearly search engines understand a website and how easily people can find it in unpaid results. It combines useful content, sound page structure, technical accessibility and relevant links.
2. **SEO, user experience and performance:** Clear titles, headings, descriptive links and image text help visitors and search engines understand each page. Responsive layouts, compressed responsive images and lazy loading make pages easier to use and quicker to load, especially on phones.
3. **Benefits:** SEO can bring more relevant visitors, improve discoverability and trust, and help people find useful pages without relying only on paid advertising. Good structure and performance can also improve usability for all visitors.
4. **Techniques in this site:** Semantic `header`, `nav`, `main`, `section`, `article` and `footer` elements provide page structure. CSS adapts the menu and gallery to screen size. JavaScript filters menu items, shows a daily special, enlarges gallery images and validates contact-form input. Alt text describes images and lazy loading defers off-screen gallery images.
5. **Meta elements:** The description meta element summarizes the page for search result snippets; keywords records the site's topic; robots allows indexing and following links; viewport supports responsive rendering on mobile; theme-color can style the browser UI. The title element gives the page its browser-tab and search-result title.

## Changelog

- Added a live menu search with an accessible result count.
- Added a dynamic daily-special message, keyboard-accessible gallery lightbox, current footer year, and client-side form validation and feedback.
- Added SEO description, keywords, robots and theme-color metadata plus a skip link and responsive image accessibility.

## References

- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- MDN Web Docs, HTML metadata: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
- MDN Web Docs, form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- MDN Web Docs, responsive images: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
