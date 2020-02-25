<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h1 slot="title">{{quoteTitle}}</h1>
                   <p>Do you understand the meaning of it? </p>
                   <span>This is a default slot too</span>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
    	data:function(){
    		return {
    			quoteTitle: 'The quote'
            }
        },
    	components: {
			'app-quote': Quote
		}
    }
</script>

<style>
</style>
