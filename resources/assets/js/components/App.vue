<template>
    <div>
        
        <students></students>
        
        <div class="container">
            <div class="row">
                
                <div class="col-md-6">
                    <team :team="'A'"></team>
                </div>
                
                <div class="col-md-6">
                    <team :team="'B'"></team>
                </div>
                
            </div>
        </div>
        
    </div>
</template>


<script>
    ///import store from '../vuex';
    
    import Students from './Students.vue';
    import Team from './Team.vue';
    
    export default {
        data(){
            return {}
        }
    }
</script>