import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    title: "Server Rules",
    agreement: "By participating in our server, you automatically agree to these rules.",
    communication: {
      title: "Communication:",
      respectful: {
        title: "Respectful Communication:",
        content: "Please remember that there is a real person behind every nickname. We strive to create a friendly community where everyone feels safe and respected. Toxic behavior, including insults, aggression, spam, and the use of profanity, is strictly prohibited."
      },
      questions: {
        title: "Questions and Answers:",
        content: "If you have questions or need help, please use the specific sections on the forums corresponding to your region or global forums for general discussion."
      }
    },
    responsibility: {
      title: "Responsibility:",
      pms: {
        title: "Private Messages (PMs):",
        content: "If another participant starts bothering you through private messages, do not engage in conflict. Simply block this user to protect yourself from unwanted interaction."
      },
      security: {
        title: "Data Security:",
        content: "Your personal information is your responsibility. We cannot guarantee the security of data on Discord's side."
      }
    },
    developers: {
      title: "How to Contact Developers?",
      content: "We value your feedback and questions but ask that you respect the personal space of our developers. Do not send private messages to BanerOneTwo᲼ and Marmur regarding bugs, questions, or suggestions."
    },
    advertising: {
      title: "Regarding Advertising or Partnerships:",
      content: "If you are interested in advertising on our server or proposing a partnership, please follow the formal process: submit your application in the 'Advertising and Partnerships' section of the forum."
    },
    important: {
      title: "Important!",
      compliance: {
        title: "Compliance with Discord Rules:",
        content: "In addition to our local rules, remember that you must also adhere to Discord's terms of service."
      }
    },
    consequences: {
      title: "Consequences of Rule Violation:",
      content: "The administration never takes actions like bans, mutes, or kicks without good reason. All actions by moderators and administrators are justified and aimed at maintaining order and respect on the server.",
      list: [
        { title: "Warning", content: "for first-time or minor offenses." },
        { title: "Mute", content: "temporary restriction of communication on the server for more serious or repeated violations." },
        { title: "Kick", content: "removal from the server with the possibility of rejoining if the issue is resolved." },
        { title: "Ban", content: "permanent removal from the server without the possibility of return." }
      ]
    },
    footer: "These rules will help maintain order and respect within the community, making our communication pleasant and productive for all participants."
  },
  uk: {
    title: "Правила Сервера",
    agreement: "Беручи участь у нашому сервері, ви автоматично погоджуєтесь з цими правилами.",
    communication: {
      title: "Спілкування:",
      respectful: {
        title: "Шанобливе спілкування:",
        content: "Будь ласка, пам'ятайте, що за кожним нікнеймом стоїть реальна людина. Ми прагнемо створити дружню спільноту, де кожен почувається безпечно та поважно. Токсична поведінка, включаючи образи, агресію, спам та використання ненормативної лексики, суворо заборонена."
      },
      questions: {
        title: "Питання та відповіді:",
        content: "Якщо у вас є питання або потрібна допомога, будь ласка, використовуйте спеціальні розділи на форумах, що відповідають вашому регіону, або глобальні форуми для загального обговорення."
      }
    },
    responsibility: {
      title: "Відповідальність:",
      pms: {
        title: "Приватні повідомлення:",
        content: "Якщо інший учасник починає турбувати вас через приватні повідомлення, не вступайте в конфлікт. Просто заблокуйте цього користувача, щоб захистити себе від небажаної взаємодії."
      },
      security: {
        title: "Безпека даних:",
        content: "Ваша особиста інформація є вашою відповідальністю. Ми не можемо гарантувати безпеку даних на стороні Discord."
      }
    },
    developers: {
      title: "Як зв'язатися з розробниками?",
      content: "Ми цінуємо ваші відгуки та питання, але просимо поважати особистий простір наших розробників. Не надсилайте приватні повідомлення BanerOneTwo᲼ та Marmur щодо помилок, питань чи пропозицій."
    },
    advertising: {
      title: "Щодо реклами або партнерства:",
      content: "Якщо ви зацікавлені в рекламі на нашому сервері або пропонуєте партнерство, будь ласка, дотримуйтесь формального процесу: подайте заявку в розділі 'Реклама та партнерство' на форумі."
    },
    important: {
      title: "Важливо!",
      compliance: {
        title: "Дотримання правил Discord:",
        content: "Окрім наших локальних правил, пам'ятайте, що ви також повинні дотримуватися умов використання Discord."
      }
    },
    consequences: {
      title: "Наслідки порушення правил:",
      content: "Адміністрація ніколи не вживає таких заходів, як бани, мути чи кіки без поважної причини. Всі дії модераторів та адміністраторів обґрунтовані та спрямовані на підтримку порядку та поваги на сервері.",
      list: [
        { title: "Попередження", content: "за перші або незначні порушення." },
        { title: "Мут", content: "тимчасове обмеження спілкування на сервері за серйозніші або повторні порушення." },
        { title: "Кік", content: "видалення з сервера з можливістю повернення, якщо проблему вирішено." },
        { title: "Бан", content: "постійне видалення з сервера без можливості повернення." }
      ]
    },
    footer: "Ці правила допоможуть підтримувати порядок та повагу в спільноті, роблячи наше спілкування приємним та продуктивним для всіх учасників."
  },
  ru: {
    title: "Правила Сервера",
    agreement: "Участвуя в нашем сервере, вы автоматически соглашаетесь с этими правилами.",
    communication: {
      title: "Общение:",
      respectful: {
        title: "Уважительное общение:",
        content: "Пожалуйста, помните, что за каждым никнеймом стоит реальный человек. Мы стремимся создать дружественное сообщество, где каждый чувствует себя безопасно и уважаемо. Токсичное поведение, включая оскорбления, агрессию, спам и использование ненормативной лексики, строго запрещено."
      },
      questions: {
        title: "Вопросы и ответы:",
        content: "Если у вас есть вопросы или нужна помощь, пожалуйста, используйте специальные разделы на форумах, соответствующие вашему региону, или глобальные форумы для общего обсуждения."
      }
    },
    responsibility: {
      title: "Ответственность:",
      pms: {
        title: "Личные сообщения:",
        content: "Если другой участник начинает беспокоить вас через личные сообщения, не вступайте в конфликт. Просто заблокируйте этого пользователя, чтобы защитить себя от нежелательного взаимодействия."
      },
      security: {
        title: "Безопасность данных:",
        content: "Ваша личная информация является вашей ответственностью. Мы не можем гарантировать безопасность данных на стороне Discord."
      }
    },
    developers: {
      title: "Как связаться с разработчиками?",
      content: "Мы ценим ваши отзывы и вопросы, но просим уважать личное пространство наших разработчиков. Не отправляйте личные сообщения BanerOneTwo᲼ и Marmur по поводу ошибок, вопросов или предложений."
    },
    advertising: {
      title: "Относительно рекламы или партнерства:",
      content: "Если вы заинтересованы в рекламе на нашем сервере или предлагаете партнерство, пожалуйста, следуйте формальному процессу: подайте заявку в разделе 'Реклама и партнерство' на форуме."
    },
    important: {
      title: "Важно!",
      compliance: {
        title: "Соблюдение правил Discord:",
        content: "Помимо наших локальных правил, помните, что вы также должны соблюдать условия использования Discord."
      }
    },
    consequences: {
      title: "Последствия нарушения правил:",
      content: "Администрация никогда не принимает такие меры, как баны, муты или кики без уважительной причины. Все действия модераторов и администраторов обоснованы и направлены на поддержание порядка и уважения на сервере.",
      list: [
        { title: "Предупреждение", content: "за первые или незначительные нарушения." },
        { title: "Мут", content: "временное ограничение общения на сервере за более серьезные или повторные нарушения." },
        { title: "Кик", content: "удаление с сервера с возможностью возвращения, если проблема решена." },
        { title: "Бан", content: "постоянное удаление с сервера без возможности возвращения." }
      ]
    },
    footer: "Эти правила помогут поддерживать порядок и уважение в сообществе, делая наше общение приятным и продуктивным для всех участников."
  }
};

const RulesTab = () => {
  const [language, setLanguage] = useState<"en" | "uk" | "ru">("en");
  const t = translations[language];

  return (
    <div className="animate-fade-up">
      <Card className="bg-black/50 backdrop-blur border-primary/20">
        <CardContent className="p-6 space-y-6 text-white/90">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary">{t.title}</h2>
            <div className="flex gap-2">
              <Button
                variant={language === "en" ? "default" : "secondary"}
                onClick={() => setLanguage("en")}
                className="transition-all duration-300"
              >
                🇬🇧
              </Button>
              <Button
                variant={language === "uk" ? "default" : "secondary"}
                onClick={() => setLanguage("uk")}
                className="transition-all duration-300"
              >
                🇺🇦
              </Button>
              <Button
                variant={language === "ru" ? "default" : "secondary"}
                onClick={() => setLanguage("ru")}
                className="transition-all duration-300"
              >
                🇷🇺
              </Button>
            </div>
          </div>
          
          <p className="italic text-white/80 mb-8">
            {t.agreement}
          </p>

          <section className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.communication.title}</h3>
              <ul className="space-y-4">
                <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                  <span>💬</span>
                  <p>
                    <span className="font-semibold">{t.communication.respectful.title}</span> {t.communication.respectful.content}
                  </p>
                </li>
                <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                  <span>💿</span>
                  <p>
                    <span className="font-semibold">{t.communication.questions.title}</span> {t.communication.questions.content}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.responsibility.title}</h3>
              <ul className="space-y-4">
                <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                  <span>🏨</span>
                  <p>
                    <span className="font-semibold">{t.responsibility.pms.title}</span> {t.responsibility.pms.content}
                  </p>
                </li>
                <li className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                  <span>💾</span>
                  <p>
                    <span className="font-semibold">{t.responsibility.security.title}</span> {t.responsibility.security.content}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.developers.title}</h3>
              <p>
                {t.developers.content}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.advertising.title}</h3>
              <p>
                {t.advertising.content}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.important.title}</h3>
              <p className="flex gap-2 hover:bg-primary/10 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                <span>⚖️</span>
                <span>
                  <span className="font-semibold">{t.important.compliance.title}</span> {t.important.compliance.content}
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">{t.consequences.title}</h3>
              <p className="mb-4">
                {t.consequences.content}
              </p>
              <ul className="space-y-2 list-disc pl-6">
                {t.consequences.list.map((item, index) => (
                  <li key={index}><span className="font-semibold">{item.title}</span> – {item.content}</li>
                ))}
              </ul>
            </div>
          </section>

          <p className="text-white/80 italic mt-8">
            {t.footer}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RulesTab;