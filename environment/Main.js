
export default class Main{

    	static render(html, component){
    		 return component.innerHTML = html;
    	}
    	
    	static reRender(html, component){
          return component.innerHTML += html;
    	}

       static appId(){
        const id = "app";
       	return document.getElementById(id);
       }

      static mainNavId(){
        const id = "mainNav";
        return document.getElementById(id);
      }

       static profileId(){
        const id = "profile";
       	return document.getElementById(id);
     }

     static companyId(){
        const id = "profile";
        return document.getElementById(id);
     }

     static educationId(){
        const id = "profile";
        return document.getElementById(id);
     }
}

