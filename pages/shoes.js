import { Component } from 'react'
import Shoe from "../components/Shoe.js";
import Menu from "../components/Menu.js";


const shoesUl = {
  listStyle: 'none',
}

const shoesLi = {
  display: 'inline',
  width: '300px',
  flexDirection: 'row',
}

const header1 = {
  marginTop: '86px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const headerChild = {
  fontFamily: 'Arial black',
  letterSpacing: '10px',
  color: '#AAA9A4',
  fontSize: '36px',
  borderBottom: '1px solid lightgrey',
  paddingLeft: '100px',
  paddingRight: '100px',
  display: 'inline',
  paddingBottom: '15px',
}

const p = {
  maxWidth: '600px',
  fontFamily: 'Arial black',
  color: '#AAA9A4',
  textAlign: 'center',
  fontWeight: '600',
  display: 'inline',
}

const shoeAdd = {
  textDecoration: 'none',
  display: 'inline',
  color: '#fafafa',
  padding: '5px',
  backgroundColor: '#76e282',
  width: '50px',
  border: 'none',
  fontSize: '16px',
}


class Shoes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shoes: []
        }
        this.addShoe = this.addShoe.bind(this)
    }

    fetchShoes = () => {
        fetch("http://localhost:3000/shoes", { method: "GET" })
        .then( data => data.json())
        .then ( res => this.listShoes(res))
    }

    listShoes = (list) => {
      for(let i in list){
        this.setState(prevState => ({
          shoes: [...prevState.shoes, list[i]]
        }))
      }
    }

    componentDidMount() {
        this.fetchShoes()
    }

    addShoe(){
      if(this.state.shoes[0].id != null){
        const newShoe = {
          id: null,
          name: '',
          img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/c5to6fwmanuv8nd0zril/sko-air-max-270-flyknit-RHhnqh.jpg',
          price: '',
          description: '',
          sizes: [],
        }
        let temp = this.state.shoes;
        temp.unshift(newShoe)
        this.setState({shoes: temp})
      }
    }



    render() {

      const shoes = this.state.shoes.map((shoe) => <li style={shoesLi} key={shoe.id}><Shoe data={shoe}/></li>);

        return (
            <div>
            <Menu />
            <div style={header1}><div style={headerChild}>SHOES</div>
            <p style={p}>Below is a list of shoes currently in the database. You can edit a shoe by clicking edit, or delete it by clicking remove. You can add a new shoe by clicking here: <button style={shoeAdd} onClick={this.addShoe}>Add</button></p>
            </div>


            <ul style={shoesUl}>{ shoes }</ul>
            </div>
        )
    }
}

export default Shoes
