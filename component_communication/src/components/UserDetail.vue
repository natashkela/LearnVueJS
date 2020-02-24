<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name - {{switchName()}}</p>
        <p>User Age - {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Parent</button>
    </div>
</template>

<script>
	import {eventBus} from "../main";
export default{
	props:{
		myName: {
			type: [String, Array],
            //required: true,
            default: "Name Goes Here"
		},
        resetFn:{
			type: Function
        },
        userAge:{
			type: Number
        }
    },
    created(){
		eventBus.$on('ageWasEdited', (data)=>{
			this.userAge = data;
        })
	},
    methods:{
		switchName(){
			return this.myName.split("").reverse().join("");
        },
        resetName(){
			this.myName = 'Tea';
			this.$emit('nameWasReset', this.myName);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
