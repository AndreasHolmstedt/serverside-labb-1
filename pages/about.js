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

const About = () => (
  <div style={container}>
    <Menu />
    <div style={header1}><div style={headerChild}>ABOUT</div>
    <p style={p}>This is a good place to brag about yourself.</p>
    <p style={p}>Lets fill it with nonsense.</p>
    <p style={p}>Lorem ipsum dolor sit amet, nisl appareat appellantur eam et. Nam ea justo mollis reprehendunt, no usu labore sadipscing, te mea euismod dolorem. Constituam comprehensam ad has, ne ius reque consulatu splendide, vis dicta deseruisse te. Dolor volumus assentior mei ea, ad alii ceteros mea. Et mea antiopam mandamus liberavisse, ius ne essent recteque iracundia. Has ne utroque menandri consetetur, cu vis choro postea appetere. Elitr quodsi accusata an eum, tantas scaevola persequeris eu sit.</p>
    <p style={p}>Pri mediocrem dissentias no. Est no stet percipit intellegat. Te soluta impetus aeterno vim, luptatum adipiscing at est, sit no porro simul tempor. At tritani reformidans nam, quo at habemus delicata patrioque. Minim verear iracundia sit te, in vide commodo complectitur sed, ei sonet euismod usu. Ex eam ipsum munere docendi.</p>
    <p style={p}>Id pro etiam viris equidem. At mei expetenda deseruisse voluptatibus, at zril facete vocibus duo. Dolor corpora vim cu, mea et quando oporteat. Albucius praesent ad his, erant nonumes qui ea, vim at dicat torquatos constituto.</p>
    <p style={p}>An error dicit alterum his, quo dico vivendo invidunt ei. Nobis homero ne vel, fuisset electram delicatissimi vis ad. Sed ne graeco impedit, est ne justo aliquam postulant. Ne posse prompta adipisci nec. Mei te vocent nominavi laboramus, ullum oblique iuvaret an vis. In liber essent eloquentiam nam, dico natum ut eos.</p>
    <p style={p}>Case erroribus conclusionemque eu usu. Ex inimicus pericula usu, deterruisset definitionem nam ex. Eum hinc solum id. Natum iriure meliore vel in. Duo ad sint legere definiebas, an his hinc dolorum. Te suas singulis philosophia eum. Has tale rebum ex, cum aperiam viderer id.</p>


    </div>
  </div>
)

export default About
