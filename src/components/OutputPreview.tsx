import React from 'react';
import { Code } from 'lucide-react';

interface OutputPreviewProps {
  styles: {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    titlesFontWeight: string;
    titlesLetterSpacing: string;
    buttonBorderWidth: string;
  };
}

const OutputPreview: React.FC<OutputPreviewProps> = ({ styles }) => {
  const generateCSS = () => {
    return `
/*START - Custom Styles - ${styles.name}*/
.btn, .lp-btn {
    border-width: ${styles.buttonBorderWidth};
    font-weight: ${styles.titlesFontWeight};
}

:root {
  --primary: ${styles.primaryColor};
  --secondary: ${styles.secondaryColor};
}

h1, .lp-h1,
h2, .lp-h2,
h3, .lp-h3,
h4, .lp-h4,
h5, .lp-h5,
div#global-sidemenu.sidemenu a,
nav#global-navbar a,
div#global-sidemenu.sidemenu button,
nav#global-navbar button {
    text-transform: uppercase;
    font-weight: ${styles.titlesFontWeight};
    letter-spacing: ${styles.titlesLetterSpacing};
}
/*END - Custom Styles - ${styles.name}*/
    `.trim();
  };

  const css = generateCSS();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Output Preview</h2>
      <div className="bg-gray-800 rounded-lg p-4 text-white font-mono text-sm">
        <div className="flex items-center mb-2">
          <Code className="mr-2" />
          <span>Generated CSS</span>
        </div>
        <pre className="whitespace-pre-wrap">{css}</pre>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Component Preview</h3>
        <div className="border rounded-lg p-4">
          <h1 style={{ color: styles.primaryColor, fontWeight: styles.titlesFontWeight, letterSpacing: styles.titlesLetterSpacing }}>
            Sample Title (H1)
          </h1>
          <h3 style={{ color: styles.primaryColor, fontWeight: styles.titlesFontWeight, letterSpacing: styles.titlesLetterSpacing }}>
            Subtitle (H3)
          </h3>
          <p className="my-4" style={{ color: styles.secondaryColor }}>
            This is a sample paragraph to demonstrate the text styles.
          </p>
          <button
            style={{
              backgroundColor: styles.primaryColor,
              color: styles.secondaryColor,
              borderWidth: styles.buttonBorderWidth,
              fontWeight: styles.titlesFontWeight,
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
            }}
          >
            Sample Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutputPreview;