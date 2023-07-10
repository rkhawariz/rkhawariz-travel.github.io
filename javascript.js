//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

//transaksi
document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan pengiriman default
  
    // Mengambil nilai dari inputan form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var destination1 = document.getElementById("destination1").value;
    var date = document.getElementById("date").value;
  
    // Proses data transaksi (simulasi contoh)
    var message = "Hello, " + name + "! dengan email " + email + " destinasi " + destination1 + " pada tanggal " + date +" has been processed.";
  
    // Menampilkan pesan hasil proses transaksi
    alert(message);
  });
  