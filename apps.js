'use strict'

function getFlour(){

  let formDough = document.getElementById("formDough");
  let flour = document.getElementById("flour").value;

  let water = flour * 0.70;
  let salt = flour * 0.02;
  let yeast = flour * 0.02;

  if(flour > 2000){
    console.log('¿Tanta masa vas a hacer?');
  }

  var div = document.getElementById('app');

  div.innerHTML += `
  <p class="big">Si usas <strong> ${flour} grs</strong> de harina necesitas:</p>
  <p><strong>${water}cc</strong> de agua</p>
  <p><strong>${salt}grs</strong> de sal</p>
  <p><strong>${yeast}grs</strong> de levadura</p>
  `;
  
  console.log('Si usas ' + flour + 'grs de harina necesitas:');
  console.log('Agua: ' + water + 'cc de agua');
  console.log('Sal: ' + salt + 'grs de sal');
  console.log('Levadura: ' + yeast + 'grs de levadura');

  formDough.remove();

}

// let flour = document.getElementById("flour").value;
// 
// function calculoMasa() {
//   const water = flour * 0.70;
//   const salt = flour * 0.02;
//   const yeast = flour * 0.02;
  
//   console.log('Agua: ' + water + 'cc de agua');
//   console.log('Sal: ' + salt + 'grs de sal');
//   console.log('Levadura: ' + yeast + 'grs de levadura');
// }

// calculoMasa();

// console.log('Si usas ' + flour + 'grs de harina necesitas:');

