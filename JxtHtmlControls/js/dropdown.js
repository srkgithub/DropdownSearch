//assign the json data into this through api or web request
var dataLocation = [
    { ID: 1, Name: "Chicago" },
    { ID: 2, Name: "New York" },
    { ID: 3, Name: "Virginia" },
    { ID: 4, Name: "Kansas" },
    { ID: 5, Name: "Maryland" },
    { ID: 6, Name: "Michigan" },
    { ID: 7, Name: "Florida" },
    { ID: 8, Name: "Indiana" },
    { ID: 9, Name: "New Mexico" }
];
var dataDepartment = [
    { ID: 1, Name: "Agriculture" },
    { ID: 2, Name: "Commerce" },
    { ID: 3, Name: "Defense" },
    { ID: 4, Name: "Education" },
    { ID: 5, Name: "Energy" },
    { ID: 6, Name: "Health Services" },
    { ID: 7, Name: "Housing Development" },
    { ID: 8, Name: "Urban Development" },
    { ID: 9, Name: "Information Technology" }
];




$(document).ready(function () {
    $.fn.GetData = function (listName) {
        if (listName == "dataDepartment") return dataDepartment;
        if (listName == "dataLocation") return dataLocation;
        var EmptyData = [{ ID: 0, Name: "Data Error" }];
        return EmptyData;
    }

    var ctrlName = "";
    var boxColor = "#b3e3f4";
    var barColor = "#9a89f0";

    $(".dropdownindex").keyup(function (event) {
        ctrlName = "#" + $(this).attr("id");
        var dataSelect = $.fn.GetData($(this).attr("dataselect"));
        if (event.which == 9 || event.which == 16) return;
        var keymoveindex = 1;
        var filterText = $(this).val();
        $(this).next().find("a.jxtDropDownText").remove();
        $.each(dataSelect, function (index, item) {
            var link = $(ctrlName).next();
            if (item.Name.toUpperCase().indexOf(filterText.toUpperCase()) >= 0) {
                link.append("<a tabindex=\"-1\" href=\"#\" class=\"jxtDropDownText form-control\"  id=\"" + item.ID + "\"> " + item.Name + "</a > ");
            }
        });
        var ti = $(this).next().find("a.jxtDropDownText").length;
        if (ti == 0) {
            var link = $(this).next();
            link.append("<a tabindex=\"-1\" href=\"#\" class=\"jxtDropDownText form-control\">No Results Found</a>");
        }
        $(this).next().show();
        $(this).next().css("background-color", boxColor);
        $(this).next().find("a.jxtDropDownText").click(function () {
            if (ti > 0) {
                $(ctrlName).val($(this).html());
                $(ctrlName).next().hide();
            }
        });
        if ($(this).val().trim().length <= 0) {
            $(ctrlName).next().hide();
        }

        if (event.which == 40) {
         //   $(ctrlName).next().find("a.jxtDropDownText:first").css("background-color", barColor);
            $(ctrlName).next().find("a.jxtDropDownText:first").focus();
        }

        $(this).next().find("a.jxtDropDownText").keyup(function (event) {
            if (event.which == 40) {
           //     $(this).next().css("background-color", barColor);
           //     $(this).css("background-color", boxColor);
                $(this).next().focus();
            }
            if (event.which == 38) {
                if ($(this).index() == 0) {
           //         $(this).css("background-color", boxColor);
                    $(this).parent().prev().focus();
                } else {
           //         $(this).prev().css("background-color", barColor);
            //        $(this).css("background-color", boxColor);
                    $(this).prev().focus();
                }
            }
        });
    });
});


