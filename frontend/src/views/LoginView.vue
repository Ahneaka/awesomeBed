<template>
        <div class="background">
        <NavBar />
        <h1 class="heading">Login</h1>
        <div class="bg-container d-flex">
            <div class="card my-auto" style="width: 60rem; height: 35rem">
                <div class="card-body">
   <form action="/action_page.php" method="post">
  <!-- <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"> 
  </div> -->

  <div class="container">
    <label for="name"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="name" required>

    <label for="pass"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="pass" required>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" check ="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancel">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
            </div>
        </div>
    </div>
  </template>

  <style>


input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(128, 128, 128);;
  box-sizing: border-box;
}

button {
  background-color: rgb(255, 196, 206);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancel {
  width: auto;
  padding: 10px 18px;
  background-color: #403d40;
}

/* .imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
} */

/* img.avatar {
  width: 40%;
  border-radius: 50%;
} */

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancel {
     width: 100%;
  }
}

.flex-container {
  position: relative;
  right: 0;
  top: 80px;
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.bg-container {
  padding-top: 5rem;
}

.card {
  margin: auto;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}
</style>

