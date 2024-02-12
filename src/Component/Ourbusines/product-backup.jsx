import React from 'react'
import '../Ourbusines/ourbusines.css'
import sidetwo from '../../image/homesecond.png'

// const AccordianItem = (props) =>{
//     const contentEl = useRef(null);
//     const {handleToggle,active,faq}=props;
//     const {header , id , text } = faq;

//     return(
//         <>
//         <header className={active == id ? "active" : ""}
//     onClick={()=> handleToggle(id)}>

//         <h2>{header}</h2>
//         <span>Expand More</span>
//         <div ref={contentEl} className={`collapse ${active==id? "show" : ""}`} style={active==id ? {height:contentEl.current.scrollHeight}:{height:"0px"}}>
//         <p>{text}</p>
//         </div>
//         </header>
//         </>
//     )
// }

// const faqs=[
//     {
//         header:"What is Lorem",
//         text:`lorem...`,
//     },
//     {
//         header:"What is Vedu",
//         text:`lorem...`,
//     },
//     {
//         header:"What is Darshan",
//         text:`lorem...`,
//     },
//     {
//         header:"What is Akash",
//         text:`lorem...`,
//     },
// ]

// export const Accordion = ()=>{
//     const [active,setActive]=useState(null);

//     const handleToggle = (index) =>{
//         if(active===index){
//             setActive(null);
//         }
//         else{
//             setActive(index);
//         }
//     };

//     return( 
//         <article>
//             {faqs.map((faq, index)=>{
//                 return(
//                     <AccordianItem key={index} active={active} handleToggle={handleToggle} faq={faq}/>
//                 )
//             })}
//         </article>
//     )
// }

const Production = () => {
  return (
    <>
    <section className='product-main-sec'>
        <div><img src={sidetwo} className="img-fluid" alt="" />
        </div>

    <div className="container bg-light">
        <div className='home-our-text'>
            <p>Home <i class="fa-light fa-greater-than"></i> Our Business <i class="fa-light fa-greater-than"></i> Production</p>
        </div>
    <div className="row mt-3">
        <div className="col-lg-7">
            <div className="expo-text">
                <h3> Exploration & Production</h3>
                <p>MechodalGRoup is one of the largest exploration and production players in India having a balanced domestic conventional and unconventional hydrocarbon portfolio.</p>
            </div>
            <div className="">
                <h3> Portfolio Snapshot</h3>
                <p>RIL’s upstream business comprises the complete chain of activity starting from exploration, appraisal, development and production of hydrocarbons.</p>
                <p>Reliance entered the Exploration and Production (E&P) business by becoming a 30% partner in an unincorporated joint venture with Shell (erstwhile BG) and ONGC in the Panna Mukta and Mid and South Tapti blocks. As of Jan 1st, 2020, our domestic portfolio comprises of conventional oil and gas blocks in Krishna Godavari and Mahanadi basins and two Coal Bed Methane (CBM) blocks, Sohagpur (East) and Sohagpur (West) in Madhya Pradesh.</p>
                <p>Oil and gas is currently being produced from our KG D6 and CBM blocks in India.</p>
            </div>
        </div>
        <div className="col-lg-5">
        <h4>In This Section</h4>
              <ul className="list-arrow">
                <li className='in-this-sec'><a href="#">Development</a></li>
                <li className='in-this-sec'><a href="#">Web3 technologies</a></li>
                <li className='in-this-sec'><a href="#">Reliance Retail</a></li>
                <li className='in-this-sec'><a href="#">Production</a></li>
                <li className='in-this-sec'><a href="#">R&D</a></li>
                <li className='in-this-sec'><a href="#">Animation and Graphics</a></li>
                <li className='in-this-sec'><a href="#">Web3 technologies</a></li>
                <li className='in-this-sec'><a href="#">Blockchain technologies</a></li>
                <li className='in-this-sec'><a href="#">Graphiglow designs</a></li>
              </ul>
        </div>
    </div>
    <div >
        <h3>Partnering for Growth</h3>
        <p>Partnerships represent an important dimension of the E&P business. Reliance and BP entered into transformational partnership with focus on delivering growth and adding value to India’s energy sector. The partnership is a perfect blend of BP’s deepwater and development expertise with Reliance’s project management skills.</p>
        <p>RIL and its partners work closely together and channelize expertise to target high quality prospects and optimise existing and future development plans.</p>
    </div>
    <div >
        <h3>In the upstream business, Reliance aspires to:</h3>
        <div className='upstrem-text'>
            <div className="row justify-content-center">
                <div className="col-sm-6 ">
                    <p>Bring no harm to people and environment, safety is paramount (Zero accidents, 100% compliance)</p>
                </div>
                <div className="col-sm-6">
                    <p>Be recognised as a "Partner of choice" for our stakeholders, building strong relationships which are of mutual advantage</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <p>Be India's top player across the gas value chain</p>
                </div>
                <div className="col-sm-4">
                    <p>Have best-in-class people, processes and technology</p>
                </div>
            </div>
        </div>
    </div>
    <div >
        <h2>Operations</h2>
    </div>
    <div>
        <h3>Conventional</h3>
        <p>In 2002, Reliance struck gas in the D1-D3 field of KG D6 block. These fields were put on production in 2009.</p>
        <p>The KG D6 fields rank amongst one of the largest green-field deepwater oil and gas production facilities in the world. These fields were the first deepwater producing fields in India and remains among the most complex reservoirs in the world. Reliance, along with its partners, has committed ~$6 Billion for second wave of projects in KG D6 over the next few years. To supplement the existing asset base, we continue to look at new opportunities that are a strategic fit with capabilities and integrated petroleum value chain.</p>
        <p>In December, 2020, gas production was started from the R Cluster field in Block KG D6. This is India’s first ultra-deepwater field and Asia’s deepest offshore gas field. In April 2021, gas production was started from Satellite Cluster field in Block KG D6.</p>
    </div>
    <div >
        <h3>Coal Bed Methane</h3>
        <p>Production from the CBM blocks (Sohagpur East and West) commenced in 2017. As part of CBM development program, Reliance has drilled ~ 300 wells and set up three Gas Gathering Stations.</p>
        <p>Reliance Gas Pipeline Limited (RGPL), one of the subsidiaries of RIL operates 300 KM of natural gas pipeline from Shahdol in Madhya Pradesh to Phulpur in Uttar Pradesh to transport gas from RIL’s CBM blocks.</p>
        <p>The CBM project is the largest surface footprint hydrocarbon project of the country.</p>
    </div>
    </div>
    </section>
    </>
  )
}

export default Production