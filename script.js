/*  
    Auteur : AWADEME FINANFA Ronaldo
    Email: awademeronaldoo@gmail.com
*/


$(document).ready(function(){
    
    $("#un").click(function(){
        document.form.display.value +=1;
    });
    $("#deux").click(function(){
        document.form.display.value +=2;
    });
    $("#trois").click(function(){
        document.form.display.value +=3;
    });
    $("#quatre").click(function(){
        document.form.display.value +=4;
    });
    $("#cinq").click(function(){
        document.form.display.value +=5;
    });
    $("#six").click(function(){
        document.form.display.value +=6;
    });
    $("#sept").click(function(){
        document.form.display.value +=7;
    });
    $("#huit").click(function(){
        document.form.display.value +=8;
    });
    $("#neuf").click(function(){
        document.form.display.value +=9;
    });
    $("#zero").click(function(){
        document.form.display.value +=0;
    });
    $("#supprimer").click(function(){
        document.form.display.value = '';
    });
    $("#division").click(function(){
        document.form.display.value +='/';
    });
    $("#multiplication").click(function(){
        document.form.display.value +='*';
    });
    $("#soustraction").click(function(){
        document.form.display.value +='-';
    });
    $("#addition").click(function(){
        document.form.display.value +='+';
    });
    $("#virgule").click(function(){
        document.form.display.value +='.';
    });
    $("#resultat").click(function(){
        document.form.display.value = 
        eval(document.form.display.value);
    });







});