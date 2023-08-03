"use strict";

copy_url();
function copy_url() {
    const button = document.querySelector('#trex_copy')
    if(button) {
        button.onclick = () => {
        navigator.clipboard.writeText(window.location.href);
        document.getElementById('nw-copied').classList.remove('hidden');
        document.getElementById('nw-copy').classList.add('hidden');
        const timeOut = setTimeout(function() {
            document.getElementById('nw-copied').classList.add('hidden');
            document.getElementById('nw-copy').classList.remove('hidden');
            clearTimeout(timeOut);
        }, 3000);
        return false;
        }
    }
}

reframe_video();
function reframe_video() {
    reframe('iframe');
}

window.addEventListener('load', function () {
    Lightense('.nw-content img');
}, false);

TOC();
function TOC() {
    tocbot.init({
        tocSelector: '#nw-toc',
        contentSelector: '.nw-content',
        headingSelector: 'h2',
        hasInnerContainers: true,
    });
}

has_text();
function has_text() {
    let names = document.getElementsByClassName('trex_has_text');
    [].forEach.call(names, function (el) {
        el.innerText = getFirstLetters(el.innerText);
    });
}

function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .join('');
  
    return firstLetters;
}

topSlide();
function topSlide()
{
    document.addEventListener( 'DOMContentLoaded', function() {
        if(document.getElementById("nw-headlines")) {
            let headlines = new Splide('#nw-headlines', {
                fixedWidth: '412px',
                gap: '24px',
                pagination: false,
                autoplay: false,
                type: 'slide',
                resetProgress: false,
                lazyLoad: 'sequential',
                //interval: 20000,
                arrows: false,
                breakpoints: {
                    767: {
                        fixedWidth: '350.5px'
                    },
                    500: {
                        fixedWidth: '100%'
                    },
                }
            });
            headlines.mount();
        }
    });
}

featuredPosts();
function featuredPosts()
{
    document.addEventListener( 'DOMContentLoaded', function() {
        if(document.getElementById("nw-featured-posts")) {
            let ft_posts = new Splide('#nw-featured-posts', {
                type: 'fade',
                arrows: false,
            });
            ft_posts.mount();
            document.getElementById("fp-next").addEventListener("click", function(){
                ft_posts.go(">");
            });
            document.getElementById("fp-prev").addEventListener("click", function(){
                ft_posts.go("<");
            });
        }
    });
}

subscribe();
function subscribe()
{
    document.addEventListener( 'DOMContentLoaded', function() {
        if(document.getElementById("nw-subscribe")) {
            new Splide('#nw-subscribe', {
                type   : 'loop',
                //drag   : 'free',
                gap: '30px',
                autoWidth: true,
                autoScroll: {
                    speed: .7,
                    pauseOnHover: false,
                    pauseOnFocus: false
                },
                arrows: false,
                pagination: false,
            }).mount(window.splide.Extensions);
        }
    });
}

backToTop();
function backToTop() {
    if(document.getElementById("nw-back-top")) {
        document.getElementById("nw-back-top").addEventListener("click", function(){
            window.scroll({top: 0, behavior: "smooth"});
        });
    }
}

load_more_posts();
function load_more_posts() {
    if(document.getElementById('trex_blog')) {
        let elem = document.getElementById('trex_blog');
        let infScroll = new InfiniteScroll( elem, {
            append: '.trex_post',
            button: '.infinite-scroll-button',
            debug: true,
            hideNav: '.pagination',
            history: false,
            path: '.pagination .older-posts',
            scrollThreshold: false,
            status: '.infinite-scroll-status',
        });
    }
}

switchMode();
function switchMode() {
    if (document.getElementById('trex_switcher') !== null) {
        if (localStorage.newswire === 'dark') {
            document.documentElement.classList.add('dark');
            let checkbox = document.getElementById("switch_dark");
            checkbox.click();
        }

        if(document.getElementById("trex_sepia")) {
            document.getElementById("trex_sepia").addEventListener("click", function(){
                document.documentElement.classList.remove('dark');
                localStorage.newswire = 'sepia';
            });
        }

        if(document.getElementById("trex_light")) {
            document.getElementById("trex_light").addEventListener("click", function(){
                document.documentElement.classList.remove('dark');
                localStorage.newswire = 'light';
            });
        }

        if(document.getElementById("trex_dark")) {
            document.getElementById("trex_dark").addEventListener("click", function(){
                localStorage.newswire = 'dark';
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                document.documentElement.classList.remove('sepia');
            });
        }
    }     
}