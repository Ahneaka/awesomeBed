<template>
    <div class="background">
        <NavBar />
        <h1 class="heading">Contact</h1>
        <div class="bg-container d-flex">
            <div class="card my-auto" style="width: 60rem; height: 35rem">
                <div class="card-body">
                    <form class="row g-3">
                        <div class="col-md-4">
                            <label for="validationDefault01" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationDefault01" required>
                        </div>
                        <div class="col-md-4">
                            <label for="validationDefault02" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="validationDefault02" required>
                        </div>
                        <div class="col-md-4">
                            <label for="validationDefaultUsername" class="form-label">Username</label>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" class="form-control" id="validationDefaultUsername"
                                    aria-describedby="inputGroupPrepend2" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationDefault03" class="form-label">City</label>
                            <input type="text" class="form-control" id="validationDefault03" required>
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault04" class="form-label">State</label>
                            <select class="form-select" id="validationDefault04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault05" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="validationDefault05" required>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                                <label class="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
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
  backdrop-filter: blur(10px);
  background-color: rgb(255, 196, 206) !important;
}
</style>