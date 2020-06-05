new Vue({
  el: '#vue-app',
  data:
  {
    name: 'Users',
    job: 'Software',
    count: 0,
    website: "https://vuejs.org/v2/guide/"
  },
  methods: {
    greet: function()
    {
      return "Welcome" + " " + this.name + " This is my first application in Vue.js :" + " follow the link below to read view documentation";
    },
    getlikes : function ()
    {
      this.count++;
    },
    click : function()
    {
      alert("you clicked");
    }
  }
});
