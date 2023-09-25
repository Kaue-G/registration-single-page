/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
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
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { ThemeContext } from '../../contexts/themeContext';

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
  // const { sendRegistration } = useFormContext();
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  console.log(api);
  function submitForm(formInfo) {
    // eslint-disable-next-line no-console
    console.log(formInfo);

    api.post('/', {
      company: {
        name: 'Senhor teste',
        website: 'https://achildaccount.com',
        phone: '+55 11 111 111 111',
        email: 'main@achildaccount.com',
        address: {
          address: 'Some Street',
          number: '100b',
          city: 'Some City',
          state: 'Some State',
          countryCode: 'br',
          postalCode: '11111-111',
        },
      },
      billingInfo: {
        accountType: 'personal|business',
        taxId: '<your tax id>',
        email: 'main@myawesomecompany.com',
        phone: '+55 22 222 222 222',
        address: {
          address: 'Another Address',
          number: '5',
          city: 'Another City',
          state: 'Another State',
          countryCode: 'br',
          postalCode: '22222-222',
        },
        payment: {
          method: 'bank-slip|booklet|payment-link|subscription|credit-card|bank-transfer',
          frequency: 12,
          day: 1,
          withholdingPct: 0,
        },
      },
      user: {
        name: 'Your Main User Name',
        email: 'manager@achildaccount.com',
        username: 'manager',
        password: 'v3ry5tr0ngp455w0rd',
      },
      settings: {
        timezone: 'America/Recife',
        theme: 'dsplay-light-neutral',
        maxTerminals: 10,
        quota: 1024,
        active: true,
        evaluationPeriodDays: 15,
        qrCodesEnabled: true,
        terminalStatusNotificationEnabled: false,
      },
    }).then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
    }).catch((erro) => {
      // eslint-disable-next-line no-console
      console.log(erro.code);
      // eslint-disable-next-line no-console
      console.log(erro.message);
      // eslint-disable-next-line no-console
      console.log(erro.stack);
    });
  }

  const logo = useTemplateVal('logo');
  const { globalTheme } = useContext(ThemeContext);

  return (
    <section
      style={{ background: globalTheme.backround }}
    >
      <div
        id="container"
        style={{ color: globalTheme.textColor }}
      >
        <div
          id="bg"
          style={{ backgroundColor: globalTheme.primaryColor }}
        />
        <div>
          <header>
            <img src={logo} alt="logotipo" />
          </header>
          <form action="" onSubmit={handleSubmit(submitForm)}>
            <div id="company">
              <div className="form-section">
                <div className="section-title">
                  {/* companyy */}
                  <h2>company</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>name</span>
                    <input
                      type="text"
                      id="name"
                      placeholder="name"
                      {...register('name')}
                    />
                  </div>
                  <div className="input-container">
                    <span>website</span>
                    <input
                      type="url"
                      name=""
                      id="website"
                      placeholder="website"
                      {...register('website')}
                    />
                  </div>
                  <div className="input-container">
                    <span>phone</span>
                    <input
                      type="text"
                      name=""
                      id="phone"
                      placeholder="phone"
                      {...register('phone')}
                    />
                  </div>
                  <div className="input-container">
                    <span>email</span>
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="email"
                      {...register('email')}
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-title">
                  {/* address */}
                  <h3>address</h3>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>address</span>
                    <input
                      type="text"
                      name=""
                      id="address"
                      placeholder="address"
                      {...register('address')}
                    />
                  </div>
                  <div className="input-container">
                    <span>number</span>
                    <input
                      type="text"
                      name=""
                      id="number"
                      placeholder="number"
                      {...register('name')}
                    />
                  </div>
                  <div className="input-container">
                    <span>city</span>
                    <input
                      type="text"
                      name=""
                      id="city"
                      placeholder="city"
                      {...register('city')}
                    />
                  </div>
                  <div className="input-container">
                    <span>state</span>
                    <input
                      type="text"
                      name=""
                      id="state"
                      placeholder="state"
                      {...register('state')}
                    />
                  </div>
                  <div className="input-container">
                    <span>country code</span>
                    <input
                      type="text"
                      name=""
                      id="countryCode"
                      placeholder="country code"
                      {...register('countryCode')}
                    />
                  </div>
                  <div className="input-container">
                    <span>postal code</span>
                    <input
                      type="text"
                      name=""
                      id="postalCode"
                      placeholder="postal code"
                      {...register('postalCode')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="billing-info">
              <div className="form-section">
                <div className="section-title">
                  <h2>billing info</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>account type</span>
                    <input
                      type="text"
                      name=""
                      id="accountType"
                      placeholder="account type"
                      {...register('accountType')}
                    />
                  </div>
                  <div className="input-container">
                    <span>sdf</span>
                    <input
                      type="text"
                      name=""
                      id="taxId"
                      placeholder="tax id"
                      {...register('taxId')}
                    />
                  </div>
                  <div className="input-container">
                    <span>sdf</span>
                    <input
                      type="text"
                      name=""
                      id="email"
                      placeholder="email"
                      {...register('email2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>sdf</span>
                    <input
                      type="text"
                      name=""
                      id="phone"
                      placeholder="phone"
                      {...register('phone2')}
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-title">
                  {/* address */}
                  <h3>address</h3>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>address</span>
                    <input
                      type="text"
                      name=""
                      id="address"
                      placeholder="address"
                      {...register('address2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>number</span>
                    <input
                      type="text"
                      name=""
                      id="number"
                      placeholder="number"
                      {...register('number')}
                    />
                  </div>
                  <div className="input-container">
                    <span>city</span>
                    <input
                      type="text"
                      name=""
                      id="city"
                      placeholder="city"
                      {...register('city2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>state</span>
                    <input
                      type="text"
                      name=""
                      id="state"
                      placeholder="state"
                      {...register('state2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>country Code</span>
                    <input
                      type="text"
                      name=""
                      id="countryCode"
                      placeholder="country code"
                      {...register('countryCode2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>postalCode</span>
                    <input
                      type="text"
                      name=""
                      id="postalCode"
                      placeholder="postal code"
                      {...register('postalCode2')}
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-title">
                  {/* payment */}
                  <h2>payment</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>method</span>
                    <input
                      type="text"
                      name=""
                      id="method"
                      placeholder="method"
                      {...register('method')}
                    />
                  </div>
                  <div className="input-container">
                    <span>frequency</span>
                    <input
                      type="text"
                      name=""
                      id="frequency"
                      placeholder="frequency"
                      {...register('frequency')}
                    />
                  </div>
                  <div className="input-container">
                    <span>day</span>
                    <input
                      type="text"
                      name=""
                      id="day"
                      placeholder="day"
                      {...register('day')}
                    />
                  </div>
                  <div className="input-container">
                    <span>withholding Pct</span>
                    <input
                      type="text"
                      name=""
                      id="withholdingPct"
                      placeholder="withholding pct"
                      {...register('withholdingPct')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="user">
              <div className="form-section">
                <div className="section-title">
                  <h2>user</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>name</span>
                    <input
                      type="text"
                      name=""
                      id="name"
                      placeholder="name"
                      {...register('name2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>email</span>
                    <input
                      type="text"
                      name=""
                      id="email"
                      placeholder="email"
                      {...register('userEmail')}
                    />
                  </div>
                  <div className="input-container">
                    <span>user name</span>
                    <input
                      type="text"
                      name=""
                      id="userName"
                      placeholder="user Name"
                      {...register('userName')}
                    />
                  </div>
                  <div className="input-container">
                    <span>password</span>
                    <input
                      type="text"
                      name=""
                      id="password"
                      placeholder="password"
                      {...register('password')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="settings">
              <div className="form-section">
                <div className="section-title">
                  <h2>settings</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>time zone</span>
                    <input
                      type="text"
                      name=""
                      id="timezone"
                      placeholder="timezone"
                      {...register('timeZone')}
                    />
                  </div>
                  <div className="input-container">
                    <span>theme</span>
                    <input
                      type="text"
                      name=""
                      id="theme"
                      placeholder="theme"
                      {...register('theme')}
                    />
                  </div>
                  <div className="input-container">
                    <span>max terminals</span>
                    <input
                      type="text"
                      name=""
                      id="maxTerminals"
                      placeholder="max terminals"
                      {...register('maxTerminals')}
                    />
                  </div>
                  <div className="input-container">
                    <span>quota</span>
                    <input
                      type="text"
                      name=""
                      id="quota"
                      placeholder="quota"
                      {...register('quota')}
                    />
                  </div>
                  <div className="input-container">
                    <span>active</span>
                    <input
                      type="text"
                      name=""
                      id="active"
                      placeholder="active"
                      {...register('userName')}
                    />
                  </div>
                  <div className="input-container">
                    <span>evalution period days</span>
                    <input
                      type="text"
                      name=""
                      id="evalutionPeriodDays"
                      placeholder="evalution period days"
                      {...register('evalutionPeriodDays')}
                    />
                  </div>
                  <div className="input-container">
                    <span>qr codes enable</span>
                    <input
                      type="text"
                      name=""
                      id="qrCodesEnable"
                      placeholder="qr codes enable"
                      {...register('qrCodesEnable')}
                    />
                  </div>
                  <div className="input-container">
                    <span>termminal status notification enable</span>
                    <input
                      type=""
                      name=""
                      id="terminalStatusNotificationEnable"
                      placeholder="terminal status notification enable"
                      {...register('terminalStatusNotifica')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="button-submit">
              <button
                type="submit"
                style={{ color: globalTheme.textColor, background: globalTheme.secondaryColor }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Main;
