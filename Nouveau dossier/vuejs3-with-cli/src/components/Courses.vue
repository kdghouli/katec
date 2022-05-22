   
   <template lang="">
       <div class="row" v-if="showForm">
           <div class="col-md-6 mx-auto">
                <AddCourse @add="addCourse($event)"/>
           </div>
       </div>   

       <div class="row">
           <div class="col-md-6">
                
            <nav aria-label="breadcrumb">
                <slot></slot>
            </nav>
                
               <h1>List of Courses</h1>
           </div>
           <div class="col-md-6 text-right mt-3">
              
                <button 
                    @click="displayForm" 
                    class="btn btn-sm"
                    :class="{ 'btn-success': !showForm, 'btn-dark': showForm }"
                    >
                        {{ showForm ? 'Close' : 'New' }} 
                </button>

           </div>
       </div>

       <div class="row">
           <div class="col-md-4" v-for="course in courses">
               
                <OneCourse :course="course" @delete="deleteOneCourse($event)"/>
               
           </div>
       </div>

     <teleport to='#alert' v-if="courseDeleted">
         <div class="alert alert-danger text-center">
             <strong>Course is deleted !</strong>
         </div>
     </teleport>

     <teleport to='#alert' v-if="courseAdded">
        <div class="alert alert-success text-center">
            <strong>Course is added successfully !</strong>
        </div>
    </teleport>

   </template>

   <script>
       import OneCourse from './OneCourse'
       import AddCourse from './AddCourse'
   export default {
       components: {
        OneCourse,
        AddCourse
       },
       data() {
           return {
               courseDeleted: false,
               courseAdded: false,
               showForm: false,
               courses: [
                   {
                      id: 1,
                      title: "Learn ReactJS",
                      category: 'Framework',
                      tags: [],
                      image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/C2oT8I1eTXGg69ytJ69f"
                   },
                   {
                      id: 2,
                      title: "Learn Angular",
                      category: 'Framework',
                      tags: [],
                      image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nrOHB2iQTIiGe7hHX9O0"
                   },
                   {
                      id: 3,
                      title: "Learn Javascript",
                      category: 'Framework',
                      tags: [],
                      image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"
                   },
                   {
                      id: 4,
                      title: "Learn NodeJS",
                      category: 'Framework',
                      tags: [],
                      image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/yMO0mZjvTm2pwyeOQUpT"
                   },
                   {
                      id: 5,
                      title: "Learn Laravel",
                      category: 'Framework',
                      tags: [],
                      image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aL2OXWSpTguVo0azLaPb"
                   },
                   {
                      id: 6,
                      title: "Learn Spring Boot",
                      category: 'Framework',
                      tags: [],
                      image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/5miGPBu8RbCSc4hCzN39"
                   }
               ]
           }
       },
       methods: {
        deleteOneCourse(id) {
            this.courses = this.courses.filter(course => course.id != id)
            this.courseDeleted = true;
            setTimeout(() => { this.courseDeleted = false }, 3000)
        },
        addCourse(course) {
            this.courses = [...this.courses, course];
            this.showForm = false;
            this.courseAdded = true;
            setTimeout(() => { this.courseAdded = false }, 3000)
        },
        displayForm() {
            this.showForm = !this.showForm;
        }
       }
   }
   </script>

   <style scoped>
      h1 {
          color: #ffc107;
      }
   </style>