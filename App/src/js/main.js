// import npm modules
//import Vue from 'vue';
window.Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

//new Vue({
//  el: "#",
//  data: {
//    
//  }
//})