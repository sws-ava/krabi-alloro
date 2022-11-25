
// state
export const state = () => ({
  searchQuery: '',
  choosedCategory: '',
  menuItems: [],
})

// getters
export const getters = {
  searchQuery: state => state.searchQuery,
  choosedCategory: state => state.choosedCategory,
  menuItems: state => state.menuItems,
}

// mutations
export const mutations = {
  SET_SEARCHQUERY(state, searchQuery){
    state.searchQuery = searchQuery
  },
  SET_CHOOSEDCATEGORY(state, choosedCategory){
    state.choosedCategory = choosedCategory
  },
  SET_MENUITEMS(state, menuItems){
    state.menuItems = menuItems
  },


  UPDATE_SEARCHQUERY(state, { searchQuery }){
    state.searchQuery = searchQuery
  },
  UPDATE_CHOOSEDCATEGORY(state, { choosedCategory }){
    state.choosedCategory = choosedCategory
  },
  UPDATE_MENUITEMS(state, menuItems ){
    state.menuItems = menuItems
  },
}

// actions
export const actions = {
  fetchMenuItems () {
    // let menuItems = {id:2}
    // commit('SET_MENUITEMS', {menuItems})
    // const menuItems = [
    //   {
    //     id:1,
    //     show: true,
    //     title:'Том ям коконат',
    //     items:[
    //       {id:1, mainItem: 1, order: 1, show: 1, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
    //       {id:2, mainItem: 1, order: 3, show: 0, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 85},
    //       {id:3, mainItem: 1, order: 2, show: 0, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 150},
    //     ],
    //     order: 1,
    //   },
    //   {
    //     id:3,
    //     show: false,
    //     title:'Яичница с беконом и зеленым салатом',
    //     items:[
    //       {id:7, mainItem: 3, order: 1, show: 0, weight: '200', weightKind:'г', price: 55},
    //     ],
    //     order: 3,
    //   },
    //   {
    //     id:2,
    //     show: false,
    //     title:'Coca cola',
    //     items:[
    //       {id:4,  mainItem: 2, order: 2, show: 1, weight: '0.5', weightKind:'л', price: 20},
    //       {id:5,  mainItem: 2, order: 1, show: 1, weight: '1.0', weightKind:'л', price: 45},
    //       {id:6,  mainItem: 2, order: 3, show: 1, weight: '2.0', weightKind:'л', price: 50},
    //     ],
    //     order: 2,
    //   },
    //   {
    //     id:4,
    //     show: false,
    //     title:'Омлет с охотничьими колбасками, сыром Моцарелла и помидорами черри',
    //     items:[
    //       {id:8, mainItem: 4, order: 1, show: 1, weight: '200', weightKind:'г', price: 75},
    //     ], 
    //     order: 4,
    //   },
    // ]
    
  },
}
