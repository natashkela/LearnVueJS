<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'app-red'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent"><h1>Title Goes Here</h1></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
    	data: function(){
    		return {
				selectedComponent:'app-blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
