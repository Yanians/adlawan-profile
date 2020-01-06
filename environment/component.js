
import Main from '../environment/Main.js'
import htmlContent from '../environment/htmlContent.js'
import invoker from '../environment/invoker.js'

export default class Component extends Main {

 constructor(){
          super();
        }
 
     dataArray(){

           this.profileData = [{
                 proImage:{
                  image:'../image/adlawan.jpg'
                 },

                 bio:{ full_name:'Brian C. Adlawan',
                      status:'Single',
                         age:'30',
                     present_address:'P#12 Saint John Bucana Davao City',
                     contact:'09979162314',
                       email:'yan19891989000@gmail.com',
                  year_birth:'April 17,1989',
                      height:'55 lbs',
          provincial_Address:'Forest Drive Gate 2 Block 4 lot 6 Bislig, Sur Del Sur',
              place_of_birth:'Caguyao Bislig Sur Del Sur'},
                       

                       education:{
                              elementary:{
                          schlName:'San Vicente Eleme School',
                       schlAddress:'San Vicente 1, Bislig Sur Del Sur',
                       yrGraduated:'2004-2005' },

                              highSchool:{
                                schlName:'Alegria Nat High School',
                              schlAddress:'Alegria Sur Del Norte',
                              yrGraduated:'2007-2008'
                              },

                              vocational:{
                                 schlAddress:'Matina, road maa davao city',
                                    schlName:'Ama computer learning center',
                                      course:'advance programming / design & networking',
                                 yrGraduated:'2008-2009'
                              },

                              college:{
                                 schlName:'AMA Computer College Davao Campus',
                                 schlAddress:'123 Gen Malvar st., Davao City',
                                 yrGraduated:'2018-2019',
                                 course:'bachelor of science in information technology'
                              } 
                           },     

                           company:{
                                 esscor:{
                                   name:'Electronic security system corporation',
                                address:'Suite 307 Legaspi Towers 200, Paseo De Roxas St., Legaspi Village makati city, Philippines',
                               position:'systems engineer',
                                   year:'Sept 14, 2018 to July 30 2019'
                            },

                                 daltans:{
                                    name:'daltan\'s it solution',
                                 address:'kilometer 5, anito bldg door #6 Buhangin Davao City',
                                position:'it field technician',
                                    year:'June 2013 to March 2014'
                            },
                      },
                            experience:{
                                     one:'Accurately estimate the time, effort & resources needed to effect system upgrades.',
                                     two:'Carrying out standard, complex and integrated software modification and upgrades,',
                                   three:'Generating and reviewing systems downtime reports that give an accurate picture.',
                                    four:'Providing complex pre-sale technical support to the companys Marketing department.',
                                    five:'Installation of security systems including but not limited to access control, CCTV surveillance, alarms, fire suppression systems and its associated work.',
                                     six:'Providing support to other departments need Furnish request of necessary materials for project.',
                                   seven:'Coordinating the activity of different teams and engineering staff.',
                                   eight:'Creating a business case / topology diagram to purchase companys services.',
                                    nine:'Involved in the resolution of system, hardware, software & infrastructure problems.',
                                     ten:'Providing network systems engineering support for different IT projects',
                                  eleven:'Attending face to face meetings with clients to discuss their exact requirements',
                                  twelve:'Ensuring that services are delivered in accordance with established objectives',
                                thirteen:'Perform project on-site system configuration and programming',
                                fourteen:'Perform testing, commissioning, and project closure.',
                                 fifteen:'Perform training and turn-over of onsite projects.'
                          }     


                       }];

    }                      

 landingPage(){ 
        let html = ` <!-- this is the play area -->
              &nbsp; 
                    <div style="margin-left:2%;margin-right:2%" class="row border-effectDiv">

                         <div class="col s12 m4 l4 border-effectDiv">
                                <ul>
                                  <li class="center">
                                     <div id="mainNav"></div>
                                  </li>
                                     <li class="center">
                                         <div class="fixed-action-left-btn">
                                                <a class="btn-floating btn-small large red">
                                                  <i class="material-icons pulse">menu</i>
                                                </a>
                                                <ul>   
                                                  <li><a href="#" id="showEd"   class="btn-floating green pulse"><i class="material-icons">account_balance</i></a></li>
                                                  <li><a href="#" id="showComp" class="btn-floating yellow darken-1 pulse"><i class="material-icons">style</i></a></li>
                                                  <li><a href="#" id="showProf" class="btn-floating red pulse"><i class="material-icons ">fingerprint</i></a></li>
                                                  <li><a href="#" id="showEx" class="btn-floating blue"><i class="material-icons pulse">compare</i></a></li>
                                                </ul>
                                         </div>
                                       </li>
                                </ul> 
                         </div>

                           <div class="col s12 m8 l8 border-effectDiv">
                              <div id="profile"></div>
                              <div id="education"></div>
                              <div id="company"></div>
                              <div id="experience"></div>
                           </div>   
                    </div>`  
                    ;
        Main.render(`${html}`,Main.appId());
       component.mainNavigation();
       component.profile();
        document.getElementById('showComp').addEventListener('click', function(){
                                  component.company();
                                  invoker.showCompany();
                         });
        document.getElementById('showProf').addEventListener('click', function(){
                                  component.profile();
                                  invoker.showProfile();
                         });
        document.getElementById('showEd').addEventListener('click', function(){
                                  component.education();
                                  invoker.showEducation();
                         });
        document.getElementById('showEx').addEventListener('click', function(){
                                  component.experience();
                                  invoker.showExperience();
               });
}

  mainNavigation(){
                             this.dataArray();
                             let html = `
                                      <ul>
                                       <li class="center">
                                        `;
                                              let r = this.profileData;
                                              let count = 0;
                                             for(let i = (r.length-1);i>=0;i--){
                                                  if(count++ === r[i].proImage)
                                                    break;     
                                                     html +=`
                                                      <img class="resize-image" src="${r[i].proImage.image}"/>
                                                      </li>`;
                                          }   
                                        
             Main.render(`${html}`,document.getElementById('mainNav'));
             invoker.showMainNav();
}     

   profile(){
                 this.dataArray();
                     var r = this.profileData;
                     let count = 0;
                     let htmlform = ``;
                        for(let i = (r.length-1);i>=0;i--){

                         if(count++ === r[i].bio)

                      break;
                         
         htmlform += ` <h3 class="white-text text-h3">PROFILE</h3>
                  <ul class="center white lighten-5 border-effectDiv hoverable">
                     
                               <li class="row border-effectDiv">
                                 <div class="title col s12 m6 l6"><h5>Name</h5>${r[i].bio.full_name}</div>
                                 <div class="title col s12 m6 l6"><h5>Age</h5>${r[i].bio.age}</div>
                              </li>
                         
                             <li class="row border-effectDiv">
                               <div class="title col s12 m6 l6"><h5>Status</h5>${r[i].bio.status}</div>
                               <div class="title col s12 m6 l6"><h5>Height</h5>${r[i].bio.height}</div>
                             </li>  

                             <li class="row border-effectDiv">
                               <div class="title col s12 m6 l6"><h5>Contact</h5>${r[i].bio.contact}</div>
                               <div class="title col s12 m6 l6"><h5>Birt</h5>${r[i].bio.year_birth}</div>
                             </li>  

                              <li class="row border-effectDiv">
                               <div class="title col s12 m12 l6"><h5>Address</h5>${r[i].bio.present_address}</div>
                               <div class="title col s12 m12 l6"><h5>Email</h5>${r[i].bio.email}</div>
                              </li>

                           <li class="row border-effectDiv"> 
                               <div class="title col s12 s6 m12 l6 text-modify"><h5>Place of Birth</h5>${r[i].bio.place_of_birth}</div>
                               <div class="title col s12 vs6 m12 l6 text-modify"><h5>Provincial</h5>${r[i].bio.provincial_Address}</div>
                          </li>
                        </ul>
                      `;
                     }
                       Main.render(`${htmlform}`,document.getElementById('profile'));
     }

education(){
     var r = this.profileData;
     let count = 0;
     let htmlform = ``;
    for(let i = (r.length-1);i>=0;i--){

         if(count++ === r[i].education)

          break;
                         
         htmlform += ` 
                       <h3 class="white-text text-h3">EDUCATION</h3>
                  <ul class="center white lighten-5 border-effectDiv hoverable">
                            <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">College</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.college.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.college.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.college.yrGraduated}</div>
                                 <div class="title col s12 m6 l6"><h5>Course</h5>${r[i].education.college.course}</div>
                              </li>

                              <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">Vocational</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.vocational.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.vocational.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.vocational.yrGraduated}</div>
                                 <div class="title col s12 m6 l6"><h5>Course</h5>${r[i].education.vocational.course}</div>
                              </li>
                         
                              <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">High School</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.highSchool.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.highSchool.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.highSchool.yrGraduated}</div>
                              </li>

                              <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">Elementary</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.elementary.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.elementary.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.elementary.yrGraduated}</div>
                              </li>
                        </ul>
                      
                      `;
                 }
                         
          Main.render(`${htmlform}`,document.getElementById('education'));
     }

company(){
     var r = this.profileData;
     let count = 0;
     let htmlform = ``;
    for(let i = (r.length-1);i>=0;i--){

         if(count++ === r[i].company)

          break;
                         
        htmlform += ` 
                       <h3 class="white-text text-h3">COMPANY</h3>
                  <ul class="center white lighten-5 border-effectDiv hoverable">
                    
                            <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">ESSCOR</h4>
                                 <div class="title col s12 m6 l6"><h5>Name</h5>${r[i].company.esscor.name}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].company.esscor.address}</div>
                                 <div class="title col s12 m6 l6"><h5>Position</h5>${r[i].company.esscor.position}</div>
                                  <div class="title col s12 m6 l6"><h5>Year</h5>${r[i].company.esscor.year}</div>
                              </li>
                         
                               <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">DALTANS</h4>
                                 <div class="title col s12 m6 l6"><h5>Name</h5>${r[i].company.daltans.name}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].company.daltans.address}</div>
                                 <div class="title col s12 m6 l6"><h5>Position</h5>${r[i].company.daltans.position}</div>
                                  <div class="title col s12 m6 l6"><h5>Year</h5>${r[i].company.daltans.year}</div>
                              </li>
                        </ul>
                      
                      `;
                 }
                          
          Main.render(`${htmlform}`,document.getElementById('company'));
     }

     experience(){
     var r = this.profileData;
     let count = 0;
     let htmlform = ``;
    for(let i = (r.length-1);i>=0;i--){

         if(count++ === r[i].experience)

          break;
                         
        htmlform += ` 
                       
               <h3 class="white-text text-h3">EXPERIENCE</h3>
                  <ul class="collection">
                            <li class="collection-item avatar">
                               <div class="row border-effectDiv">
                                     <div class="col s6 m8 l8">
                                     <h4 class="white-text text-h3 center">Line of Duties</h4>
                                     </div>

                                     <div class="col s6 m4 l4">&nbsp;
                                          <button id="flow-toggle" style="margin-right:2%" class="btn waves-effect waves-light" name="action">LARGE TEXT
                                                 <i class="material-icons right">send</i>
                                          </button>
                                     </div>
                                 </div>
                            </li>
                              
                               <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.one}</span>
                               </li>
                      

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.two}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.three}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.four}</span>
                               </li>

                               
                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.five}</span>
                               </li>
                                
                               <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.six}</span>
                               </li>
                      

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.seven}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.eight}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.nine}</span>
                               </li>

                               
                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.ten}</span>
                               </li>
                               
                               <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.eleven}</span>
                               </li>
                      

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.twelve}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.thirteen}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.fourteen}</span>
                               </li>

                               
                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.fifteen}</span>
                               </li>
                        </ul>
                      
                      `;
                 }
                                   
          Main.render(`${htmlform}`,document.getElementById('experience'));
     }

       
 } /* END OF CLASS COMPONENT */

let component = new Component();
component.landingPage();
