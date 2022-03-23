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

