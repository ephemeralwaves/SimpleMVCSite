
  var model = {
    button: [
      {
        text: "Purr <3 I have been clicked!",
        imgSrc: "./img/button.png"
      }
    ]
  };

 var controller = {
    init: function() {
      //tells our view to initialize
      view.init();
    },
    getButton: function() {
      return model.button;
    }
  };

  var view = {

    init: function() {
      //store pointers to DOM elements for easy access
      this.buttonElem = document.getElementById('button');
      this.buttonImg = document.getElementById('button-img');
      this.render();
    },

    render: function() {

      var button = controller.getButton();
      this.buttonImg.src = button[0].imgSrc;

      this.buttonImg.addEventListener( 'click', function() {
        document.getElementById("button-text").textContent = button[0].text;
      });

    }
  };

// make it go!
controller.init();
