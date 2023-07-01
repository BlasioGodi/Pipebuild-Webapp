"use strict";
/* Page Loader */
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});

/* Button Submit */
console.log("PIP init");
const PIP_EL = {
    submit: document.getElementById("sub_button"),
    email: document.getElementById("email"),
    loading: document.getElementById("btn-loading")
};

let canSubmit = false;

function PIP_can_submit() {
    let email = PIP_EL.email.value.trim();
    if (email.length > 4) {
        PIP_enable_submit()
    } else {
        PIP_disable_submit()
    }
}

function PIP_enable_submit() {
    PIP_EL.submit.classList.add("submit_enabled");
    PIP_EL.submit.disabled = false;
    canSubmit = true;
}

function PIP_disable_submit() {
    PIP_EL.submit.classList.remove("submit_enabled");
    PIP_EL.submit.disabled = true;
    canSubmit = false;
}

function PIP_set_event_listeners() {
    PIP_EL.email.addEventListener("keyup", PIP_can_submit);
}

//Footer Toggle menu button
const buttons = {
    button1: document.getElementById("btn-close-1"),
    button2: document.getElementById("btn-close-2"),
    button3: document.getElementById("btn-close-3"),
    button4: document.getElementById("btn-close-4")
};

for (const key in buttons) {
    if (buttons.hasOwnProperty(key)) {
        buttons[key].setAttribute('data-touch-count', 0);
        buttons[key].setAttribute('data-click-count', 0);

        buttons[key].addEventListener('click', () => {
            buttons[key].classList.add("btn-click");
            const clickCount = parseInt(buttons[key].getAttribute('data-click-count'));
            buttons[key].setAttribute('data-click-count', clickCount + 1); // increment click count by 1 for each button

            if (clickCount === 1) {
                buttons[key].classList.remove("btn-click");
                buttons[key].setAttribute('data-click-count', 0); // reset click count to 0 for each button
            }
        });

        buttons[key].addEventListener('touchstart', () => {
            buttons[key].classList.add("btn-click");
            const touchCount = parseInt(buttons[key].getAttribute('data-touch-count'));
            buttons[key].setAttribute('data-touch-count', touchCount + 1); // increment touch count by 1 for each button
        });

        buttons[key].addEventListener('touchend', () => {
            const touchCount = parseInt(buttons[key].getAttribute('data-touch-count'));
            if (touchCount === 1) {
                buttons[key].classList.remove("btn-click");
                buttons[key].setAttribute('data-touch-count', 0);
            }
        });
    }
}

var Pipebuild = {
    init: function () {
        this.Component.init();
    },
    Component: {
        init: function () {
            this.forms();
        },
        forms: function () {
            // Contact Form
            var $contactForm = $('#contact-form');

            if ($contactForm.length > 0) {
                $contactForm.submit(function () {
                    var $btn = $(this).find('.btn-loading');
                    var $form = $(this);
                    var response;
                    const subButton = document.getElementById("sub_button");
                    if ($form.valid()) {
                        $('.btn-loading').show();
                        $('.btn-submit').hide();
                        //  XMLHttpRequest to get output from .php file and print on the console.
                        //Start
                        var xhttp = new XMLHttpRequest();
                        var dateTiming;
                        xhttp.onreadystatechange = function () {
                            if (this.readyState == 4 && this.status == 200) {
                                dateTiming = this.responseText;
                            }
                        };
                        xhttp.open("GET", "mail.php", true);
                        xhttp.send();
                        //End
                        $.ajax({
                            type: 'POST',
                            url: 'mail.php',
                            data: $form.serialize(),
                            error: function (err) {
                                setTimeout(function () {
                                    $('.col-message, .error-message').show();
                                    $('.btn-loading').hide();
                                    $('.btn-submit').show();
                                    PIP_disable_submit();
                                }, 2000);
                            },
                            success: function (responseText) {
                                var funcResponse = responseText.trim();
                                var match = funcResponse.match(/success/i);
                                if (match !== null) {
                                    response = 'success';
                                } else {
                                    response = 'error';
                                }
                                setTimeout(function () {
                                    $btn.addClass(response);
                                    $('.col-message, .success-message').show();
                                    PIP_disable_submit();
                                    $('.btn-loading').hide();
                                    $('.btn-submit').show();

                                }, 800);
                                console.log("Response: ", response);
                            },
                            complete: function (data) {
                                setTimeout(function () {
                                    $('.btn-loading').hide();
                                    $('.btn-submit').show();
                                    PIP_disable_submit();
                                }, 4000);
                            }
                        });
                        return false;
                    }
                    return false;
                });
            }
        }
    }
};

$(document).ready(function () {

    Pipebuild.init();

    /* --------------------------------------------
     STICKY SETTING
    -------------------------------------------- */
    $(function () {
        "use strict";
        if ($(".navbar-sticky").length > 0) {
            $(".navbar-sticky").sticky({ topSpacing: 0 });
            $(".navbar-sticky").css('z-index', '100');
            $(".navbar-sticky").addClass('bg-light');
            $(".navbar-sticky").addClass("top-nav-collapse");
        };
    });


    /* --------------------------------------------------------
    ISOTOPE
   ----------------------------------------------------------- */
    $(function () {
        "use strict";
        $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            masonry: {
                columnWidth: 100
            }
        });
    });
    
    /* --------------------------------------------------------
    COUNT TO
   ----------------------------------------------------------- */
    $(function () {
        "use strict";
        $(".fact-number").appear(function () {
            var dataperc = $(this).attr('data-perc');
            $(this).each(function () {
                $(this).find('.factor').delay(6000).countTo({
                    from: 10,
                    to: dataperc,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });
    });
});


