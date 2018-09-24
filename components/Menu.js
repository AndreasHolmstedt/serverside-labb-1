const menu = {
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  height: '60px',
  borderBottom: '1px solid lightgrey',
  backgroundColor: 'rgba(255,255,255,.85)',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

const menuOpt = {
  fontSize: '22px',
  fontFamily: 'arial',
  fontWeight: '600',
  marginLeft: '10px',
  marginRight: '10px',
  textDecoration: 'none',
  color: '#AAA9A4',
}

export default () => (
  <div style={menu}>
    <a style={menuOpt} href="/">Home</a>
    <a style={menuOpt} href="/shoes">Shoes</a>
    <a style={menuOpt} href="/about">About</a>
  </div>
)
