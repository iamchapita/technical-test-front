// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2022/10/26
@version: 0.1.0
*/

function loadData(archive) {
    // Obteniendo el nombre del archivo para foto de perfil
    var profilePicName = archive[0]['instructor']['imagen'];
    // Estableciendo la foto de perfil
    var imgTag = document.getElementsByClassName('profilePicture');
    imgTag = imgTag[0];
    imgTag.setAttribute('src', '/resources/profile-pics/'+profilePicName);

    // Insertando foto de perfil, nombre y correo de los demas perfiles
    var dropdown = document.getElementById('dropdownMenu');
    
    // Instaurando las opciones de perfiles
    for (var i = 0; i < archive.length; i++){
        
        var name = (archive[i]['instructor']['nombre']);
        var email = (archive[i]['instructor']['correo']);
        var image = (archive[i]['instructor']['imagen']);
        
        dropdown.innerHTML += "<div class='profileList'><li class='option'> <img src='/resources/profile-pics/"+image+"'class='profilePicture'><a class='dropdown-item' href='#'>"+name+"<br>"+email+"</a></li></div>"
    }
    
    dropdown.innerHTML += "<div class='profileList'><li class='option'> <span class='material-symbols-outlined' id='personAdd'>person_add</span> <a class='dropdown-item' href='#'>Agregar Instructor</a></li></div>"
    
    dropdown.innerHTML += "<div class='profileList'><li class='option'><a class='dropdown-item'>Privacy Police • Terms of Service</a></li></div>"
    
    // Cargando los cursos del perfil seleccionado

    console.log(archive[0]['clases']);

    var row = document.getElementById('row');

    for (var i = 0; i < archive[0]['clases'].length; i++){

        var name = archive[0]['clases'][i]['nombreClase'];
        var section = archive[0]['clases'][i]['seccion'];
        
        row.innerHTML += "<div class='col'><div class='card'><a href='#'><img src='/resources/pictures/na_january_35.jpg' class='card-img-top' alt='...'><div class='card-img-overlay'><h3 class='card-title'>"+name+"</h3><h5>"+section+"</h5></div></a><div class='card-body'><p class='card-text'></p><div class='footer'><div class='container'><span class='material-symbols-outlined'>folder</span><span class='material-symbols-outlined'>trending_up</span></div></div></div></div></div>"

    }


}
