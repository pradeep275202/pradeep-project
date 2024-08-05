document.getElementById("openFormButton").onclick = function() {
          document.getElementById("popupForm").style.display = "block";
      };
      
      document.getElementById("closeFormButton").onclick = function() {
          document.getElementById("popupForm").style.display = "none";
      };
      
      window.onclick = function(event) {
          if (event.target == document.getElementById("popupForm")) {
              document.getElementById("popupForm").style.display = "none";
          }
      };
      