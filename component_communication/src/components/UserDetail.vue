<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name - {{switchName()}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
export default{
	props:{
		myName: {
			type: [String, Array],
            //required: true,
            default: "Name Goes Here"
		}
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
