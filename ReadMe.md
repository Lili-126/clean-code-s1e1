<img width="1199" alt="code-quality-task-screenshot" src="https://user-images.githubusercontent.com/8201843/113413843-4080fb80-93c4-11eb-9f20-15e4b4c1e430.png">

Перед вами небольшое одностраничное [веб-приложение TODO-list](https://github.com/ViktoryiaYatskova/clean-code-s1e1).
Ваша задача – отредактировать файлы кода (_рефакторинг_), при этом функциональность приложения должна остаться неизменной. Правки необходимо вносить согласно следующим руководствам:
 [html-and-css](https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/clean-code/materials/html-and-css.md)
 и [html-and-css-extended](https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/clean-code/materials/html-and-css-extended.md). 
 
На данном этапе не предполагается использование инструментов по автоматическому форматированию кода.

## Требования к выполнению

**Внимание!** Студент имеет право оценить работу на 0 баллов, если хотя бы одно из требований описаных ниже не выполнено:

- Используйте личный **публичный** репозиторий в GitHub для выполнения данного задания.
 Сделайте fork существующего проекта или создайте пустой проект и скопируйте туда файлы.
- Один git-коммит должен содержать изменения согласно одному пункту из руководств, а также иметь в сообщении пункт правил, который покрывает внесенные изменения. Перекрытие  двух или более правил одним коммитом допустимо, если соблюдение одного правила автоматоматически обеспечивает соблюдение остальных (в этом случае все правила должны быть указаны в сообщении).
- Каждый коммит должен соответствовать [требованиям оформления](https://docs.rs.school/#/git-convention?id=%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-%d0%b8%d0%bc%d0%b5%d0%bd%d0%b0%d0%bc-%d0%ba%d0%be%d0%bc%d0%bc%d0%b8%d1%82%d0%be%d0%b2).

- Создайте от ветки `main(master)` ветку `clean-code-s1e1`, в которую вы будете вносить свои изменения.
- [Исходная функциональность приложения](#функциональность-приложения) должна сохраниться в полном объеме после ваших изменений.
- После выполнения задания создайте Pull Request из ветки `clean-code-s1e1` в ветку `main(master)` своего личного **публичного** репозитория. 

   **Внимание**: если вы сделали fork проекта, то при создании Pull Request GitHub автоматически предложит вам сделать слияние с веткой `main` репозитория автора задания. Обязательно измените предлагаемый вариант на ветку `main(master)` своего репозитория.

- Pull Request должен быть оформлен согласно [следующим правилам](https://docs.rs.school/#/pull-request-review-process?id=%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-pull-request-pr).
- ❗ При сабмите задания необходимо указать ссылку на Ваш **Pull Request**.

### Функциональность приложения:
- Добавление нового элемента в список задач "TODO".
- Редактирование элемента в списке задач "TODO".
- Удаление элемента из списка задач "TODO".
- Установка элемента в статус завершенного и перенос в список "COMPLETED" через checkbox.

- Удаление элемента из списка "COMPLETED".
- Редактирование элемента в списке "COMPLETED".
- Установка элемента в статус незавершенного и перенос в список "TODO" через checkbox.

- Внешний вид приложения не изменился.
- Анимация на кнопке удаления работает.

### Рекомендации:
- Аккуратно выполняйте переименование атрибутов, не пропустив ни единого их вхождения, включая JS-файлы.
- Вы можете задеплоить свое приложение с помощью `gh-pages` для упрощения проверки другими студентами.
- Изучите и используйте возможности рефакторинга кода, которые предлагает ваша IDE.

_Пример оформления коммитов:_
```
fix: add Html5 DOCTYPE tag according to rule 2.2 in html-and-css.md
refactor: adjust HTML-formatting according to rule 2.1 in html-and-css.md
```

## Критерии оценки

**Проверяйте лояльно, это задание требует кропотливой работы. Все спорные моменты округляйте в сторону проверяемого**

**Максимальный балл за задание +45**

- +2 балла за каждый из 15 пунктов [руководства начального уровня](https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/clean-code/materials/html-and-css.md, который соблюден ПОЛНОСТЬЮ*.
- +5 баллов за каждый из 3 пунктов [руководства продвинутого уровня] https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/clean-code/materials/html-and-css-extended.md, который соблюден ПОЛНОСТЬЮ*.
- Изменения в отступах, незначительно изменяющие внешний вид приложения, связанные с заменой html-тегов в ходе выполнения и исправленные отступы не считаются ошибкой.

(* т.е. правило должно быть соблюдено для всего документа, а не только для кусочка кода).

## Cross-check
- Для проверки задания можно открыть репозиторий локально или просмотреть его на платформе GitHub. 
- Форма для проверки задания: https://rolling-scopes-school.github.io/checklist/ (пункт "Clean code S1E1").
- Инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow.
