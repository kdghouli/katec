<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">FLEET</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-black">
          <li class="nav-item">
            <router-link class="nav-link active " aria-current="page" to="/"
              >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/camion">Camion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/voiture">Voiture</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/scooter">Scooter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chariots">Chariots</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Autre
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        <form class="d-flex ">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>




<script>
export default {};
</script>
