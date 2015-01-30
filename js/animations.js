
$(document).ready(function(){
  
    $('.tweet-actions').hide();
      $('.stats').hide();
      $('.reply').hide();
         
       


     $('.tweet').on('mouseenter',function(){
       $('.tweet-actions', this).show();  

     }); 

      
     $('.content').on('mouseleave',function(){
        $('.tweet-actions').hide();

      }); 
  
    $('.tweet').on('click',function(){
       $('.stats', this).show();
       $('.reply', this).show();


    });

  
     $('.content').on('mouseleave',function(){
        $('.stats').hide();
        $('.reply').hide();

      }); 
  
  
 
  //step 1
  $('#tweet-controls').hide();
  //Step 2
   $('.tweet-compose').on('focus', function(){
    $('#tweet-controls').show();
    $('.tweet-compose').css('height', '5em')
    
  
  });
  
  $('.tweet-compose').on('mouseleave', function(){
    $('.tweet-compose').css('height','2.5em');
  
   });
  
  $('.tweet-compose').on('keyup', function(){
    var count = 140 - $(this).val().length      
      
     if(count >=0) {
           $('#char-count').text(count);

       if(count <= 10) {
        $('#char-count').css('color', 'red');
      }
       else{
         $('#char-count').css('color', '#999')
        
         
       }
       
     }
    
    else{
          $('.button').attr('disabled','disabled')
      }
        
  });
  
  $('#tweet-submit').on('click', function(){
    var theTweet = '<div>' + $('.tweet-compose').val() + '</div>' ; 
    var theName =$('#theName').text();
    $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">' + theName + '</strong> <span class="username">@brianstock</span><p class="tweet-text"><p>' + theTweet + '</p><div class="tweet-actions"><ul><li> <span class="icon action-reply"></span> Reply </li> <li> <span class="icon action-retweet"> </span> Retweet</li> <li> <span class="icon action-favorite"></span> Favorite</li> <li> <span class="icon action-more"> </span> More </li> </ul></div><div class="stats"><div class="retweets"> <p class="num-retweets">30</p><p>RETWEETS</p> </div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @brianstock"/></textarea></div></div></div>');
    $('.tweet-compose').val('');

    
      
  
  
  });
  
  

  
  
  

















});