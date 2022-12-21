<script>
    $("#address").suggestions({
      token: "41688797003f58447658efa9561167f4eb4b9693",
      type: "ADDRESS",
      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect: function (suggestion) {
        console.log(suggestion);
      }
    });
  </script>
