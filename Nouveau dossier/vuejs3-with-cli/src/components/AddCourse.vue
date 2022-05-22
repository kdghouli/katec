<template lang="">
   
   <form @submit.prevent="newCourse">

      <div class="form-group">
         <label for="Title">Title</label>
         <input v-model="title" id="Title" type="text" class="form-control">
      </div>
   
      <div class="form-group">
         <label for="Image">Image url</label>
         <input v-model="image" id="Image" type="text" class="form-control">
      </div>
   
      <div class="form-group">
         <label for="category">Category</label>
         <select v-model="category" id="category" class="form-control">
            <option :value="myCategory.id" v-for="myCategory in categories">
               {{ myCategory.name }}
            </option>
         </select>
      </div>
   
      <div class="form-check form-check-inline my-3">
         <label class="form-check-label">
            <input v-model="typeOfPayment" class="form-check-input" type="radio" name="typeOfPayment" value="free"> Free
         </label>
   
         <label class="form-check-label ml-3">
            <input v-model="typeOfPayment" class="form-check-input" type="radio" name="typeOfPayment" value="paying"> Paying
         </label>
      </div>
   
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" v-model="published">
          Published
        </label>
      </div>
   
      <div class="my-3">
         <h5>Tags</h5>
         <div class="form-check" v-for="tag in tags">
           <label class="form-check-label">
             <input type="checkbox" class="form-check-input" :value="tag" v-model="myTags">
             {{ tag }}
           </label>
         </div>
      </div>
   
      <button type="submit" class="btn btn-block btn-warning">Add Course</button>
   </form>

</template>

<script>
export default {
    data() {
       return {
          title: 'Learn ',
          image: 'your image',
          categories: [
             { id: 1, name: 'Frontend' },
             { id: 2, name: 'Backend' },
             { id: 3, name: 'Mobile' },
          ],
          category: 3,
          typeOfPayment: 'paying',
          published: true,
          tags: ['Framework', 'Frontend', 'Backend', 'Javascript'],
          myTags: []
       }
    },
    methods: {
      newCourse() {
         let title = this.title;
         let image = this.image;

         if(title == "" || image == "") {
            return;
         }

         const course = {
            title,
            image,
            category: this.categories.find(category => category.id == this.category).name,
            tags: this.myTags
         }

         this.$emit('add', course)
         this.$refs.title.value = "";
         this.$refs.image.value = "";
      }
    }
}
</script>

<style lang="">
    
</style>