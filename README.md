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
│       └── index.pug                 # Разметка страницы
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
│       │   ├── blockName               # Стили БЭМ блока
│       │   │   ├── blockName.scss      # Общие стили для всех версий (разрешений экранов)
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
│    └── club                           # Шаблоны БЭМ блоков
│         └── blockName.html            # Код шаблона 

```

## Как создать блок? 

### Добавление шаблона

Необходимо создать файл с именем блока в ```app/templates/club/blockName.html```

```html
<div class="xfo-blockName xfo-blockName_modifier">
  <div class="xfo-blockName__elementName xfo-blockName__elementName_modifier"></div>
</div>
```

### Добавление стилей

Необходимо создать папку с именем блока в ```app/styles/club/blocks```
В ней создать файлы для всех разрешений

```
app/styles/club/blocks/blockName/blockName.scss
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

#### Пример глайной страницы (десктоп) и подключения блока ```app/pages/club/index.html```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <div class="xfo-my-page">
    <div class="xfo-my-page__blockName">
      //= ../../templates/club/blockName.html
    </div>
  </div>
</body>
</html>
```


### Добавление JavaScript

Необходимо создать js файл с именем блока в ```app/scripts/club/blocks/blockName.js```

```js
class BlockName {
    constructor() {
        
    }
}

window.XFO.blockName = new BlockName();
```


затем необходимо подключить данный класс на страницу (в которой он будет использоваться). ```app/scripts/club/pages/pageName.js```

```js
// Инициализация глобального объекта XFO
if (!(window.XFO instanceof Object)) {
  window.XFO = {};
}

//= ../blocks/blockName.js
```
