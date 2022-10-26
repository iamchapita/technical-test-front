// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2022/10/26
@version: 0.1.0
*/

function loadProfilePicture(archive, idProfile=0) {
	// Obteniendo el nombre del archivo para foto de perfil
	var profilePicName = archive[idProfile]["instructor"]["imagen"];
	// Estableciendo la foto de perfil
	var imgTag = document.getElementsByClassName("profilePicture");
	imgTag = imgTag[0];
	imgTag.setAttribute("src", "/resources/profile-pics/" + profilePicName);

	// Insertando foto de perfil, nombre y correo de los demas perfiles
	var dropdown = document.getElementById("dropdownMenu");
}

function loadCourses(archive, idProfile=0) {
	// Cargando los cursos del perfil seleccionado
	var row = document.getElementById("row");
    var child = row.lastElementChild;

    while(child){
        row.removeChild(child);
        child = row.lastElementChild;
    }

	for (var i = 0; i < archive[idProfile]["clases"].length; i++) {
		var name = archive[idProfile]["clases"][i]["nombreClase"];
		var section = archive[idProfile]["clases"][i]["seccion"];

		row.innerHTML +=
			"<div class='col'><div class='card'><a href='#'><img src='/resources/pictures/na_january_35.jpg' class='card-img-top' alt='...'><div class='card-img-overlay'><h3 class='card-title'>" +
			name +
			"</h3><h5>" +
			section +
			"</h5></div></a><div class='card-body'><p class='card-text'></p><div class='footer'><div class='container'><span class='material-symbols-outlined'>folder</span><span class='material-symbols-outlined'>trending_up</span></div></div></div></div></div>";
	}
}

function loadProfileList(archive) {
	var dropdown = document.getElementById("dropdownMenu");
	// Instaurando las opciones de perfiles
	for (var i = 0; i < archive.length; i++) {
		var name = archive[i]["instructor"]["nombre"];
		var email = archive[i]["instructor"]["correo"];
		var image = archive[i]["instructor"]["imagen"];

		dropdown.innerHTML +=
			"<div class='profileList'><li class='option'> <img src='/resources/profile-pics/" +
			image +
			"'class='profilePicture'><a class='dropdown-item' href='#' onclick='loadProfilePicture(classroom, "+i+"); loadCourses(classroom, "+i+");'>" +
			name +
			"<br>" +
			email +
			"</a></li></div>";
	}

    // var dropdownItems = document.getElementsByClassName('dropdown-item');

    // for (var i = 0; i < dropdownItems.length; i++) {
    //     dropdownItems[i].addEventListener("click", function () {
    //         loadProfilePicture(archive, i);
    //         loadCourses(archive, i);
    //     });
    // }

	dropdown.innerHTML +=
		"<div class='noProfileList'><li class='option'> <span class='material-symbols-outlined' id='personAdd'>person_add</span> <a class='dropdown-item' href='#'>Agregar Instructor</a></li></div>";

	dropdown.innerHTML +=
		"<div class='noProfileList'><li class='option'><a class='dropdown-item'>Privacy Police • Terms of Service</a></li></div>";
}