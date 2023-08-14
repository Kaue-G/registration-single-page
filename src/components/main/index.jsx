/* eslint-disable indent */
/* eslint-disable no-unused-vars */
// import { useContext } from 'react';
// import { useTranslation } from 'react-i18next';
import {
// LoaderContext,
FitText,
QrCode,
useMedia,
useConfig,
useTemplate,
useTemplateVal,
useTemplateBoolVal,
useTemplateIntVal,
useTemplateFloatVal,
useScreenInfo,
} from '@dsplay/react-template-utils';
import './style.sass';

function Main() {
  // const config = useConfig();
  // const media = useMedia();
  // const template = useTemplate();
  // const { screenFormat } = useScreenInfo();
  // const context = useContext(LoaderContext);

  // const { locale } = config;
  // const { duration } = media;

  // const { t, i18n } = useTranslation();

  // i18n.changeLanguage(locale);

  return (
    <div className="container">
      <head>
        <img src="" alt="logotipo" />
      </head>
      <form action="">
        <div id="company">
          {/* companyy */}
          <h1>company</h1>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" id="name" placeholder="name" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="url" name="" id="website" placeholder="website" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="phone" placeholder="phone" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="email" name="" id="email" placeholder="email" />
          </div>
          {/* address */}
          <h4>address</h4>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="address" placeholder="address" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="number" placeholder="number" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="city" placeholder="city" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="state" placeholder="state" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="countryCode" placeholder="country code" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="postalCode" placeholder="postal code" />
          </div>
        </div>
        <div id="billing-info">
          <h1>billing info</h1>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="accountType" placeholder="account type" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="taxId" placeholder="tax id" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="email" placeholder="email" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="phone" placeholder="phone" />
          </div>
          {/* address */}
          <h4>address</h4>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="address" placeholder="address" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="number" placeholder="number" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="city" placeholder="city" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="state" placeholder="state" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="countryCode" placeholder="country code" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="postalCode" placeholder="postal code" />
          </div>
          {/* payment */}
          <h4>payment</h4>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="method" placeholder="method" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="frequency" placeholder="frequency" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="day" placeholder="day" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="withholdingPct" placeholder="withholding pct" />
          </div>
        </div>
        <div id="user">
          <h1>user</h1>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="name" placeholder="name" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="email" placeholder="email" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="userName" placeholder="user Name" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="password " placeholder="password" />
          </div>
        </div>
        <div id="settings">
          <h1>settings</h1>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="timezone" placeholder="timezone" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="theme" placeholder="theme" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="maxTerminals" placeholder="max terminals" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="quota" placeholder="quota" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="active" placeholder="active" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="evalutionPeriodDays" placeholder="evalution period days" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="text" name="" id="qrCodesEnable" placeholder="qr codes enable" />
          </div>
          <div className="input-container">
            <span>sdf</span>
            <input type="" name="" id="terminalStatusNotificationEnable" placeholder="terminal status notification enable" />
          </div>
        </div>
        <button type="submit"> send </button>
      </form>
    </div>

  );
}

export default Main;
