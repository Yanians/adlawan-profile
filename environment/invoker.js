
export default class invoker {

  static showProfile(){
  
$b('#profile').show();
$b('#education').hide();
$b('#company').hide();
$b('#experience').hide();  
  }

static showCompany(){
 
$b('#profile').hide();
$b('#education').hide();
$b('#company').show();
$b('#experience').hide(); 
}

static showEducation(){
       
$b('#profile').hide();
$b('#education').show();
$b('#company').hide();
$b('#experience').hide(); 
         
      
   }

static showExperience(){
       
$b('#profile').hide();
$b('#education').hide();
$b('#company').hide();
$b('#experience').show(); 
         
      
   }

   static showMainNav(){

    $b('#mainNav').show();
   }

}

