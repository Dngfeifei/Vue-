var app = new Vue({
	el:'#app',
	data:{
		list:[{
			id:1,
			name:'iphone',
			price:6199,
			count:1
		},{
			id:2,
			name:'iPad',
			price:5888,
			count:1
		},{
			id:3,
			name:'MacBook',
			price:6199,
			count:1
		}]
	},
	computed:{
		totalPrice:function(){
			var totalPrice = 0;
			for(var i = 0,len = this.list.length;i<len;i++){
				totalPrice += this.list[i].price*this.list[i].count;
			}
			return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods:{
		handClickRm:function(index){
			if(this.list[index].count === 1) return;
			this.list[index].count--; 
		},
		handClickAdd:function(index){
			this.list[index].count++;
		},
		handRemove:function(index){
			this.list.splice(index,1);
		}
	},
	filters:{
		filterA:function(value){
	     	return value.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	}
});