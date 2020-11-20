function setHarga(set) {
    nilai = document.getElementById("nilai").value
    if(set == "dolar_us"){
        var hasil = nilai * 9915
    } else if(set == "dolar_sg"){
        var hasil = nilai * 13472
    } else if(set == "ringgit"){
        var hasil = nilai * 874
    } else if(set == "yen"){
        var hasil = nilai * 120
    } else if(set == "euro"){
        var hasil = nilai * 15888
    } else if(set == "riyal"){
        var hasil = nilai * 3592 
    }
    document.getElementById("hasil").value = hasil
}