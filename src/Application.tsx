import * as React from 'react';
import ReactDOM = require('react-dom');
import { ReactUtil } from './utils/ReactUtil';
import { MainPage } from './desktop/pages/MainPage';
import { MobileMainPage } from './mobile/pages/MobileMainPage';

export class Application extends React.Component
{
    public render(): JSX.Element
    {
        return !ReactUtil.isMobile() 
            ? <MainPage /> : <MobileMainPage />;
    }
}

export namespace Application
{
    export function main(): void
    {
        // SET USER-AGENT
        let doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);

        // INIT RENDER
        ReactDOM.render(<Application />, document.getElementById("root"));
    }
}

if (ReactUtil.isBrowser())
    window.onload = Application.main;