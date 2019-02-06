<template>
  <div id="app" class="navbar is-transparent">
      <div id="nav" class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="./assets/bagel-whole-wheat-everything.png" />Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/market" class="navbar-item">Market</router-link>
        <router-link to="/bakery" class="navbar-item">Bakery</router-link>
        <router-link to="/counter" class="navbar-item">Bagel Counter</router-link>
        <router-link to="/dice" class="navbar-item">Bagel Dice</router-link>
        <router-link to="/awards" class="navbar-item">Awards</router-link>
      </div>
    <router-view/>
  </div>
</template>
