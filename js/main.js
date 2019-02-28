// set color if it's been changed already on another page/visit
var body = document.getElementById('body');
var noTransitionStyle = document.createElement('style');
if (noTransitionStyle.styleSheet) {
    noTransitionStyle.styleSheet.cssText = "#shuffle_button, #overlay, .actions li button, .button-hover, .uk-card.uk-label { transition: all 0s !important; }";
} else {
    noTransitionStyle.appendChild(document.createTextNode("#shuffle_button, #overlay, .actions li button, .button-hover, .uk-card. uk-label { transition: all 0s !important; }"));
}
// console.log ("adding style")
body.appendChild(noTransitionStyle);

var preSetColor = localStorage.getItem("currentColor");
if (preSetColor != null) {
    var preStyle = document.createElement('style');
    if (preStyle.styleSheet) {
        preStyle.styleSheet.cssText = preSetColor;
    } else {
        preStyle.appendChild(document.createTextNode(preSetColor));
    }
    body.appendChild(preStyle);
}

// console.log("removing style")
body.removeChild(noTransitionStyle);


function colorSwap() {
    // Good colors: #F012BE, #faa05a, #f0506e, #32d296
    // UI kit colors: blue; #1e87f0; orange #faa05a; red #f0506e; green #32d296;
    // pinkish #F012BE, yellow #ffdd59 gray #485460 dark blue #3c40c6 green #05c46b turqoise #00d8d6

    var colors = ['#F012BE', '#faa05a', '#f0506e', '#32d296', '#ffdd59', '#485460', '#3c40c6', '#05c46b', '#00d8d6'];
    var random_color = Math.floor(Math.random() * colors.length);
    var color_style = colors[random_color] + ' !important';
    var css = ":root { --main-color: " + color_style + "; } ";
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    body.appendChild(style);

    //HTML5 local storage 
    localStorage.setItem("currentColor", css);
    // console.log("set local storage to " + localStorage.getItem("currentColor"))
}

// document.onload


// $('.project_description').each(function (i, obj) {
//     console.log(obj)
//     UIkit.scrollspy(obj, "cls: uk-animation-fade; target: > p; delay: 500; repeat: true");
// });



// Change title when user goes to a different tab
var title = document.title;
$(window).focus(function () {
    document.title = '😄 ' + title;
});

$(window).blur(function () {
    document.title = '😞 ' + title;
});
// end change title 


// Vertical Timeline - by CodyHouse.co
(function () {
    // Vertical Timeline - by CodyHouse.co
    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        this.offset = 0.8;
        this.hideBlocks();
    };

    VerticalTimeline.prototype.hideBlocks = function () {
        //hide timeline blocks which are outside the viewport
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
                    self.images[i].classList.add("cd-is-hidden");
                    self.contents[i].classList.add("cd-is-hidden");
                }
            })(i);
        }
    };

    VerticalTimeline.prototype.showBlocks = function () {
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };

    var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
        verticalTimelinesArray = [],
        scrolling = false;
    if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
            (function (i) {
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
        }

        //show timeline blocks on scrolling
        window.addEventListener("scroll", function (event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }

    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function (timeline) {
            timeline.showBlocks();
        });
        scrolling = false;
    };
})();
// About timeline END


// NAV MENU 
function toggleMenu() {
    var sb = document.getElementById('shuffle_button');
    setTimeout(function () {
        if (sb.classList) {
            sb.classList.toggle("invisible");
            setTimeout(function () {
                sb.classList.toggle("hidden");
            }, 80);
        } else {
            // For IE9
            var classes = sb.className.split(" ");
            var i = classes.indexOf("hidden");

            if (i >= 0)
                classes.splice(i, 1);
            else
                classes.push("hidden");
            sb.className = classes.join(" ");
        }
    }, 280);
}

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    toggleMenu();
});

$('#overlay').click(function () {
    $('#toggle').toggleClass('active');
    $(this).toggleClass('open');
    toggleMenu();
});


$(document).keyup(function (event) {
    if (event.which == '27') {
        if (document.getElementById('overlay').classList.contains("open")) {
            $('#toggle').toggleClass('active');
            $('#overlay').toggleClass('open');
            toggleMenu();
        }
    }
});



// NAV MENU END

// Im Isaac -> Nice to meet 
jQuery(document).ready(function () {
    jQuery(".titleWrapper").addClass("ready");

    jQuery(".titleWrapper h1").each(function () {
        var fullString;
        var characters = jQuery(this).text().split("");

        $this = jQuery(this);
        $this.empty();
        $.each(characters, function (i, el) {
            if (el == " ") {
                el = "&nbsp;"
            };
            $this.append("<span>" + el + "</span");
        });
    });
});

jQuery(document).ready(function () {
    jQuery(".titleWrapper2").addClass("ready");

    jQuery(".titleWrapper2 h1").each(function () {
        var fullString;
        var characters = jQuery(this).text().split("");

        $this = jQuery(this);
        $this.empty();
        $.each(characters, function (i, el) {
            if (el == " ") {
                el = "&nbsp;"
            };
            $this.append("<span>" + el + "</span");
        });
    });
});
// Im Isaac -> Nice to meet END


// HI TEXT ANIMATION
// Wrap every letter in a span
// $('#hi-text .letters').each(function () {
//     $(this).html($(this).text().replace(/([^\x00-\x120]|\w)/g, "<span class='letter'>$&</span>"));
// });

// var hi_animation = anime({
//     targets: '#hi-text .letter',
//     translateY: ["1.3em", 0],
//     delay: 1000,
//     duration: 1000,
//     delay: function (el, i) {
//         return 50 * i;
//     }
// })

//restart buttons
// document.querySelector('#hi-text .restart').onclick = hi_animation.restart;

// document.querySelector('#restart-2').onclick = hi_animation.restart;


// $(document).ready(function () {
//     setTimeout(
//         function () {
//             $('#restart-2').css('transition', '1.5s');
//             $('#restart-2').css('opacity', '1');
//         }, 2500);
// });
// HI TEXT END