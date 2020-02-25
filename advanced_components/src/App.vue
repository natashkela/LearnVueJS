<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
               <!--<app-quote>-->
                   <!--<h1 slot="title">{{quoteTitle}}</h1>-->
                   <!--<p>Do you understand the meaning of it? </p>-->
                   <!--<span>This is a default slot too</span>-->
               <!--</app-quote>-->

                <component :is="selectedComponent"><p>Default Content</p></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import AppAuthor from './components/Author.vue';
    import AppNew from './components/New.vue';
    export default {
    	data:function(){
    		return {
    			quoteTitle: 'The quote',
                selectedComponent: 'app-quote'
            }
        },
    	components: {
			'app-quote': Quote,
            'app-author': AppAuthor,
            'app-new': AppNew
		}
    }
</script>

<style>
</style>
