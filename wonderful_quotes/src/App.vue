<template>
    <div class="container">
        <app-header :quotes="quoteArr" :max-quotes="maxQuotes"></app-header>
        <quote-grid :quotes="quoteArr" @quoteDeleted="deleteQuote"></quote-grid>
        <app-new-quote @newQuoteAdded="newQuote"></app-new-quote>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert-info">
                    Info: Click on a Quote to Delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';
    export default {
        data: function(){
        	return {
        		maxQuotes: 10,
                quoteArr: ['Act Like the Person You Want to Become']
            };
        },
        components:{
        	'quote-grid':QuoteGrid,
            'app-new-quote':NewQuote,
            'app-header':Header
        },
        methods: {
        	newQuote(data){
        		if(this.quoteArr.length < 10) {
					this.quoteArr.push(data);
				}
				else{
        			alert("Please delete quote");
                }
            },
            deleteQuote(index){
        		this.quoteArr.splice(index,1);
            }
        }
    }
</script>

<style>
</style>
