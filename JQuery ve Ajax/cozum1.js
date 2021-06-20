////////// görev 1 //////////
$(document).ready(function () {
    $("#gorev1 > button").click(function () {
        var basliklar = Array.from($("h2:lt(3)"));
        basliklar.forEach(baslik => {
            $("#gorev1 > ul").append("<li>" + baslik.textContent + "</li>");
      });
    });
  });

////////// görev 2 //////////
$("#gorev2 > button").click(function () {
    let input1 = $("#gorev2 :input");
    let basliklar = $("h2").length;
    input1.val(basliklar);
})

////////// görev 3 //////////
$("#gorev3 > button").click(function () {
    let input3 = $("#gorev3 :input");
    let baslik = $("h1").text();
    input3.val(baslik);
})

////////// görev 4 //////////
$("#gorev4 > button").click(function () {
    let karakterSayisi = $("article > div > p");
    let baslikEkle = $("article > div > h2");

    const p_len_arr = [];
    karakterSayisi.each(function (index, element) {
        let p_len = 0
        let metin = $(this).text().replaceAll("\s", "");
        for (let line = 0; line < (metin.split("\n")).length; line++) {
            p_len += metin.split("\n")[line].trimStart().length + 2
        }
        p_len_arr.push(p_len)
    })

    baslikEkle.each(function (index, element) {
        $(this).append(" (" + (p_len_arr[index]) + " karakter)")

    })
})

////////// görev 5 //////////
$("#gorev5 > button").click(function () {
    let basliklar_h2 = $("article > div > h2")
    let baslik_h1 = $("h1")
    baslik_h1.css("color", "red")

    basliklar_h2.each(function (index, element) { //çiftse turuncu, tekse mavi
        if (index % 2 === 0) {
            $(this).css("color", "orange")
        } else {
            $(this).css("color", "blue")
        }
    })
})

////////// görev 6 //////////
$("#gorev6 > button").click(function (index, element) {
    let section = $("article > div").first()
    section.mouseover(function () {
        $(this).fadeOut(300);
    })

})

////////// görev 7 //////////
$("#gorev7 > button").click(function () {
    let h2 = $("article > div > h2:contains(can)")
    let ul = $("#gorev7 > ul");
    h2.each(function () {
        ul.append("<li>" + $(this).text() + "</li>")
    })
})

////////// görev 8 //////////
$("#gorev8 > button").click(function (index, element) {
    $("article > h1").after("<div><h2>Lorem</h2><p id='lorem'></p></div>")

    $.ajax({
        url: "lorem.html",
        type: "get",
        success: function (data) {
            $("lorem").prepend(data)
        }
    })
})

////////// görev 9 //////////
$(document).ready(function (index, element) {
    let input9 = $("#gorev9 > input");
    let baslik_h2 = $("h2")

    baslik_h2.each(function () {
        $(this).mouseover(function () {
            input9.val($(this).text())
        })
    })
})

////////// görev 10 //////////
$("#gorev10 > button").click(function (index, element) {
    $("body").prepend("<img style='position: fixed; bottom: 8px; right: 16px' width='100' src='check.png' alt='check'/>")
})
