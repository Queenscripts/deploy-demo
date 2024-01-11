/* eslint-disable no-undef */

import { render } from '@testing-library/react';
import App from '../App';

describe('<App/> Component', () => {

  it('Renders Without Error', () => {
    const doc = render(<App />);
    expect(doc).toContain(
      "Vite"
    )
  });

});
