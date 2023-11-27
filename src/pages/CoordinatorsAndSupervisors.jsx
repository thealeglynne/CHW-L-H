
import React from 'react';
import { Link } from 'react-router-dom';

// Importa otros componentes y estilos aquí...

import '../components/shared/buttons/Button'; 
import '../components/shared/buttons/ButtonSkills'; 
import {  } from "../styles/Profile.css";
import Header from '../components/core/Header';
import InterestCard from '../components/shared/cards/InterestCard'
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import {} from '../styles/Titles.css'
import Menu from '../components/menu2';
import {  } from "../pages/home";
import SearchBar2 from "../components/searchbar2";
import Footer from '../components/footer';
import Card from '../components/cards1';
import imgC1 from "../img/1racard.svg";
import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";
import imgC6 from "../img/7card.svg";



const ChwsPromoter = () => {

  return (
    <div style={{ maxWidth:'1920px', overflowX: "hidden", backgroundColor:'white' }}> 
  <main  id="main1" className="main1">

  <Menu></Menu>
  <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '90%', boxSizing: 'border-box',top:"50px" }}>
   
 

  <div style={{position:'relative',top:"-90px", width: '100%', boxSizing: 'border-box', zIndex: 1 }}>
    <SearchBar2 />
    
  </div>

  <div style={{ width: '100%', boxSizing: 'border-box',position:"relative", top:"0px", position:"relative", left:"1%" }}>
    <Header/> 
  </div>

      <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
  <p className='title-route'>Home - CHWs / Promotores</p>
  <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW/Promotor Philosophy</h1>
      </div>
      <div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>Personal and Professional Development</h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'../mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW/P Career Pathway Opportunities</h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
</div>
  {/* final cards */}
                <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
                <div className='Contcard2' style={{display:'flex', flexWrap:'wrap',height:'100vh', alignItems:"center",height:'80vh', width:'70%',backgroundColor:''}} >
                <div className="row" style={{ position:'relative', left:'10%', width:"40%", height:'80vh',  flexWrap:' nowrap',display: "flex", justifyContent: "space-between" }}>
                    <TopicsCard  img={'/mg-2/card5.png'}  title="House of Popular Education" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
                    <TopicsCard  img={'/mg-2/card5.png'} className="mx-4" title="Popular Education Activities for Awareness Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard  img={'/mg-2/card5.png'} title="Popular Education Group Icebreakers Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="row" style={{ position:'relative',  width:"40%", height:'80vh',  flexWrap:' nowrap',display: "flex", justifyContent: "space-between", position:'relative', top:'80%', left:'-27%'}}>
                    <TopicsCard img={'/mg-2/card5.png'} title="Intro to Cultural Humility" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'/mg-2/card5.png'} className="mx-4" title="Conflict Resolution " subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'/mg-2/card5.png'} title="Conflict Resolution Diagram" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                </div>
                
            </div>
        </div>
        
        </div>
       <div style={{width:'80%', height:"52vh", backgroundColor:'#F9F9F9', borderRadius:'10px',  position:"relative", top:'400px', left:'13%'}}>
       <div className="title-h1-chws my-4" style={{paddingTop: "390px"}}></div>
       <div className='cardTopycss' style={{position:'relative', top:'-180px', height:'80%', left:'0%'}}>
 <Link to="/chws-promoter">
            <Card
              title="CHW's/ promotores"   
              imageUrl={imgC1}
            />
          </Link>
          <Link to="/CommunityHealthEducation">
       <Card
        title="Community Health Education"   
        imageUrl={imgC2}
      />
      </Link>
      <Link to="/CoordinatorsAndSupervisors">
       <Card
        title="Coordinators and Supervisors"   
        imageUrl={imgC3}
      />
      </Link>
      <Link to="/AgenciesAndOrganizations">
       <Card
        title="Agencies and Organizations"   
        imageUrl={imgC4}
      />
      </Link>
       <Link to="/ChwIntegrationHealthcare">
       <Card
        title="CHW integration into Healthcare"   
        imageUrl={imgC5}
      />
      </Link>
      <Card
        title="Engagement and Advocacy"   
        imageUrl={imgC6}
      />
       </div>
       </div>
        </main>
        <div style={{position:'relative', top:'450px', backgroundColor:'#003d6a'}}>
            <Footer />
        </div>
    </div>
    
  );
};

export default ChwsPromoter;
