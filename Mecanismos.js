   
   var playerYouTube1;
   function onYouTubeIframeAPIReady() {
      playerYouTube1 = new YT.Player('YouTube1', {
         events: {
         }
      });
   }
   
   function displaylightbox(url, options)
   {
      options.items = { src: url };
      options.type = 'iframe';
      $.magnificPopup.open(options);
   }
   
   $(document).ready(function()
   {
      $("#Accordion1").accordion(
      {
         event: 'click',
         animate: 'easeOutCubic',
         collapsible: true,
         header: 'h3',
         heightStyle: 'content'
      });
      $("#Accordion1").data("height", $("#Accordion1").outerWidth());
      $(window).resize(function()
      {
         if ($("#Accordion1").data("height") != $("#Accordion1").outerWidth())
         {
            $("#Accordion1").accordion("refresh");
            $("#Accordion1").data("height", $("#Accordion1").outerWidth());
         }
      });
      $("#wb_ResponsiveMenu1").affix({offset:{top: $("#wb_ResponsiveMenu1").offset().top}});
   });
