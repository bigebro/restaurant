(() => {
    "use strict";
    let e = [{
            name: "Hero Academy",
            position: "Avengers",
            phone: "255-551-5524",
            email: "Academy@hero.com",
   
            alt: "Mama Bear's Photo"
        }, ],
        t = {
            hours: {
                sunday: {
                    open: "8",
                    close: "8"
                },
                monday: {
                    open: "6",
                    close: "6"
                },
                tuesday: {
                    open: "6",
                    close: "6"
                },
                wednesday: {
                    open: "6",
                    close: "6"
                },
                thursday: {
                    open: "6",
                    close: "10"
                },
                friday: {
                    open: "6",
                    close: "10"
                },
                saturday: {
                    open: "8",
                    close: "10"
                }
            },
            location: {
                street: "123 Forest Drive",
                city: "Forestville",
                state: "Maine"
            }
        },
        a = [
        {
            item: !0,
            name: "Iron Man",
            description: "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
            price: "Net Worth: $929391942",
            pic: "./img/iron-man.png",
            alt: "Picture of porridge."
        }],
        i = [{
            text: "A superhero or superheroine is a stock character that possesses superpowers, abilities beyond those of ordinary people, and fits the role of the hero, typically using his or her powers to help the world become a better place, or dedicating themselves to protecting the public and fighting crime",
            name: "Iron Man"
        }],
        o = {
            title: "My super hero",
            beeClass1: "bee-left",
            beeClass2: "bee-right"
        },
        s = {
            title: "Menu",
            beeClass1: "menu-bee-left",
            beeClass2: "menu-bee-right"
        },
        n = {
            title: "Contact Us",
            beeClass1: "contact-bee-left",
            beeClass2: "contact-bee-right"
        };

    function r(e) {
        let t = document.createElement("div");
        t.classList.add("comb-outer"), t.classList.add(e[0].outer);
        let a = document.createElement("div");
        a.classList.add("comb-inner"), a.classList.add(e[0].inner);
        for (let t = 1; t < e.length; t++) {
            if ("p" == e[t].el) {
                var i = document.createElement("p");
                let a = document.createTextNode(e[t].text);
                i.appendChild(a)
            } else if ("h3" == e[t].el) {
                i = document.createElement("h3");
                let a = document.createTextNode(e[t].text);
                i.appendChild(a)
            } else(i = document.createElement("div")).style.backgroundImage = `url(${e[t].source})`, i.setAttribute("title", e[t].text);
            i.classList.add(e[t].class), a.appendChild(i)
        }
        return t.appendChild(a), t
    }

    function l(e, t, a) {
        let i = document.createElement("div");
        i.classList.add("heading-container");
        let o = document.createElement("div");
        o.classList.add("heading"), a && "" != a && i.classList.add(a), t && "" != t && o.classList.add(t);
        let s = document.createElement("h2");
        s.textContent = e, o.appendChild(s), i.appendChild(o);
        let n = document.createElement("img");
    }

    function c(e, t, a, i, o) {
        let s = document.createElement("img");
        s.classList.add("decorations", t), s.setAttribute("src", "./img/arrow.png");
        let n = document.createElement("img");
        n.classList.add("decorations", a), n.setAttribute("src", "./img/arrow.png");
        let r = document.createElement("div");
        r.classList.add("heading-container");
        let l = document.createElement("div");
        l.classList.add("heading");
        let c = document.createElement("h1");
        return c.textContent = e, o && "" != o && r.classList.add(o), i && "" != i && l.classList.add(i), l.appendChild(c), r.appendChild(s), r.appendChild(n), r.appendChild(l), r
    }

    function d(e, t, a, i, o) {
        if (function(e) {
                e.textContent = ""
            }(t), function(e, t, a) {
                if ("home" == e) var i = c(a.title, a.beeClass1, a.beeClass2);
                else i = "contact" == e ? c(a.title, a.beeClass1, a.beeClass2, "contact-heading", "contact-container") : "menu" == e ? c(a.title, a.beeClass1, a.beeClass2, "menu-heading", "menu-container") : l(a.title);
                t.appendChild(i)
            }(e, t, i), a.forEach((a => {
                if ("home" == e) var i = [{
                    outer: "review-outer",
                    inner: "review-inner"
                }, {
                    el: "p",
                    text: a.text,
                    class: "review"
                }, {
                    el: "p",
                    text: a.name,
                    class: "customer"
                }];
                else if ("menu" == e) {
                    if (!a.item) {
                        var o = l(a.subtitle, "sub-heading", "sub-container");
                        return void t.appendChild(o)
                    }
                    i = function(e, t, a, i, o) {
                        return [{
                            outer: "menu-outer",
                            inner: "menu-inner"
                        }, {
                            el: "h3",
                            text: e,
                            class: "item-name"
                        }, {
                            el: "   ",
                            text: t,
                            class: "item-description"
                        }, {
                            el: "p",
                            text: a,
                            class: "item-price"
                        }, {
                            el: "img",
                            text: o,
                            class: "item-pic",
                            source: i
                        }]
                    }(a.name, a.description, a.price, a.pic, a.alt)
                } else i = function(e, t, a, i, o, s) {
                    return [{
                        outer: "contact-outer",
                        inner: "contact-inner"
                    }, {
                        el: "h3",
                        text: e,
                        class: "person"
                    }, {
                        el: "p",
                        text: t,
                        class: "position"
                    }, {
                        el: "p",
                        text: a,
                        class: "phone"
                    }, {
                        el: "p",
                        text: i,
                        class: "email"
                    }, {
                        el: "img",
                        text: s,
                        class: "contact-pic",
                        source: o
                    }]
                }(a.name, a.position, a.phone, a.email, a.pic, a.alt);
                let s = r(i);
                t.appendChild(s)
            })), "home" == e) {
            ! function(e, t) {
                (function(e) {
                    return [
                   
                    ]
                })(t).forEach((t => {
                    let a = r(t);
                    e.appendChild(a)
                }))
            }(t, o);
            let e = document.createElement("img");
            e.classList.add("decorations", "hive"), e.setAttribute("src", "./img/captain-america.png"), t.appendChild(e)
        }
        return !0
    }
    let m = ["home", "menu", "contact"],
        u = m[0],
        p = document.getElementById("content");
    d(u, p, i, o, t), m.forEach((r => {
        var l = document.getElementById(r);
        l.addEventListener("click", (() => {
            u = function(e, t) {
                let a = document.getElementById(`cover${e}`),
                    i = document.getElementById(`cover${t}`);
                return a.classList.add("hidden"), i.classList.remove("hidden"), t
            }(u, l.id), "home" == l.id ? d(l.id, p, i, o, t) : "menu" == l.id ? d(l.id, p, a, s) : d(l.id, p, e, n)
        }))
    }))
})();