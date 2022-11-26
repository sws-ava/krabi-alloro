
// state
export const state = () => ({
  choosedCategory: '',
  menuItems: [],
  showSpinner: false,
  changePrice: '',
})

// getters
export const getters = {
	
}

// mutations
export const mutations = {
  SET_MENUITEMS(state, menuItems){
    state.menuItems = menuItems
  },
  SET_SHOWSUBITEM(state, subItem){
	state.menuItems.forEach(el => {
		el.items.forEach(element => {
			if(subItem.id == element.id){
				if(subItem.show == true){
					element.show = false
				}else{
					element.show = true
				}
			}
		});
	});
  },
  SET_SHOWITEM(state, item){
	state.menuItems.forEach(el => {
		if(item.id == el.id){
			if(item.show == true){
				el.show = false
			}else{
				el.show = true
			}
		}
	});
  },


  SET_ORDERTOP(state, order){
	state.menuItems.forEach(el => {
		if(el.order == order - 1){
			el.order += 1
		}
		else if(el.order == order){
			el.order -= 1
		}
	})
	state.menuItems.sort((a,b) => a.order - b.order)
  },
  SET_ORDERBOTTOM(state, order){
	state.menuItems.forEach(el => {
		if(el.order == order){ 
			el.order += 1			
		}
		else if(el.order == order + 1){
			el.order -= 1
		}
	})
	state.menuItems.sort((a,b) => a.order - b.order)
  },


  SET_SHOWSPINNER(state, showSpinner){
    state.showSpinner = showSpinner
  },
  SET_CHOOSEDCATEGORY(state, choosedCategory){
    state.choosedCategory = choosedCategory
  },
  
  SET_CHANGEPRICE(state, changePrice){
	state.changePrice = changePrice
  },

  SET_CHANGEPRICEFETCH(state, subItem){
	console.log(state.changePrice)
	if(state.changePrice){
		state.menuItems.forEach(el => {
			el.items.forEach(element => {
				if(subItem.id == element.id){
					element.price = state.changePrice
				}
			});
		});
	}
  },


}

// actions
export const actions = {

	fetchItems({ state, commit }, cat){
	commit('SET_SHOWSPINNER', true)
	setTimeout(() => {
		const menuItems = [
		{
			id:1,
			show: true,
			title:'Том ям коконат',
			items:[
			{id:1, mainItem: 1, order: 1, show: true, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
			{id:2, mainItem: 1, order: 3, show: false, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 85},
			{id:3, mainItem: 1, order: 2, show: false, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 150},
			],
			order: 1,
		},
		{
			id:3,
			show: false,
			title:'Яичница с беконом и зеленым салатом',
			items:[
			{id:7, mainItem: 3, order: 1, show: false, weight: '200', weightKind:'г', price: 55},
			],
			order: 2,
		},
		{
			id:2,
			show: false,
			title:'Coca cola',
			items:[
			{id:4,  mainItem: 2, order: 2, show: true, weight: '0.5', weightKind:'л', price: 20},
			{id:5,  mainItem: 2, order: 1, show: true, weight: '1.0', weightKind:'л', price: 45},
			{id:6,  mainItem: 2, order: 3, show: true, weight: '2.0', weightKind:'л', price: 50},
			],
			order: 3,
		},
		{
			id:4,
			show: false,
			title:'Омлет с охотничьими колбасками, сыром Моцарелла и помидорами черри',
			items:[
			{id:8, mainItem: 4, order: 1, show: true, weight: '200', weightKind:'г', price: 75},
			], 
			order: 4,
		},
		]
		menuItems.sort((a,b) => a.order - b.order)

		commit('SET_MENUITEMS', menuItems)
		commit('SET_CHOOSEDCATEGORY', 'All')
		commit('SET_SHOWSPINNER', false)
	}, 500)
	},
	getItemsByCategory( {state, commit}, cat){
	commit('SET_SHOWSPINNER', true)
	setTimeout(() => {
		// fetch here
		const menuItems = [
		{
		id:1,
		show: true,
		title:'Маргарита',
		items:[
			{id:1, show: true, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
			{id:2, show: false, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 85},
			{id:3, show: false, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 150},
		],
		order: 2,
		},
		{ 
		id:2,
		show: false,
		title:'Diabola',
		items:[
			{id:5, show: true, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
		],
		order: 1, 
		},
		]
		menuItems.sort((a,b) => a.order - b.order)
		commit('SET_MENUITEMS', menuItems)
		commit('SET_CHOOSEDCATEGORY', cat.title_ru)
		commit('SET_SHOWSPINNER', false)
	},500)
	},

	showSubItem( {commit}, subItem ){
		commit('SET_SHOWSPINNER', true)
		commit('SET_SHOWSUBITEM', subItem)
		setTimeout(() =>{
			commit('SET_SHOWSPINNER', false)
    	}, 500)
	},
	showItem( {commit}, item){
		commit('SET_SHOWSPINNER', true)
		commit('SET_SHOWITEM', item)
		setTimeout(() =>{
			commit('SET_SHOWSPINNER', false)
		}, 500)
	},

	orderTop({commit}, order){
		commit('SET_SHOWSPINNER', false)
		commit('SET_ORDERTOP', order)
		setTimeout(() => {
			commit('SET_SHOWSPINNER', false)
		}, 500)
	},
	orderBottom({commit}, order){
		commit('SET_SHOWSPINNER', true)
		commit('SET_ORDERBOTTOM', order)
		setTimeout(() => { 
			commit('SET_SHOWSPINNER', false)
		}, 500)
	},




	changePriceHandler({commit},event){
		commit('SET_CHANGEPRICE', event.target.value.replace(',', '.'))
	},
	changePriceFetch({commit}, subItem){
		commit('SET_SHOWSPINNER', true)
		commit('SET_CHANGEPRICEFETCH', subItem)

		setTimeout(() =>{
			document.querySelectorAll('.priceInput').forEach(element => {
				element.setAttribute('disabled', 'disabled')
			});
			
			document.querySelectorAll('.editPrice.d-none').forEach(el => {
				el.classList.remove('d-none')
			})
			document.querySelector('.priceInputFocus').classList.remove('priceInputFocus')
			let targetParent = document.querySelector('.priceRowFocus')
			targetParent.classList.remove('priceRowFocus')
			commit('SET_SHOWSPINNER', false)
		}, 500)
	},
}
