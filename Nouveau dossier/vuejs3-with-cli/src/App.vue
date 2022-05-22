<template>
   
   <Header />
   
  <div class="container">

    <Courses>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">List Courses</li>
      </ol>
       <template v-slot:button-right>
         <button class="btn btn-sm btn-success">New</button>
       </template>
    </Courses>

  </div> 

  <Footer 
     url="https://brightcoding.dev" 
     title="Bright Coding Certif" 
     text="Check Your Certif"
     />

</template>

<script>

import Header from './components/Header';
import Courses from './components/Courses';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Header,
    Courses,
    Footer
  },
  data() {
    return {
      message: "Bright Coding"
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.book.value)
      this.$refs.book.classList.add('active');
      this.$refs.book.focus();
    }
  }
}
</script>

<style>
  .container {
    margin-top: 60px;
  }

</style>
