import React from 'react';
import { NavigationDots, SocialMedia } from '../components/Index.js';

const AppWrap = (WrappedComponent, idName, classNames) => {
  return function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <WrappedComponent />

          <div className="copyright">
            <p className="p-text">@2025 Rosan</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };
};

export default AppWrap;
