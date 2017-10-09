<script>
  $(document).ready(function() {
    //Preloader
      $(window).load(function() {
        preloaderFadeOutTime = 1;
          function hidePreloader() {
          var preloader = $('.spinner');
        preloader.fadeOut(preloaderFadeOutTime);
      }
    hidePreloader();
    });
  });
</script>
