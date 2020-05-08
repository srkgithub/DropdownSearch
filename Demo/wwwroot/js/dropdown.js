//assign the json data into this through api or web request
var dataSelect = [
    { ID: 1, Name: "Apple" },
    { ID: 2, Name: "Mango" },
    { ID: 3, Name: "Orange" },
    { ID: 4, Name: "Banana" },
    { ID: 5, Name: "Grape" },
    { ID: 6, Name: "WaterMelon" },
];



$(document).ready(function () {
    var selectedText = "";
    var keymoveindex = 1;
    $("#searchBox").keyup(function (event) {
        var filterText = $(this).val();
        $("a.jxtDropDownText").remove();
        $.each(dataSelect, function (index, item) {
            var link = $("div#searchFrame");
            if (item.Name.toUpperCase().indexOf(filterText.toUpperCase()) >= 0) {
                link.append("<a tabindex=\"-1\" href=\"#\" class=\"jxtDropDownText\">" + item.Name + "</a>");
            }
        });
        var ti = $("a.jxtDropDownText").length;
        if (ti == 0) {
            var link = $("div#searchFrame");
            link.append("<a tabindex=\"-1\" href=\"#\" class=\"jxtDropDownText\">No Results Found</a>");
            selectedText = "";
        }
        $("#searchFrame").show();
        $("#searchFrame").css("background-color", "#ededed");
        $("#searchFrame").css("border-color", "#000000");
        $("a.jxtDropDownText").hover(function () {
            $(this).css("background-color", "#cdcdef");
        },
            function () {
                $(this).css("background-color", "#ededed");
            }
        );
        $("a.jxtDropDownText").click(function () {
            if (ti > 0) {
                $("#searchBox").val($(this).html());
                $("div#searchFrame").hide();
                selectedText = $(this).html();
            }
        });
        if ($(this).val().trim().length <= 0) {
            $("div#searchFrame").hide();
        }

        if (event.which == 40) {
            if ($(this).val().trim().length > 0) {
                var ddt = $("a.jxtDropDownText:nth-child(" + keymoveindex + ")");
                ddt.css("background-color", "#cdcdef");
                ddt.focus();
            }
        }

        $("a.jxtDropDownText").keyup(function (event) {
            if (event.which == 40) {
                if (keymoveindex < $("a.jxtDropDownText").length) {
                    keymoveindex++;
                    var ddt = $("a.jxtDropDownText:nth-child(" + keymoveindex + ")");
                    ddt.css("background-color", "#cdcdef");
                    ddt.focus();
                }
            }
            if (event.which == 38) {
                if (keymoveindex == 1) {
                    $("#searchBox").focus();
                }
                if (keymoveindex > 1) {
                    keymoveindex--;
                    var ddt = $("a.jxtDropDownText:nth-child(" + keymoveindex + ")");
                    ddt.css("background-color", "#cdcdef");
                    ddt.focus();
                }
               
            }
        });
        $("a.jxtDropDownText").focusout(function () {
            $(this).css("background-color", "#ededed");
        });
        
    });
});

