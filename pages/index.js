import Menu from "../components/Menu.js";


const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'arial',
  color: '#aaa9a4',
}

const header1 = {
  marginTop: '80px',
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

const Index = () => (
  <div style={container}>
    <Menu />
    <div style={header1}><div style={headerChild}>HOME</div>
    <p style={p}>This site is created with React, using Express.js and Next.js</p>
    <p style={p}>It is a database of shoes. You can edit, add and remove shoes. Currently, new shoes will be added with a standard image.</p>
    </div>
  </div>
)

export default Index
