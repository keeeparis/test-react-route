# Редактор маршрутов на React и YandexMaps

[Версия на Typescript](https://github.com/keeeparis/route-react-ts)

## Где посмотреть?

https://keeeparis.github.io/react-routes-test/

## Как запустить?

Установить все пакеты
<pre>npm i</pre>
Запустить
<pre>npm run dev</pre>

## Инструменты

- Vite - https://vitejs.dev/ - из-за скорости загрузки всех пакетов.
- React
- Yandex Maps - https://yandex.ru/dev/maps/
- React-Yandex-Yaps - https://react-yandex-maps.vercel.app/ - wrapper around Yandex Api
- React-Beautiful-Dnd - https://github.com/atlassian/react-beautiful-dnd - Drag and Drop
- Styled-Components - css

## Тесты

Cypress

Запуск e2e
<pre>npm run cypress:open</pre>
Запуск unit-тестов
<pre>npm run cypress:open-ct</pre>

## Ответы на вопросы

### Q1. Расскажите, чем, на ваш взгляд, отличается хорошее клиентское приложение от плохого с точки зрения
- пользователя; 

С точки зрения пользователя в использовании приложения важны UI/UX, то есть пользователь должен отчетливо видеть, например, где находится меню, и интуитивно понимать, что произойдет при нажатии на определенную кнопку и т.д. Важен дизайн, потому что каким бы полезным ни был сервис пользователя может отпугнуть цветовой хаос на экране до степени, что приложение он/она больше не откроет. Скорость играет важную роль, так как после каждой секунды, потраченной на ожидание загрузки приложения, количество пользователей уменьшается [значительно](https://habr.com/ru/company/ddosguard/blog/499756/).

- менеджера проекта; 

Для менеджера проекта я считаю важна т.н. flexibility команды, когда по необходимости нужно что-то добавить, убрать или изменить на проекте в кратчайший срок. Еще важный момент - это люди в команде и их плодотворные взаимоотношения между собой, так как только благодаря совместной работе можно создать действительно стоящий продукт.

- дизайнера; 

Дизайнер отвечает за визуальную составляющую в приложении и, исходя из его предназначения (приложения), могут меняться критерии хорошего приложения. Например, если нужно создать лендинг для какого-то события, концерта или лекции, то главная цель дизайнера - сделать запоминающийся дизайн, который "зацепит" пользователя и повысит шанс, что пользователь не забудет о предстоящем событии. При разработке приложений по-больше, куда, допустим, пользователи заходят несколько раз в день, от дизайнера ждут, чтобы дизайн "не раздражал" пользователей, но все также был стильным и уникальным.

- верстальщика; 

Для верстальщика хорошее приложение будет отличаться четкой структурой и разметкой, удобными и ограниченными инструментами. Когда на одной странице подключено несколько UI-библиотек, когда они используются, чтобы выполнять одинаковые функции, когда отсутствует принятое соглашение о наименовании DOM-элементов, когда сайт построен на <code>position: absolute;</code> - все это ад для верстальщика.

- серверного программиста.

Бэкэнд-разработчик ответственен за архитектуру приложения, ее логику. Количество запросов на сервер должно быть оптимальным, чтобы не замедлять работу приложения. Удобная структура базы данных также есть критерий хорошего клиентского приложения. И еще, клиентские данные должны быть зашифрованы и храниться в защищенном месте.

### Q2. Опишите основные особенности разработки крупных многостраничных сайтов, функциональность которых может меняться в процессе реализации и поддержки.

В создании крупных многостраничных сайтов принимает работу зачастую большая команда разработчиков. Имея свой стиль написания кода, каждый из них должен договориться о том, в каком стиле они будут писать код. Стандарт оформления кода позволит ускорить разработку кода, поддержку существующего кода, и быстро и "безболезненно" внедрить изменения и улучшения, которые всегда происходят в жизненном цикле приложения.

Из своего опыта я разрабатывал интернет-магазин, где использовал компонентный подход для создания страничек категорий и товара. Это позволяло минимизировать область возникающих багов и тем самым ускоряло скорость их устранения. Так как это был первый опыт (и пока единственный) разработки достаточно крупного сайта, то главная сложность была создание бэкэнда и запросы к базе данных.

### Q3. При разработке интерфейсов с использованием компонентной архитектуры часто используются термины Presentational Сomponents и Сontainer Сomponents. Что означают данные термины? Зачем нужно такое разделение, какие у него есть плюсы и минусы? 

Presentational Components - это такие компоненты, которые ответственны только за прорисовку элементов, но не за генерацию данных их составляющих. Например, компонент, который выводит список элементов. 
~~~text
  const List = () => {
    return (
      <ul>
        {items.map(e => 
          <li>{e.data}</li>
        )}
      </ul>
    )
  }
~~~

Container Components - это компоненты, в которых происходит работа с данными (state, context), они ответственны за то, как приложение (или его участок) будет работать, за его логику. 

Плюс - это разделение компонентов по их сущности, что облегчает работу с приложением в целом. Минус - увеличивается количество компонентов.

### Q4. Как устроено наследование в JS? Расскажите о своем опыте реализации JS-наследования без использования фреймворков.

Для JS характерно прототипное наследование - объект наследует свойства и методы объекта-прототипа. Это можно осуществлять с помощью ключевого слова <code>class</code> и <code>extends</code>. Когда мы вызываем определенный метод у объекта, у которого его нет, то по цепочке прототипов мы обращаемся к объекту, от которого был унаследован наш объект и проверяем наличие этого метода у него. И так до того, пока прототип не будет равен null - значит такого метода для данного объекта на существует.

Самостоятельно наследование не реализовал, но приходилось понимать, как это работает, при чтении документации различный API.

### Q5. Какие библиотеки можно использовать для написания тестов end-to-end во фронтенде? Расскажите о своем опыте тестирования веб-приложений.

React [рекомендует](https://ru.reactjs.org/docs/testing.html) использовать Jest для тестирования компонентов. Я использовал [Cypress](https://www.cypress.io/) для e2e тестов и unit тестов.

### Q6. Вам нужно реализовать форму для отправки данных на сервер, состоящую из нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в которой не показано, как форма должна работать в динамике. Подробного описания, как должны вести себя различные поля в зависимости от действий пользователя, в требованиях к проекту нет. Ваши действия?

В такой ситуации я бы продумал несколько вариантов, как я вижу динамику на странице и реализовал бы тот, который мне кажется лучшим. После этого, обратился бы к руководителю для показа своего варианты и альтернатив, а дальше, если рук-лю понравился мой вариант, то оставить как есть, если нет, выбор из альтернатив или предложение другого варианта и его последующая реализация. 

Например, при отправки формы, в случае ошибки:
1. Под каждым инпутом пишется сообщение-предупреждение;
2. Показывать модальное окно с всеми пунктами, в которых вознакла ошибка.

### Q7. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода. 

Для скорости написания кода использую сниппеты и различные расширения для VSCode. Для отладки - Chrome Devtools, React Devtools. 
Также стараюсь писать комментарии к коду, в котором могу допустить ошибку при использовании в будущем. Сейчас стараюсь писать на Typescript, так как строгая типизация позволяет отлавливать некоторые ошибки в коде еще до его запуска в браузере.

### Q8. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

StackOverFlow, MDN, Хабр, нахожу полезным [блог Mark Erikson](https://blog.isquaredsoftware.com/).
Помимо программирования занимаюсь настольным теннисом, обожаю читать литературу (как классику, так и фантастику) и играю на (электро-)гитаре.

### Q9. Расскажите нам немного о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Привет! Меня зовут Владимир, мне 25.

В сфере IT я относительно недавно, так как свое основное образование (бакалавриат и магистратура) я получал по специальности Экономика. Однако во времена первых локдаунов я занялся программированием в качестве хобби, и мне это стало очень интересным. Изучал немного Java, потом Python. С помощью Python'а я написал свою аналитическую часть диссертации - "Влияние новостей о 'Green Policies' на акции различных компаний". Использовал API Yahoo Finance. Этот опыт мне очень помог в освоении азов программирования и замотивировал идти по этому пути дальше. Таким образом, я захотел научиться делать сайты и приложения и начал изучать html, css, js.. и сейчас пишу на React.

В свои пэт-проекты я могу отнести свой сайт - https://vladimirtrotsenko.ru, [Github](https://github.com/keeeparis/react_vladimirtrotsenko_ru), который изначально был на (почти чистом) html и который я переписал на React. На нем есть несколько интересных приложений - [WeatherApp](https://vladimirtrotsenko.ru/weather), [TodoApp](https://vladimirtrotsenko.ru/todo), [TimeToApp](https://vladimirtrotsenko.ru/timeto). Также я создал полноценный интернет-магазин - https://comfortstyle.kz, где использовался уже и сервер с NodeJS с запросами в MySQL, хотя и без React. 

Ссылка на гитхаб - https://github.com/keeeparis.
