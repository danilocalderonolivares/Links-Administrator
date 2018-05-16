import FireBase from "firebase";
import config from "./config";
var dbConfiguration = FireBase.initializeApp(config);
var dbConection = dbConfiguration.database();
var WebsideShema = dbConection.ref('Websides');

export default {
  name: 'App',
  firebase :{
    Websides: WebsideShema

  },
  data(){
      return{
          NewWebside:{
              Name:'',
              Author:'',
              Url:'',
              Description:''
    
          }
      }
  },
  methods:{
      AddNewLink(){
          WebsideShema.push(this.NewWebside);
          this.NewWebside.Name='';
          this.NewWebside.Author = '';
          this.NewWebside.Description='';
          this.NewWebside.Url = '';



      }

  }


}
