function arr (direction,choiseClass,nonChoiseClass,numIds,numOfSel) {
    console.log(numOfSel);
    const elem = document.querySelectorAll("."+choiseClass);
    var  number = elem[numOfSel].id;
    console.log(numIds);
    console.log(number);
    if (direction=="r") {

        if (number == numIds[0]) {
            document.getElementById(numIds[0]).classList.remove(choiseClass);
            document.getElementById(numIds[0]).classList.add(nonChoiseClass);
            document.getElementById(numIds[1]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[1]).classList.add(choiseClass);

        } else if (number == numIds[1]) {
            document.getElementById(numIds[1]).classList.remove(choiseClass);
            document.getElementById(numIds[1]).classList.add(nonChoiseClass);
            document.getElementById(numIds[2]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[2]).classList.add(choiseClass);
        } else if (number == numIds[2]) {
            document.getElementById(numIds[2]).classList.remove(choiseClass);
            document.getElementById(numIds[2]).classList.add(nonChoiseClass);
            document.getElementById(numIds[3]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[3]).classList.add(choiseClass);

        } else if (number == numIds[3]) {
            document.getElementById(numIds[3]).classList.remove(choiseClass);
            document.getElementById(numIds[3]).classList.add(nonChoiseClass);
            document.getElementById(numIds[0]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[0]).classList.add(choiseClass);
        }
    }else if(direction=="l"){
        if (number == numIds[0]) {
            document.getElementById(numIds[0]).classList.remove(choiseClass);
            document.getElementById(numIds[0]).classList.add(nonChoiseClass);
            document.getElementById(numIds[3]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[3]).classList.add(choiseClass);

        } else if (number == numIds[1]) {
            document.getElementById(numIds[1]).classList.remove(choiseClass);
            document.getElementById(numIds[1]).classList.add(nonChoiseClass);
            document.getElementById(numIds[0]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[0]).classList.add(choiseClass);
        } else if (number == numIds[2]) {
            document.getElementById(numIds[2]).classList.remove(choiseClass);
            document.getElementById(numIds[2]).classList.add(nonChoiseClass);
            document.getElementById(numIds[1]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[1]).classList.add(choiseClass);

        } else if (number == numIds[3]) {
            document.getElementById(numIds[3]).classList.remove(choiseClass);
            document.getElementById(numIds[3]).classList.add(nonChoiseClass);
            document.getElementById(numIds[2]).classList.remove(nonChoiseClass);
            document.getElementById(numIds[2]).classList.add(choiseClass);
        }
    }
}

function imgButton(pos){
    elem=["sources","speedWork","arch","func"]
    imgs=["img/description/architectsav.png","img/description/architectsav.png","img/description/dashboard.jpg","img/description/architectsav.png"]
    const descriptions = {
        'sources': `Сбор событий с журналов Windows, БД, текстовых файлов, syslog, SNMP, Net Flow.
        Поддержка 500+ источников событий и пакет правил sigma rules из коробки.
        Простота подключения новых источников с использованием настроечных файлов Обогащение собираемых данных на агентах,
        поддержка сторонних источников данных об угрозах (фиды), сервис геолокации событий`,
        'speedWork': `Обработка потока событий 100К EPS без ограничения по максимуму.
        Высокая скорость поиска информации по значительному объему событий, собранному за длительный промежуток времени (квартал, год).
        Обработка сложных поисковых запросов в режиме реального времени`,
        'arch': `Открытая архитектура и поддержка API для смежных систем;
        Сжатие хранимых данных о событиях до 70 раз;
        Масштабируемость;
        Простота и скорость внедрения системы`,
        'func': `- Контекстный поиск по активному каналу
        - Автоматический импорт правил из других SIEM систем
        - Корреляция событий как в режиме реального времени, так и в режиме ретроспективного анализа
        - Конструктор правил корреляции
        - Поддержка pre-persistence rules
        - Возможность оповещений при выявлении инцидентов ИБ
        - Поддержка активных листов
        - Разграничение прав доступа, ролевая модель
        - Наличие сетевой модели
        - Формирование кастомизированных отчётов в 1 клик`
    };
    for (let i = 0; i < elem.length; i++){
        document.getElementById(elem[i]).classList.remove("but-img-ch");
        document.getElementById(elem[i]).classList.remove("but-img-nch");
        document.getElementById(elem[i]).classList.add("but-img-nch");
        if(elem[i] == pos){
            //document.getElementById("img").src = imgs[i]; --- меняем картинку
            document.getElementById("architecture-description-text").textContent = descriptions[pos]; // Обновляем текст
            console.log(i);
        }
    }
    document.getElementById(pos).classList.remove("but-img-nch");
    document.getElementById(pos).classList.remove("but-img-ch");
    document.getElementById(pos).classList.add("but-img-ch");
}


function imgButtonIterface(poss) {
    const elemIds = ["pic-1", "pic-2", "pic-3", "pic-4", "pic-5", "pic-6", "pic-7", "pic-8"];
    const imgs = [
        "img/description/active channel diagram.jpg",
        "img/description/active channel table.jpg",
        "img/description/active channel diagram.jpg",
        "img/description/active channel table.jpg",
        "img/description/active channel diagram.jpg",
        "img/description/active channel table.jpg",
        "img/description/active channel diagram.jpg",
        "img/description/Incident monitoring.jpg"
    ];

    // Проверка наличия элемента с заданным id
    if (elemIds.includes(poss)) {
        for (let i = 0; i < elemIds.length; i++) {
            const currentElem = document.getElementById(elemIds[i]);
            currentElem.classList.remove("but-img-chc");
            currentElem.classList.remove("but-img-nchc");
            currentElem.classList.add("but-img-nchc");

            if (elemIds[i] === poss) {
                document.getElementById("interface-image").src = imgs[i];
                console.log(i);
            }
        }

        const selectedElem = document.getElementById(poss);
        selectedElem.classList.remove("but-img-nchc");
        selectedElem.classList.remove("but-img-chc");
        selectedElem.classList.add("but-img-chc");
    } else {
        console.error("Элемент с id " + poss + " не найден на странице.");
    }
}


function showOverlay(text, button) {
    const overlay = document.querySelector('.overlay');
    overlay.textContent = text;

    const buttonRect = button.getBoundingClientRect();
    overlay.style.top = `${buttonRect.top + buttonRect.height / 2 }px`;
    overlay.style.left = `${buttonRect.left + buttonRect.width / 2}px`;

    overlay.classList.add('active');

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
