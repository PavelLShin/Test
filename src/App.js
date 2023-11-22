import './App.css'
import Part1 from '../src/img/part1.svg'
import Part2 from '../src/img/part2.svg'
import Telegram from '../src/img/telegram (1).svg'
import Viber from '../src/img/viber.svg'
import Whatsapp from '../src/img//whatsapp (1).svg'
import Redball from './img/red ball.svg'
import Pureball from './img/purple ball.svg'
import Redball2 from './img/red ball2.svg'
import Willbex from './img/WELBEX.svg'
import BCapp from './img/BCapp.svg'
import WallbexApp from './img/WELBEXapp .svg'

function App() {
  return (
    <div>
      <body>
        <div className="app_version">
          <div className="app_header">
            <h2>Услуги</h2>
            <h2>Виджеты</h2>
            <h2>Интеграции</h2>
            <h2>Кейсы</h2>
          </div>
          <div
            className="app_main"
            style={{
              background: `url(${BCapp}), lightgray 0% 0% / 100px 100px repeat;`,
            }}
          >
            <div className="app_circle1"></div>
            <div className="app_circle2"></div>
            <img className="PureballApp" src={Pureball} alt="PureballApp" />
            <img className="RedballApp" src={Redball2} alt="RedballApp" />
            <div className="app_main_content">
              <h1>Зарабатывайте больше</h1>
              <img src={WallbexApp} alt="WallbexApp" />
              <h2>Развиваем и контролируем продажи за вас</h2>
              <div className="app_main_content_container_consult">
                <h2>
                  Вместе с <span>бесплатной консультацией</span> мы дарим:
                </h2>
              </div>
              <div className="app_main_content_footer">
                <div className="app_main_content_footer_top">
                  <div className="app_main_content_footer_left">
                    <div className="app_main_content_footer_line"></div>
                    <h2>Skype аудит</h2>
                  </div>
                  <div className="app_main_content_footer_right">
                    <div className="app_main_content_footer_line"></div>
                    <h2>30 виджетов</h2>
                  </div>
                </div>
                <div className="app_main_content_footer_bottom">
                  <div className="app_main_content_footer_left">
                    <div className="app_main_content_footer_line"></div>
                    <h2>Dashboard</h2>
                  </div>
                  <div className="app_main_content_footer_right">
                    <div className="app_main_content_footer_line"></div>
                    <h2>Месяц аmoCRM</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app_footer">
            <h2>О компании</h2>
            <h3>Партнёрская программа</h3>
            <h4>Вакансии</h4>
            <h5>Меню</h5>
            <div className="app_footer_link">
              <div className="app_footer_link_left">
                <h2>Расчёт стоимости</h2>
                <h2>Услуги</h2>
                <h2>Виджеты</h2>
                <h2>Интеграции</h2>
                <h2>Наши клиенты</h2>
              </div>
              <div className="app_footer_link_right">
                <h2>Благодарность клиентов</h2>
                <h2>Кейсы</h2>
                <h2>Сертификаты</h2>
                <h2>Блог на Youtube</h2>
                <h2>Вопрос / Ответ</h2>
              </div>
            </div>
            <div className="app_footer_contacts">
              <h2>Контакты</h2>
              <h3>+7 555 555-55-55</h3>
              <div className="app_footer_contacts_messenger">
                <img src={Telegram} alt="TelegramApp" />
                <img src={Viber} alt="ViberApp" />
                <img src={Whatsapp} alt="WhatsappApp" />
              </div>
              <h4>Москва, Путевой проезд 3с1, к 902</h4>
              <div className="app_footer_contacts_copyright">
                <h2>©WELBEX 2022. Все права защищены.</h2>
                <h3>Политика конфиденциальности</h3>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="desktop_version">
          <header>
            <div className="header_left">
              <div className="header_left_left">
                <div className="header_left_left_logo">
                  <img id="part1" src={Part1} alt="Part1" />
                  <img id="part2" src={Part2} alt="Part2" />
                </div>
                <div className="header_left_left_description">
                  <h2>
                    крупный интегратор CRM <br></br>в Росcии и ещё 8 странах
                  </h2>
                </div>
              </div>
              <div className="header_left_right">
                <div className="header_left_right_content">
                  <h2>Услуги</h2>
                  <h2>Виджеты</h2>
                  <h2>Интеграции</h2>
                  <h2>Кейсы</h2>
                  <h2>Сертификаты</h2>
                </div>
              </div>
            </div>
            <div className="heafer_right">
              <div className="header_right_number">
                <h2>+7 555 555-55-55</h2>
              </div>
              <div className="header_right_app">
                <img src={Telegram} alt="Telegram" />
                <img src={Viber} alt="Viber" />
                <img src={Whatsapp} alt="Whatsapp" />
              </div>
            </div>
          </header>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <img className="Redball" src={Redball} alt="Redball" />
          <img className="Pureball" src={Pureball} alt="Pureball" />
          <img className="Redball2" src={Redball2} alt="Redball2" />
          <main>
            <div className="main_left">
              <div className="main_left_top">
                <div className="main_left_top_header">
                  <h2>Зарабатывайте больше</h2>
                </div>
                <div className="main_left_top_title">
                  <img src={Willbex} alt="Willbex" />
                </div>
              </div>
              <div className="main_left_bottom">
                <h2>
                  Развиваем и контролируем <br></br>продажи за вас
                </h2>
              </div>
            </div>
            <div className="main_right">
              <div className="main_right_header">
                <h2>
                  Вместе с <span> бесплатной</span> <br></br>
                  <span>консультацией</span>
                  мы дарим:
                </h2>
              </div>
              <div className="main_right_content_top">
                <div className="main_right_content_top_left"></div>
                <div className="main_right_content_top_right">
                  <div className="main_right_content_top_right_left">
                    <div className="main_right_content_top_right_left_header">
                      <h2>Виджеты</h2>
                    </div>
                    <div className="main_right_content_top_right_left_content">
                      <h2>30 готовых решений</h2>
                    </div>
                  </div>
                  <div className="main_right_content_top_right_right">
                    <div className="main_right_content_top_right_left_header">
                      <h2>Dashboard</h2>
                    </div>
                    <div className="main_right_content_top_right_left_content">
                      <h2>с показателями вашего бизнеса</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_right_content_bottom">
                <div className="main_right_content_bottom_left"></div>
                <div className="main_right_content_bottom_right">
                  <div className="main_right_content_bottom_right_left">
                    <div className="main_right_content_top_right_left_header">
                      <h2>Skype Аудит</h2>
                    </div>
                    <div className="main_right_content_top_right_left_content">
                      <h2>
                        отдела продаж <br></br>и CRM системы
                      </h2>
                    </div>
                  </div>
                  <div className="main_right_content_bottom_right_right">
                    <div className="main_right_content_top_right_left_header">
                      <h2>35 дней</h2>
                    </div>
                    <div className="main_right_content_top_right_left_content">
                      <h2>использования CRM</h2>
                    </div>
                  </div>
                </div>
              </div>
              <button className="main_content_btn">
                <h2>Получить консультацию</h2>
              </button>
            </div>
          </main>
          <footer>
            <div className="footer_none"></div>
            <div className="footer_content">
              <div className="footer_content_about">
                <h2>О компании</h2>
                <div className="footer_content_about_list">
                  <h2>Партнёрская программа</h2>
                  <h2>Вакансии</h2>
                </div>
              </div>
              <div className="footer_menu_content">
                <h2>Меню</h2>
                <div className="footer_content_menu_list">
                  <h2>Расчёт стоимости</h2>
                  <h2>Услуги</h2>
                  <h2>Виджеты</h2>
                  <h2>Интеграции</h2>
                  <h2>Интеграции</h2>
                </div>
              </div>
              <div className="footer_keys_content">
                <div className="footer_keys_hidden_content"></div>
                <div className="footer_content_keys_list">
                  <h2>Кейсы</h2>
                  <h2>Благодарственные письма</h2>
                  <h2>Сертификаты</h2>
                  <h2>Блог на Youtube</h2>
                  <h2>Вопрос / Ответ</h2>
                </div>
              </div>
              <div className="footer_contacts">
                <h2>Контакты</h2>
                <h3>+7 555 555-55-55</h3>
                <div className="footer_icons">
                  <img src={Telegram} alt="Telegram_footer" />
                  <img src={Viber} alt="Viber_footer" />
                  <img src={Whatsapp} alt="Whatsapp_footer" />
                </div>
                <h4>Москва, Путевой проезд 3с1, к 902</h4>
                <div className="footer_copyright">
                  <h2>©WELBEX 2022. Все права защищены.</h2>
                  <h2>Политика конфиденциальности</h2>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </div>
  )
}

export default App
