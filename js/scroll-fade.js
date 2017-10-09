// fade out
$(window).scroll(function() {
    if ($(this).scrollTop()>50)
     {
        $('.image2').fadeOut("slow");
        this.stop();

     }
 });
 // $(window).scroll(function() {
 //     if ($(this).scrollTop()>150)
 //      {
 //         $('majoroption').fadeOut("slow");
 //      }
 //  });
 //  $(window).scroll(function() {
 //      if ($(this).scrollTop()>200)
 //       {
 //          $('major').fadeOut("slow");
 //       }
 //   });
 //   $(window).scroll(function() {
 //       if ($(this).scrollTop()>250)
 //        {
 //           $('school').fadeOut("slow");
 //        }
 //    });
 //    $(window).scroll(function() {
 //        if ($(this).scrollTop()>300)
 //         {
 //            $('name').fadeOut("slow");
 //         }
 //     });
 //     $(window).scroll(function() {
 //         if ($(this).scrollTop()>350)
 //          {
 //             $('.image1').fadeOut("slow");
 //          }
 //      });


//fade in
$(window).scroll(function() {
    if ($(this).scrollTop()<50)
     {
        $('.image2').fadeIn("slow");
     }
 });
 // $(window).scroll(function() {
//      if ($(this).scrollTop()<300)
//       {
//          $('majoroption').fadeIn("slow");
//       }
//   });
//   $(window).scroll(function() {
//       if ($(this).scrollTop()>0)
//        {
//           $('major').fadeIn("slow");
//        }
//    });
//    $(window).scroll(function() {
//        if ($(this).scrollTop()>0)
//         {
//            $('school').fadeIn("slow");
//         }
//     });
//     $(window).scroll(function() {
//         if ($(this).scrollTop()>0)
//          {
//             $('name').fadeIn("slow");
//          }
//      });
//      $(window).scroll(function() {
//          if ($(this).scrollTop()>0)
//           {
//              $('.image1').fadeIn("slow");
//           }
//       });
