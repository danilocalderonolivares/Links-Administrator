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
              <form @submit.prevent="AddNewLink">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="NewWebside.Name" placeholder="Name">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="NewWebside.Author" placeholder="Author">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="NewWebside.Url" placeholder="URL">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="NewWebside.Description" placeholder="Description">
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

                </tbody>

              </table>
            </div>

          </div>

        </div>


      </div>

    </div>
    

   
  </div>
</template>


<script src="../src/App.js"></script>


<style>
  #app {}

</style>

