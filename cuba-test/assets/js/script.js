$(document).ready(function () {

    //    открывает модалку в шапке

    $('.header__user-img').click(function () {
        $(".header__tultip-box").addClass("header__tultip-box__show");
    });

    $(document).mouseup(function (e) {
        var div = $(".header__tultip-box__show");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".header__tultip-box__show").removeClass("header__tultip-box__show");
        }
    });

    //включает редактирование карточки клиента
    $('.client__name-after').click(function () {
        $(".client__card").addClass("client__card-edit");
    });

    $(document).mouseup(function (e) {
        var div = $(".client__card");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".client__card").removeClass("client__card-edit");
        }
    });

    //растягивает textarea
    function flexibleTextarea() {
        var _txt = document.getElementById('client__contact-textarea');
        var _minRows = 1;
        if (_txt) {
            function setRows() {
                _txt.rows = _minRows;
                do {
                    if (_txt.clientHeight != _txt.scrollHeight) _txt.rows += 1;
                } while (_txt.clientHeight < _txt.scrollHeight);
            }
            setRows();
            _txt.rows = _minRows;
            _txt.onkeyup = function () {
                setRows();
            }
        }
    }
    if (window.addEventListener)
        window.addEventListener("load", flexibleTextarea, false);
    else if (window.attachEvent)
        window.attachEvent("onload", flexibleTextarea);

    //растягивает textarea
    function flexibleTextarea() {
        var _txt = document.getElementById('comments__visit-headline');
        var _minRows = 1;
        if (_txt) {
            function setRows() {
                _txt.rows = _minRows;
                do {
                    if (_txt.clientHeight != _txt.scrollHeight) _txt.rows += 1;
                } while (_txt.clientHeight < _txt.scrollHeight);
            }
            setRows();
            _txt.rows = _minRows;
            _txt.onkeyup = function () {
                setRows();
            }
        }
    }
    if (window.addEventListener)
        window.addEventListener("load", flexibleTextarea, false);
    else if (window.attachEvent)
        window.attachEvent("onload", flexibleTextarea);

    //Сохраняет содержимое поля ввода и вставляет к нужный элемент


    var valuePush = function (itemValue, inputValue) {

        var e = document.getElementById(inputValue);
        var val = itemValue;

        document.getElementById(itemValue).innerHTML = localStorage.getItem('Value ' + val, e.value);
        document.getElementById(inputValue).value = localStorage.getItem('Value ' + val, e.value);

        e.onblur = function () {
            localStorage.setItem('Value ' + val, e.value);
            document.getElementById(itemValue).textContent = localStorage.getItem('Value ' + val, e.value);
        };

        e.onkeypress = function (i) {
            i = i || window.event;
            if (i.keyCode === 13) {
                this.blur();
            }
        }

    }

    valuePush('client__name-item', 'client__name-input');
    valuePush('client__contact-info', 'client__contact-textarea');
    valuePush('client__address-info', 'client__address-input');

    //    собирает информацию селектов и выдаёт

    var valuePushSelect = function (itemValue) {

        var number = document.getElementById('client__date-number');
        var month = document.getElementById('client__date-month');
        var year = document.getElementById('client__date-year');

        var numberResult = localStorage.getItem('numberValue');
        var monthResult = localStorage.getItem('monthValue');
        var yearResult = localStorage.getItem('yearValue');

        var concatResult = function () {
            document.getElementById(itemValue).innerHTML = numberResult + ' ' + monthResult + ' ' + yearResult;
        }

        number.onblur = function () {
            var e = number.value;
            localStorage.setItem('numberValue', e)
            numberResult = localStorage.getItem('numberValue');
            concatResult()
        };

        number.onkeypress = function (e) {
            e = e || window.event;
            if (e.keyCode === 13) {
                number.onblur();
            }
        }

        month.onblur = function () {
            var i = month.value;
            localStorage.setItem('monthValue', i)
            monthResult = localStorage.getItem('monthValue');
            concatResult()
        };

        year.onblur = function () {
            var a = year.value;
            localStorage.setItem('yearValue', a)
            yearResult = localStorage.getItem('yearValue');
            concatResult()
        };

        concatResult()
    }

    $('#datepicker-here').data('datepicker')
});
