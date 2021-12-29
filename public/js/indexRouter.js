var myHome = Vue.extend({
	template:"#myHome"
})

var router = new VueRouter();
router.redirect({
	'/':'/myHome'
})
router.map({
	'/myHome':{
		component:myHome
	}
})
var App = Vue.extend({});
router.start(App,"#app");
