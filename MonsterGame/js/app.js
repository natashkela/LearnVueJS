new Vue({
	el:'#app',
	data:{
		playerHealth:100,
		monsterHealth:100,
		isGameRunning: false,
		gameLog: []
	},
	methods:{
		startGame: function(){
			this.isGameRunning = !this.isGameRunning;
			if(this.isGameRunning == true){
				this.playerHealth = 100;
				this.monsterHealth = 100;
				this.gameLog = [];
			}
		},
		attack: function(){
			var max = 10;
			var min = 3;
			var randomNumber = this.getRandomNumber(3, 10);
			var randomNumberMonsterAttack = this.getRandomNumber(5, 12);
			this.playerHealth = this.playerHealth - randomNumber > 0 ? this.playerHealth - randomNumber : 0;
			this.monsterHealth = this.monsterHealth - randomNumberMonsterAttack > 0 ? this.monsterHealth - randomNumberMonsterAttack : 0;
			this.gameLog.unshift({
				isPlayer:true,
				text:'Player hit the monster and made them lose '+randomNumberMonsterAttack+' points'
			});
			this.gameLog.unshift({
				isPlayer: false,
				text:'Monster attacked the player and made them lose '+randomNumber+' points'
			})
			this.checkGameStatistics();

		},
		specialAttack: function(){
			var randomNumber = this.getRandomNumber(5,12);
			var randomNumberMonsterAttack = this.getRandomNumber(30,40);
			this.playerHealth = this.playerHealth - randomNumber > 0 ? this.playerHealth - randomNumber : 0;
			this.monsterHealth = this.monsterHealth - randomNumberMonsterAttack > 0 ? this.monsterHealth - randomNumberMonsterAttack : 0;
			this.checkGameStatistics();
			this.gameLog.unshift({
				isPlayer:true,
				text:'Player hit the monster with special attack and made them lose '+randomNumberMonsterAttack+' points'
			});
			this.gameLog.unshift({
				isPlayer: false,
				text:'Monster attacked the player during special attack and made them lose '+randomNumber+' points'
			})
		},
		heal: function(){
			var randomNumber = this.getRandomNumber(5,10);
			this.playerHealth = this.playerHealth + randomNumber <= 100 ? this.playerHealth + randomNumber : 100;
			this.gameLog.unshift({
				isPlayer:true,
				text:'Player heals up with '+randomNumber+' points'
			});
		},
		giveup: function(){
			alert('You gave up!');
			this.endGame();
		},
		getRandomNumber: function(min, max){
			return Math.max(Math.floor(Math.random() * 10)%max, min);
		},
		endGame: function(){
			this.isGameRunning = false;
		},
		checkGameStatistics: function(){
			if(this.playerHealth == 0 && this.monsterHealth ==0){
				alert('It is a tie!');
				this.endGame();
			}
			else if(this.playerHealth == 0){
				alert('You lost');
				this.endGame();
			}
			else if(this.monsterHealth == 0){
				alert('You won');
				this.endGame();
			}
		}
	}
});