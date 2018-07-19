<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <a href="/" class="navbar-brand"> Links Administrator</a>
    </nav>
    <!-- Main content -->
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-center">
              <h3>Add a new link</h3>
            </div>
            <div class="card-body">
              <form @submit="validateBeforeSubmit">
                <div class="form-group">
                    <input name="name"
                     type="text"
                     class="form-control"
                     v-model="NewWebside.Name" 
                     placeholder="Name"
                    v-validate="'required'">
                    <span v-if="errors.has('name')" id="errorNotification" style="color:red;">
                      {{ errors.first('name') }}
                    </span>
        
                </div>
                <div class="form-group">
                  <input type="text"
                    name="author"
                   class="form-control" 
                   v-model="NewWebside.Author" 
                   placeholder="Author"
                   v-validate="'required'">
                   <span v-if="errors.has('author')" id="errorNotification" style="color:red;">
                      {{ errors.first('author') }}
                    </span>
                </div>
                <div class="form-group">
                  <input 
                  type="text" 
                  name="url"
                  class="form-control" 
                  v-model="NewWebside.Url" 
                  placeholder="URL"
                   v-validate="'required|url'">
                     <span v-if="errors.has('url')" id="errorNotification" style="color:red;">
                      {{ errors.first('url') }}
                    </span>
                </div>
                <div class="form-group">
                  <input type="text"
                   class="form-control"
                   name="description"
                    v-model="NewWebside.Description"
                     placeholder="Description"
                     v-validate="'required'">
                     <span v-if="errors.has('description')" id="errorNotification" style="color:red;">
                    {{ errors.first('description') }}
                    </span>

                </div>
                <div>
                 <button type="submit" class="btn btn-primary">Add</button>
                </div>
              </form>

            </div>

          </div>
        </div>
        <div class="col-sm-8 text-center" >

          <img src="./assets/logo.png">
          <div class="card">
            <div class="card-header">
              <h3> Websides List</h3>
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Operations</th>
                  </tr>

                </thead>
                <tbody>
                  <tr v-for="webside in Websides">
                    <td>
                      <a v-bind:href="webside.Url" target="_blank">{{webside.Name}}</a>
                    </td>
                    <td>
                      {{webside.Author}}
                    </td>
                    <td>
                      {{webside.Description}}
                    </td>
                    <td>
                    <button class="btn btn-danger" @click="DeleteWebside(webside)">Delete</button>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>

        </div>


      </div>

    </div>
    
  </div>
</template>

<script>
import FireBase from "firebase";
import config from "./config";
var dbConfiguration = FireBase.initializeApp(config);
var dbConection = dbConfiguration.database();
var WebsideShema = dbConection.ref('Websides');

export default {

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
      validateBeforeSubmit() {
        this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.AddNewLink();
          return;
        }

        alert("Correct them errors!");
      });

      },
      AddNewLink(){
          WebsideShema.push(this.NewWebside);
     



      },
      DeleteWebside(webside){
        WebsideShema.child(webside['.key']).remove();
      }

  }

}
</script>

<style>
#app {
 
}
</style>
