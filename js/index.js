// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2022/10/26
@version: 0.1.0
*/

function loadData(archive) {
    // Obteniendo el nombre del archivo
    var profilePicName = archive[0]['instructor']['imagen'];
    // Estableciendo el luga a insertar
    var imgTag = document.getElementById('profilePicture')
    imgTag.setAttribute('src', '/resources/profile-pics/'+profilePicName);
}
