import Component from "../environment/component.js";
import Main from "../environment/Main.js";
import invoker from "../environment/invoker.js";
export default class htmlContent{
    

    static dataArray(){

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
                                 schlAddress:'Dacudao ave,Davao City',
                                    schlName:'TOYOZU automotive Servicing NCII',
                                      course:'Diesel and Gasoline Mechanic',
                                 yrGraduated:'2008-2009'
                              },

                              college:{
                                 schlName:'AMA Computer College Davao Campus',
                                 schlAddress:'123 Gen Malvar st., Davao City',
                                 yrGraduated:'2018-2019',
                                 course:'BSIT'
                              } 
                           }     

                       }];
       return this;
      }     

   }

