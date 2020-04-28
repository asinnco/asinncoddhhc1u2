   
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
   });
