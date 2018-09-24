function error(message) {
    return { "Error": message }
}



let shoes = {
  data: [
    {
      id: "1",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/czygmnsd5jkicv0bysyh/sko-air-max-1-47NRp8.jpg',
      name: 'Nike air max 1',
      price: '145',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "2",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/buneanofp48ltbma1aev/sko-air-max-plus-gSxJ1K.jpg',
      name: 'Nike air max plus',
      price: '85',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: '3',
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/bzzopsvmjq8cmrc2z4rr/sko-air-force-1-89TqXLpK.jpg',
      name: 'Nike air force 1',
      price: '110',
      description: "Very good shoe. Very good shoe. Very good shoe. Very good shoe. Very good shoe. Very good shoe. Very good shoe. Very good shoe. Very good shoe. ",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: '4',
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/ybzobkaxio2pbpp1vhsv/sko-air-max-97-8WR5cl.jpg',
      name: 'Nike air max 97',
      price: '100',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "5",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/jorp4vs49xg0ki1nblvy/loparsko-air-zoom-pegasus-35-BhPkdm.jpg',
      name: 'Nike zoom pegasus 35',
      price: '95',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "6",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/k258155cqqbmghvctzmj/sko-air-max-command-pwjJ87.jpg',
      name: 'Nike air max command',
      price: '120',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "7",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/qmpi3gj6gcrawtwx3wmk/sko-md-runner-2-NwTze8VA.jpg',
      name: 'Nike md runner 2',
      price: '135',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "8",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/kax2kdt1wd2l3jvpck4x/sko-air-max-1-print-WNgbGH.jpg',
      name: 'Nike air max 1 print',
      price: '95',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "9",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/mhl3aedlgiyg8uwslatx/sko-air-max-plus-tn-se-qMHQ84.jpg',
      name: 'Nike air max plus TN',
      price: '135',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "10",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/fdvhxnilyh2vkebeozfe/loparsko-air-zoom-pegasus-35-99kpgg.jpg',
      name: 'Nike air zoom pegasus 35',
      price: '199',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "11",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/icerugufl5w4jqwitghl/sko-air-max-1-hn80rP.jpg',
      name: 'Nike air max 1',
      price: '145',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "12",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/zfoyvqhcak2ascfrttas/sko-cortez-basic-leather-vR6hXj.jpg',
      name: 'Nike cortez basic leather',
      price: '70',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "13",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/emlontxav8t2yefcwn4j/loparsko-air-max-sequent-3-4VTnGzA4.jpg',
      name: 'Nike air max sequent 3',
      price: '110',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "14",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/cdh643yndarufmpwextp/loparsko-downshifter-8-F0ftkK.jpg',
      name: 'Nike downshifter 8',
      price: '85',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
    {
      id: "15",
      img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/qtijvlj2mi4ph0pqi2qk/loparsko-air-max-sequent-2-9KTdjeG1.jpg',
      name: 'Nike air max sequent 2',
      price: '195',
      description: "Very good shoe.",
      sizes: [37, 38, 39, 40, 41, 42, 43],
    },
  ],

  listShoes: function() {
          return this.data
      },
  removeShoe: function(id){
    for (i in this.data){
      if(this.data[i].id == id){
        this.data.splice(i, 1)
      }
    }
  },
  addShoe: function(shoe){
    if(this.data[shoe] == undefined){
      this.data[shoe] = shoe
      console.log("adding: ", shoe)
    }else{
      console.log("shoe already exists")
      return "This shoe already exists"
    }
    console.log(this.data)
  },
  updateShoe: function(data){
    if(data.id == null){
      highestId = 0
      for(i in this.data){
        if(this.data[i].id > highestId){
          highestId = this.data[i].id
        }
      }
      data.id = highestId + 1
      this.data.push(data)
    }else{
      for (i in this.data){
        if(this.data[i].id == data.id){
          this.data[i].img = data.img
          this.data[i].name = data.name
          this.data[i].price = data.price
          this.data[i].description = data.description
          this.data[i].sizes = data.sizes
        }
      }
    }
  },
}






module.exports = shoes
