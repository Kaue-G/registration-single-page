// import { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Loader, useScreenInfo, useTemplateVal } from '@dsplay/react-template-utils';
import ThemeContextParent from '../../contexts/themeContext';
import './style.sass';
import i18n from '../../i18n';
import Intro from '../intro';
import Main from '../main';

const MIN_LOADING_DURATION = 2000;

// fonts to preload
// @font-face's must be defined in fonts.sass or another in-use style file
const fonts = [
  'Roboto Thin',
  'Roboto Light',
  'Roboto Regular',
  'Roboto Medium',
  'Roboto Bold',
  'Roboto Condensed',
  'Oswald',
];

function App() {
  const { screenFormat } = useScreenInfo();
  let logo = useTemplateVal('logo');
  const backroundImg = useTemplateVal('backroundImg');

  if (!logo) {
    logo = './test-assets/dsplay-logo.png';
  }

  // images to preload
  const images = [logo, backroundImg];

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContextParent>
        <Loader
          placeholder={<Intro />}
          fonts={fonts}
          images={images}
          minDuration={MIN_LOADING_DURATION}
        >
          <div className={`app fade-in ${screenFormat}`}>
            <Main />
          </div>
        </Loader>
      </ThemeContextParent>
    </I18nextProvider>
  );
}

export default App;
