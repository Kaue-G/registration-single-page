import { createContext } from 'react';
import {
  useTemplateVal,
} from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
  globalTheme: {
    backround: '',
    primaryColor: '',
    secondaryColor: '',
    textColor: '',
  },
});

const ThemeContextParent = (props) => {
  const backroundImg = useTemplateVal('backroundImg', '');
  let primaryColor = useTemplateVal('primaryColor', '');
  let secondaryColor = useTemplateVal('secondaryColor', '');
  let textColor = useTemplateVal('textColor', '');

  let backround = '';

  if (!primaryColor) {
    primaryColor = '#aaa';
  }

  if (!secondaryColor) {
    secondaryColor = '#e6e6e6';
  }

  if (!textColor) {
    textColor = '#222121';
  }

  if (backroundImg) {
    backround = `url(${backroundImg})`;
  } else {
    backround = secondaryColor;
  }

  const { children } = props;
  const value = {
    globalTheme: {
      backround,
      primaryColor,
      secondaryColor,
      textColor,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;
