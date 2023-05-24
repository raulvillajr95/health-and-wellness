import {
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
  clearDisplay,
} from './helpers';

function nav() {
  console.log('nav');
  loadElemToContainer('#content', 'nav', 'navigation');
  loadElemToContainer('#navigation', 'h1', 'main-title');
  addTextToElem('#main-title', 'Health and Wellness');
}

function middleSection() {
  loadElemToContainer('#content', 'section', 'middle-section');
  loadElemToContainer('#middle-section', 'p', 'quote-1');
  addTextToElem(
    '#quote-1',
    `“You only live once, but if
    you do it right, once is enough.”
    ― Mae West`
  );
  loadElemToContainer('#middle-section', 'p', 'quote-2');
  addTextToElem(
    '#quote-2',
    '“To live is the rarest thing\nin the world. Most people exist, that is all.”\n― Oscar Wilde'
  );
  loadElemToContainer('#middle-section', 'p', 'quote-3');
  addTextToElem('#quote-3', 'Take deep breaths.');
  loadElemToContainer('#middle-section', 'p', 'quote-4');
  addTextToElem('#quote-4', 'Be kind to yourself.');
}

function bottomSection() {
  console.log('bottom');
  loadElemToContainer('#content', 'section', 'bottom-section');
  loadElemToContainer('#bottom-section', 'a', 'bottom-link1');
  addAttributeToElem(
    '#bottom-link1',
    'href',
    'https://duckduckgo.com/?q=mental+health+resources+near+me&t=h_&ia=web'
  );
  addTextToElem('#bottom-link1', 'Nearby Mental Health Resources');
}

function footer() {
  console.log('footer');
  loadElemToContainer('#content', 'footer', 'footer');
  loadElemToContainer('#footer', 'p', 'footer-content');
  addTextToElem('#footer-content', '©2023 Health and Wellness');
}

function display() {
  console.log('idk');
  nav();
  middleSection();
  bottomSection();
  footer();
}

export { display };
