import { Component } from 'react'

  const container = {
    display: 'inline-block',
  }

 const shoeCard = {
   width: "300px",
   display: 'flex',
   height:  '420px',
   fontFamily: 'Arial',
   backgroundColor: '#aaa9a4',
   flexDirection: 'column',
   marginLeft: '10px',
   marginRight: '10px',
   marginTop: '20px',
   marginBottom: '0px',
   justifyContent: 'space-between',
 }

 const shoeImg = {
  display: 'block',
  width: '100%',
  height: '250px',
  backgroundSize: 'cover',
  objectFit: 'cover',
  backgroundPosition: '50% 50%',
  marginBottom: '10px',
 }

 const shoeName = {
   padding: '0px',
   margin: '0px',
   marginLeft: '10px',
   display: 'inline-block',
   fontSize: '24px',
   color: '#fafafa',
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   maxWidth: '220px',
   backgroundColor: '#aaa9a4',
 }

 const shoePrice = {
   margin: '0px',
   marginRight: '10px',
   display: 'inline',
   float: 'right',
   marginTop: '5px',
   color: '#fafafa',
   backgroundColor: '#aaa9a4',
   width: '50px',
   textAlign: 'right',
 }

 const shoeDesc = {
   margin: '10px',
   maxHeight: '30px',
   minHeight: '30px',
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   color: '#fafafa',
   borderTop: '1px solid lightgrey',
   paddingTop: '10px',
   backgroundColor: '#aaa9a4',
 }

 const shoeDescEdit = {
   margin: '10px',
   maxHeight: '30px',
   minHeight: '30px',
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   color: '#fafafa',
   borderTop: '1px solid lightgrey',
   backgroundColor: '#aaa9a4',
 }

 const shoeUl = {
   listStyle: 'none',
   margin: '0px',
   paddingLeft: '10px',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   color: '#fafafa',
   fontSize: '12px',
 }

 const shoeLi = {
   display: 'inline',
   marginLeft: '5px' ,
   color: '#fafafa'
 }

 const shoeSave = {
   textDecoration: 'none',
   display: 'inline',
   color: '#fafafa',
   margin: '10px',
   padding: '5px',
   backgroundColor: '#76e282',
   width: '50px',
 }

 const shoeEdit = {
   textDecoration: 'none',
   display: 'inline',
   color: '#fafafa',
   margin: '10px',
   padding: '5px',
   backgroundColor: '#75bae2',
   border: 'none',
   fontSize: '16px',
   cursor: 'pointer',
   width: '50px',
 }

 const shoeRemove = {
   textDecoration: 'none',
   display: 'inline',
   color: '#fafafa',
   margin: '10px',
   padding: '5px',
   backgroundColor: '#ce4c5b',
   border: 'none',
   fontSize: '16px',
 }


 const shoeFooter = {
   margin: '10px',
   alignSelf: 'flex-end',
 }



class Shoe extends Component {
  constructor(props) {
      super(props)

      this.state = {
        editing: false,
        name: this.props.data.name,
        price: this.props.data.price,
        description: this.props.data.description,
      }
    this.edit = this.edit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.removeShoe = this.removeShoe.bind(this)
  }


  handleNameChange(e){

    this.setState({name: e.target.value})
  }
  handlePriceChange(e){
    this.setState({price: e.target.value})
  }
  handleDescriptionChange(e){
    this.setState({description: e.target.value})
  }

  edit(e){
    e.preventDefault()
    this.setState({editing: true})
  }

  submitEdit(e){
    let data = {name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                img: this.props.data.img,
                sizes: this.props.data.sizes,
                id: this.props.data.id}
    if(this.state.name.length > 0 && this.state.price.length > 0 && this.state.description.length  > 0){
      console.log("enter")
      fetch('http://localhost:3000/shoes/update', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        res.status === 200 ? this.setState({editing: false}) : ''
      })
    }else{
      e.preventDefault()
    }
  }


  removeShoe(){
    fetch('http://localhost:3000/shoes/' + this.props.data.id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      res.status === 200 ? this.setState({editing: false}) : ''
    })
  }

  componentDidMount() {
    if(this.props.data.id == null){
      this.setState({editing: true})
    }
  }
    render() {
      const listOfSizes = this.props.data.sizes.map((size) => <li style={shoeLi} key={size}>{size},</li>);

        return (
          <div style={container}>

            {this.state.editing ?

              (
              <form>
                <div style={shoeCard}>
                <img src={this.props.data.img} style={shoeImg}/>
                <div>
                  <input placeholder="Name" style={shoeName} value={this.state.name} onChange={this.handleNameChange}/>
                  <input placeholder="price" style={shoePrice} value={this.state.price} onChange={this.handlePriceChange}/>
                </div>
                <input placeholder="Description" style={shoeDescEdit} value={this.state.description} onChange={this.handleDescriptionChange}/>

                <div style={shoeFooter}>
                  <button onClick={this.submitEdit} style={shoeSave}>Save</button>

                  <button style={shoeRemove} onClick={this.removeShoe}>Remove</button>
                </div>

              </div>
            </form>)

              :
              (
              <form>
                <div style={shoeCard}>
                <img src={this.props.data.img} style={shoeImg}/>
                <div>
                  <h3 style={shoeName}>{this.props.data.name}</h3>
                  <p style={shoePrice}>{this.props.data.price} $</p>
                </div>
                <p style={shoeDesc}>{this.props.data.description}</p>
                <div style={shoeFooter}>
                  <button style={shoeEdit} onClick={this.edit}>Edit</button>
                  <button style={shoeRemove} onClick={this.removeShoe}>Remove</button>
                </div>
              </div>
              </form>)
            }

          </div>
        )
    }
}

export default Shoe
