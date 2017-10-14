/**
 * Created by admin on 2017/10/13.
 */

$(function(){
    var Aside = {
        $switchBtn: $("#J_toggleSide"),
        init: function () {
            var $btn = this.$switchBtn,
                $aside = $(".page_sd"),
                $main = $("#blog");

            $btn.on("click", function(){
                $aside.toggleClass("active");
                $main.toggleClass("active");

                $btn.toggleClass("close");
            });

            $btn.on("mouseover", function () {
                $btn.addClass("hover");
            }).on("mouseout", function () {
                $btn.removeClass("hover");
            })
        },

        show: function(){

        },
        hide: function(){}
    };

    var BackTop = {
        speed: 2000,
        $btn: $(".btn-top"),
        $body: $(document.body),
        setVisible: function(){
            var $btn = this.$btn;
            this.$body.scrollTop() > 300 ?  $btn.addClass("active") : $btn.removeClass("active");
        },

        listen: function(){
            var $btn = this.$btn,
                $body = this.$body;

            this.setVisible();
            var self = this;

            $(document).on("scroll", function () {
                self.setVisible();
            });

            // todo debounce
            $btn.on("click", function () {
                $body.animate({
                    scrollTop: 0,
                    speed: this.speed
                })
            }.bind(this))
        }
    };

    var App = {
        init: function(){
            BackTop.listen();
            Aside.init();
        }
    };

    App.init();


});



