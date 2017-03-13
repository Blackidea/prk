## Старт проекта

### Установи модули

Для тех, кто использует [yarn](https://github.com/yarnpkg/yarn)

```
yarn install
```

Для тех, кто не использует [yarn](https://github.com/yarnpkg/yarn)

```
npm i
```

Запуск шаблона для разработки

```
npm start
```

Сборка в папку dist

```
npm run build
```

## Структура проекта
**Все файлы проекта находятся в папке app**

```
├── icons
│   └── club                            # SVG иконки для генерации векторного спрайта
├── pages           
│   └── club                            # Страницы
│       ├── index.pug                   # Разметка страницы (desktop)
│       └── m-index.pug                 # Разметка страницы (mobile)
├── resources
│   └── club                            # Статические файлы, для копирования в корень dist
│       └── assets      
│           ├── fonts                   # Файлы шрифтов
│           └── images                  # Изоображения
├── scripts           
│   └── club                            # Скрипты
│       ├── blocks                      # Классы
│       └── pages                       # js для каждой страницы, с инициализаци нужных ей блоков и плагинов
├── styles           
│   └── club                            # SCSS стили
│       ├── blocks                      # Стили БЭМ блоков
│       │   ├── block                   # Стили БЭМ блока
│       │   │   ├── common.scss         # Общие стили для всех версий (разрешений экранов)
│       │   │   ├── 1000.scss           # Стили для десктопной версии
│       │   │   └── 320.scss            # Стили для мобильной версии
│       ├── global                      # Вспомогательные стили
│       │   ├── fonts.scss              # Подключение шрифтов
│       │   ├── icons.scss              # Информация о svg стилях (генерируется автоматически)
│       │   ├── mixins.scss             # Миксины
│       │   ├── variables.scss          # Переменные
│       │   └── main.scss               # Подключение вышеперечисленных стилей
│       ├── club1000.scss               # Файл с импортами стилей для разрешения 1000
│       ├── club320.scss                # Файл с импортами стилей для разрешения 320
│       └── club<...>.scss              # Файл с импортами стилей для разрешения <...>
├── templates
│    ├── helpers
│    │    ├── head.pug                  # head часть разметки
│    │    ├── styles.pug                # Удобное подключение стилей
│    │    └── scripts.pug               # Удобное подключение скриптов
│    └── club                           # Шаблоны БЭМ блоков
│         └── layout-default            # Стандартная разметка страницы (doctype, etc)
│         │    ├── desktop.pug          # Для десктопной версии
│         │    └── mobile.pug           # Для мобильной версии
│         └── blockName                 # БЭМ блок
│         │    ├── desktop.pug          # Для десктопной версии
│         │    └── mobile.pug           # Для мобильной версии

```

## Как создать блок? 

### Добавление шаблона

Необходимо создать папку с именем блока в ```app/templates/club```
В ней создать 2 файла, ```desktop.pug```, ```mobile.pug```

```pug
mixin blockName()
  +b.xfo-blockName._modifier
    +e.elementName._modifier
```
Данный код развернется в
```html
<div class="xfo-blockName xfo-blockName_modifier">
  <div class="xfo-blockName__elementName xfo-blockName__elementName_modifier"></div>
</div>
```

**ВАЖНО:** если шаблоны мобильной и десктопной версии идентичны, то в в шаблон мобильной версии необходимо подключить шаблон десктопной
```pug
include desktop
```

### Добавление стилей

Необходимо создать папку с именем блока в ```app/styles/club/blocks```
В ней создать файлы для всех разрешений

```
app/styles/club/blocks/blockName/common.scss
```
В данном файле хранятся общие стили для ВСЕХ версий (разрешений)
```scss
.xfo-blockName {
  
}
```

```
app/styles/club/blocks/blockName/1000.scss
```
В данном файле хранятся общие стили для десктопной версии (1000px)
в него импортируем файл с общими стилями и дополняем его.

```scss
@import "common";

.xfo-blockName {
  
}
```
Затем в файлах ```app/styles/club/club320.scss``` и ```app/styles/club/club1000.scss``` 
подключаем соответствующие стили

### Использование блока
Чтобы использовать данный блок в других блоках либо на страницах, его необходимо подключить

#### Пример глайной страницы (десктоп) и подключения блока ```app/pages/club/index.pug```

```pug
extends ../../templates/club/layout-default/desktop

include ../../templates/club/index/desktop
include ../../templates/club/blockName/desktop

block head
    - var pageTitle = 'Заголовок'
    - var pageDescription = 'Описание'
    - var pageKeywords = 'Ключевые слова'
    
block content
    +index() // подразумевается, что этот блок существует
      +e.blockName // данный элемент задает размеры и позиционирование (отступы и.т.д) блока
        +blockName()
        
    +scripts(['index.js'])
```

## Как собираются и используются SVG спрайты
Основной файл с иконками, находится в ```dist/assets/images/xfo-svg__icons.svg```

### Добавление SVG иконок

Что бы добавить иконки в svg спрайт, их необходиммо поместить в 

```
└── app
    └──icons
        └── club
            ├── icon1.svg
            └── icon2.svg
```

Чтобы подключить svg иконку, нужно использовать следущую конструкцию

```scss
.block {
  @extend %icon1;
}
```

В собранном виде, данная конструкция выглядет так:

```css
.block {
  background: url("../images/xfo-svg__icons.svg") no-repeat;
  background-position: 0 0;
  width: 32px;
  height: 32px; 
}
```
