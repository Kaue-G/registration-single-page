/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
// import { useTranslation } from 'react-i18next';
import {
// LoaderContext,
useTemplateVal,
} from '@dsplay/react-template-utils';
import './style.sass';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();
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
                  <h2>{t('company')}</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('name')}</span>
                    <input
                      type="text"
                      id="name"
                      placeholder="---"
                      {...register('name')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('website')}</span>
                    <input
                      type="url"
                      name=""
                      id="website"
                      placeholder="---"
                      {...register('website')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('phone')}</span>
                    <input
                      type="text"
                      name=""
                      id="phone"
                      placeholder="---"
                      {...register('phone')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('email')}</span>
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="---"
                      {...register('email')}
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-title">
                  <h3>{t('address')}</h3>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('address')}</span>
                    <input
                      type="text"
                      name=""
                      id="address"
                      placeholder="---"
                      {...register('address')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('number')}</span>
                    <input
                      type="text"
                      name=""
                      id="number"
                      placeholder="---"
                      {...register('name')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('city')}</span>
                    <input
                      type="text"
                      name=""
                      id="city"
                      placeholder="---"
                      {...register('city')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('state')}</span>
                    <input
                      type="text"
                      name=""
                      id="state"
                      placeholder="---"
                      {...register('state')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('countryCode')}</span>
                    <input
                      type="text"
                      name=""
                      id="countryCode"
                      placeholder="---"
                      {...register('countryCode')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('postalCode')}</span>
                    <input
                      type="text"
                      name=""
                      id="postalCode"
                      placeholder="---"
                      {...register('postalCode')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="billing-info">
              <div className="form-section">
                <div className="section-title">
                  <h2>{t('billingInfo')}</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('accountType')}</span>
                    <input
                      type="text"
                      name=""
                      id="accountType"
                      placeholder="---"
                      {...register('accountType')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('taxId')}</span>
                    <input
                      type="text"
                      name=""
                      id="taxId"
                      placeholder="---"
                      {...register('taxId')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('email')}</span>
                    <input
                      type="text"
                      name=""
                      id="email"
                      placeholder="---"
                      {...register('email2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('phone')}</span>
                    <input
                      type="text"
                      name=""
                      id="phone"
                      placeholder="---"
                      {...register('phone2')}
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-title">
                  <h3>{t('address')}</h3>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('address')}</span>
                    <input
                      type="text"
                      name=""
                      id="address"
                      placeholder="---"
                      {...register('address2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('number')}</span>
                    <input
                      type="text"
                      name=""
                      id="number"
                      placeholder="---"
                      {...register('number')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('city')}</span>
                    <input
                      type="text"
                      name=""
                      id="city"
                      placeholder="---"
                      {...register('city2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('state')}</span>
                    <input
                      type="text"
                      name=""
                      id="state"
                      placeholder="---"
                      {...register('state2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('countryCode')}</span>
                    <input
                      type="text"
                      name=""
                      id="countryCode"
                      placeholder="---"
                      {...register('countryCode2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('postalCode')}</span>
                    <input
                      type="text"
                      name=""
                      id="postalCode"
                      placeholder="---"
                      {...register('postalCode2')}
                    />
                  </div>
                </div>
              </div>
              <div className="form-section">
                <div className="section-title">
                  <h2>{t('payment')}</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('method')}</span>
                    <input
                      type="text"
                      name=""
                      id="method"
                      placeholder="---"
                      {...register('method')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('frequency')}</span>
                    <input
                      type="text"
                      name=""
                      id="frequency"
                      placeholder="---"
                      {...register('frequency')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('day')}</span>
                    <input
                      type="text"
                      name=""
                      id="day"
                      placeholder="---"
                      {...register('day')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('withholdingPct')}</span>
                    <input
                      type="text"
                      name=""
                      id="withholdingPct"
                      placeholder="---"
                      {...register('withholdingPct')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="user">
              <div className="form-section">
                <div className="section-title">
                  <h2>{t('user')}</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('name')}</span>
                    <input
                      type="text"
                      name=""
                      id="name"
                      placeholder="---"
                      {...register('name2')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('email')}</span>
                    <input
                      type="text"
                      name=""
                      id="email"
                      placeholder="---"
                      {...register('userEmail')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('userName')}</span>
                    <input
                      type="text"
                      name=""
                      id="userName"
                      placeholder="---"
                      {...register('userName')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('password')}</span>
                    <input
                      type="text"
                      name=""
                      id="password"
                      placeholder="---"
                      {...register('password')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="settings">
              <div className="form-section">
                <div className="section-title">
                  <h2>{t('settings')}</h2>
                </div>
                <div className="section-inputs">
                  <div className="input-container">
                    <span>{t('timezone')}</span>
                    <input
                      type="text"
                      name=""
                      id="timezone"
                      placeholder="---"
                      {...register('timeZone')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('theme')}</span>
                    <input
                      type="text"
                      name=""
                      id="theme"
                      placeholder="---"
                      {...register('theme')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('maxTerminals')}</span>
                    <input
                      type="text"
                      name=""
                      id="maxTerminals"
                      placeholder="---"
                      {...register('maxTerminals')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('quota')}</span>
                    <input
                      type="text"
                      name=""
                      id="quota"
                      placeholder="---"
                      {...register('quota')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('active')}</span>
                    <input
                      type="text"
                      name=""
                      id="active"
                      placeholder="---"
                      {...register('userName')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('evaluationPeriodDays')}</span>
                    <input
                      type="text"
                      name=""
                      id="evaluationPeriodDays"
                      placeholder="---"
                      {...register('evaluationPeriodDays')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('qrCodesEnabled')}</span>
                    <input
                      type="text"
                      name=""
                      id="qrCodesEnable"
                      placeholder="---"
                      {...register('qrCodesEnable')}
                    />
                  </div>
                  <div className="input-container">
                    <span>{t('terminalStatusNotificationEnabled')}</span>
                    <input
                      type=""
                      name=""
                      id="terminalStatusNotificationEnable"
                      placeholder="---"
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
                {t('send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Main;
